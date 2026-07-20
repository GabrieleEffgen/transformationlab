function Convert-MarkdownToHtml {
  param([string]$MdPath)

  $raw = Get-Content -LiteralPath $MdPath -Raw -Encoding UTF8
  $lines = $raw -split "`r?`n"

  # === Extract metadata from first lines ===
  $title = ""
  $capability = ""

  for ($i = 0; $i -lt 10 -and $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    if ($line -match '^# (.+)$') { $title = $matches[1] }
    elseif ($line -match '^\*\*Capability:\*\*\s*(.+)$') { $capability = $matches[1] }
  }

  # === Find section boundaries ===
  $sections = @()
  $currentStart = -1
  $currentNum = ""

  for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match '^## (\d+)\. ') {
      if ($currentStart -ge 0) {
        $sections += @{ num = $currentNum; start = $currentStart; end = $i }
      }
      $currentStart = $i + 1
      $currentNum = $matches[1]
    }
  }
  if ($currentStart -ge 0) {
    $sections += @{ num = $currentNum; start = $currentStart; end = $lines.Length }
  }

  function Convert-Inline {
    param([string]$text)

    # **bold**
    $text = $text -replace '\*\*(.+?)\*\*', '<strong>$1</strong>'
    # [text](url)
    $text = $text -replace '\[(.+?)\]\((.+?)\)', '<a href="$2" target="_blank" rel="noopener">$1</a>'
    return $text
  }

  # === Build section HTML ===
  function Convert-SectionLines {
    param([string[]]$Lines)

    $html = ""
    $inUl = $false
    $inOl = $false
    $inTable = $false
    $inBlockquote = $false

    for ($i = 0; $i -lt $Lines.Length; $i++) {
      $line = $Lines[$i]
      $trimmed = $line.Trim()

      # Blank line
      if ($trimmed -eq "") {
        if ($inUl) { $html += "</ul>`n"; $inUl = $false }
        if ($inOl) { $html += "</ol>`n"; $inOl = $false }
        if ($inTable) { $html += "</tbody></table></div>`n"; $inTable = $false }
        if ($inBlockquote) { $html += "</blockquote>`n"; $inBlockquote = $false }
        continue
      }

      # HR
      if ($trimmed -eq "---") {
        if ($inUl) { $html += "</ul>`n"; $inUl = $false }
        if ($inOl) { $html += "</ol>`n"; $inOl = $false }
        if ($inTable) { $html += "</tbody></table></div>`n"; $inTable = $false }
        if ($inBlockquote) { $html += "</blockquote>`n"; $inBlockquote = $false }
        $html += "<hr>`n"
        continue
      }

      # Link-only line [text](url)
      if ($trimmed -match '^\[(.+)\]\((.+)\)$') {
        if ($inUl) { $html += "</ul>`n"; $inUl = $false }
        if ($inOl) { $html += "</ol>`n"; $inOl = $false }
        if ($inTable) { $html += "</tbody></table></div>`n"; $inTable = $false }
        if ($inBlockquote) { $html += "</blockquote>`n"; $inBlockquote = $false }
        $html += "<p><a href=""$($matches[2])"" class=""back-link"">$($matches[1])</a></p>`n"
        continue
      }

      # H3
      if ($trimmed -match '^### (.+)$') {
        if ($inUl) { $html += "</ul>`n"; $inUl = $false }
        if ($inOl) { $html += "</ol>`n"; $inOl = $false }
        if ($inTable) { $html += "</tbody></table></div>`n"; $inTable = $false }
        if ($inBlockquote) { $html += "</blockquote>`n"; $inBlockquote = $false }
        $html += "<h3>$($matches[1])</h3>`n"
        continue
      }

      # Blockquote
      if ($trimmed -match '^>(.+)$') {
        if ($inUl) { $html += "</ul>`n"; $inUl = $false }
        if ($inOl) { $html += "</ol>`n"; $inOl = $false }
        if ($inTable) { $html += "</tbody></table></div>`n"; $inTable = $false }
        if (-not $inBlockquote) { $html += "<blockquote>`n"; $inBlockquote = $true }
        $html += "<p>$($matches[1].Trim())</p>`n"
        continue
      }

      # Table row
      if ($trimmed -match '^\|.+\|$') {
        $cells = $trimmed -split '\|' | Where-Object { $_ -ne '' } | ForEach-Object { $_.Trim() }
        if (-not $inTable) {
          $html += "<div class=""table-wrap""><table>`n"
          $inTable = $true
        }
        # Determine if header or data row
        $isHeader = $false
        if ($trimmed -match '^\| ?[-:]+ ?\|') { continue }  # skip align row

        # Check if next line is the alignment row
        if ($i + 1 -lt $Lines.Length -and $Lines[$i+1].Trim() -match '^\| ?[-:]+ ?\|') {
          $isHeader = $true
        }

        if ($isHeader) {
          $html += "<thead><tr>`n"
          foreach ($cell in $cells) {
            $html += "<th>$cell</th>`n"
          }
          $html += "</tr></thead>`n<tbody>`n"
        } else {
          $html += "<tr>`n"
          foreach ($cell in $cells) {
            $cellHtml = Convert-Inline $cell
            $html += "<td>$cellHtml</td>`n"
          }
          $html += "</tr>`n"
        }
        continue
      }

      # Unordered list item
      if ($trimmed -match '^- (.+)$') {
        if ($inOl) { $html += "</ol>`n"; $inOl = $false }
        if ($inTable) { $html += "</tbody></table></div>`n"; $inTable = $false }
        if ($inBlockquote) { $html += "</blockquote>`n"; $inBlockquote = $false }
        if (-not $inUl) { $html += "<ul>`n"; $inUl = $true }
        $item = Convert-Inline $matches[1]
        $html += "<li>$item</li>`n"
        continue
      }

      # Ordered list item
      if ($trimmed -match '^\d+\. (.+)$') {
        if ($inUl) { $html += "</ul>`n"; $inUl = $false }
        if ($inTable) { $html += "</tbody></table></div>`n"; $inTable = $false }
        if ($inBlockquote) { $html += "</blockquote>`n"; $inBlockquote = $false }
        if (-not $inOl) { $html += "<ol>`n"; $inOl = $true }
        $item = Convert-Inline $matches[1]
        $html += "<li>$item</li>`n"
        continue
      }

      # Regular paragraph
      if ($inUl) { $html += "</ul>`n"; $inUl = $false }
      if ($inOl) { $html += "</ol>`n"; $inOl = $false }
      if ($inTable) { $html += "</tbody></table></div>`n"; $inTable = $false }
      if ($inBlockquote) { $html += "</blockquote>`n"; $inBlockquote = $false }
      $parsed = Convert-Inline $trimmed
      if ($parsed -ne "") {
        $html += "<p>$parsed</p>`n"
      }
    }

    # Close any open tags
    if ($inUl) { $html += "</ul>`n" }
    if ($inOl) { $html += "</ol>`n" }
    if ($inTable) { $html += "</tbody></table></div>`n" }
    if ($inBlockquote) { $html += "</blockquote>`n" }

    return $html
  }

  # === Convert each section ===
  $sectionHtml = ""
  foreach ($sec in $sections) {
    $secLines = $lines[$sec["start"]..($sec["end"] - 1)]
    $secTitle = ""

    # Map section number to title based on README heading
    switch ($sec.num) {
      "1"  { $secTitle = "Executive Summary" }
      "2"  { $secTitle = "Business Challenge" }
      "3"  { $secTitle = "Diagnostic Approach" }
      "4"  { $secTitle = "Key Hypotheses" }
      "5"  { $secTitle = "Recommended Transformation" }
      "6"  { $secTitle = "Transformation Roadmap" }
      "7"  { $secTitle = "Governance Model" }
      "8"  { $secTitle = "KPI Framework" }
      "9"  { $secTitle = "Risks and Mitigations" }
      "10" { $secTitle = "Business Impacts and Results" }
      "11" { $secTitle = "Executive Takeaway" }
    }

    $content = Convert-SectionLines -Lines $secLines
    $secId = $sec["num"]
    $id = "section-$secId"
    $sectionHtml += "<section class=""case-section"" id=""$id"">`n"
    $sectionHtml += "<h2>$($sec.num). $secTitle</h2>`n"
    $sectionHtml += "$content</section>`n"
  }

  # === Metadata for hero ===
  $caseNumber = ""
  $folderName = Split-Path -Leaf (Split-Path -Parent $MdPath)
  if ($folderName -match '^(\d+)') { $caseNumber = $matches[1] }

  # === Build final HTML ===
  $heroMetrics = ""
  if ($caseNumber -eq "01") {
    $heroMetrics = @'
<div class="snapshot">
  <div class="metric"><strong>12% &rarr; 2%</strong>Stockout reduction</div>
  <div class="metric"><strong>&asymp; BRL 8M</strong>Identified value opportunity</div>
</div>
'@
  } elseif ($caseNumber -eq "02") {
    $heroMetrics = @'
<div class="snapshot">
  <div class="metric"><strong>18% losses</strong>Core outcome</div>
  <div class="metric"><strong>90-day recovery</strong>Business value</div>
</div>
'@
  } elseif ($caseNumber -eq "24") {
    $heroMetrics = @'
<div class="snapshot">
  <div class="metric"><strong>2 leaders</strong>Expanded roles</div>
  <div class="metric"><strong>Higher autonomy</strong>Decision ownership</div>
</div>
'@
  } elseif ($caseNumber -eq "25") {
    $heroMetrics = @'
<div class="snapshot">
  <div class="metric"><strong>Shared</strong>Priorities across functions</div>
  <div class="metric"><strong>Higher</strong>Adoption of new routines</div>
</div>
'@
  }

  $html = @"
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>$title</title>
<link rel="stylesheet" href="../../assets/style.css">
<link rel="stylesheet" href="../../assets/case.css">
</head>
<body>
<nav>
  <div class="nav">
    <a class="brand" href="../../index.html">THE <span>TRANSFORMATION LAB</span></a>
    <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">&#9776;</button>
    <div class="nav-links" id="nav-links">
      <a href="../../index.html" data-i18n="nav-home">HOME</a>
      <a href="../../capabilities.html" data-i18n="nav-capabilities">CAPABILITIES</a>
      <a href="../../case-studies.html" data-i18n="nav-cases">CASE STUDIES</a>
      <a href="../../frameworks.html" data-i18n="nav-frameworks">FRAMEWORKS</a>
      <a href="../../insights.html" data-i18n="nav-insights">INSIGHTS</a>
      <a href="../../about.html" data-i18n="nav-about">ABOUT</a>
      <a href="../../contact.html" class="nav-cta" data-i18n="nav-contact">CONTACT</a>
    </div>
  </div>
</nav>
<script>
document.getElementById('mobile-toggle').addEventListener('click',function(){document.getElementById('nav-links').classList.toggle('open');});
</script>
<div class="case-layout">
<header class="casehero">
<div class="eyebrow" data-i18n="case${caseNumber}-tag">Case $caseNumber &#183; $capability</div>
<h1 data-i18n="case${caseNumber}-title">$title</h1>
<p class="lead" data-i18n="case${caseNumber}-lead">An executive business case structured around diagnosis, transformation strategy, implementation, governance, and value realization.</p>
$heroMetrics
</header>
$sectionHtml
<div class="back-wrap">
<a class="btn" href="../../index.html" data-i18n="back-btn">&larr; Back to all cases</a>
</div>
</div>
<footer class="footer">
<div class="footer-left" data-i18n="footer-text">&copy; 2026 Gabriele Miranda &#8212; THE TRANSFORMATION LAB</div>
<div class="footer-right">
<a href="mailto:gabrieleufruralrj@gmail.com">gabrieleufruralrj@gmail.com</a>
<a href="https://linkedin.com/in/gabrielemiranda" target="_blank" rel="noopener">linkedin.com/in/gabrielemiranda</a>
</div>
</footer>
<script src="../../assets/i18n.js?v=2"></script>
</body>
</html>
"@

  return $html
}

# === MAIN ===
$siteCases = Get-ChildItem -LiteralPath "C:\Users\Jonathan\Desktop\Gabi\transformationlab\cases" -Directory | Sort-Object Name

foreach ($case in $siteCases) {
  $readmePath = Join-Path -Path $case.FullName -ChildPath "README.md"
  $indexPath = Join-Path -Path $case.FullName -ChildPath "index.html"

  if (Test-Path -LiteralPath $readmePath) {
    Write-Host "Converting: $($case.Name)..."
    $html = Convert-MarkdownToHtml -MdPath $readmePath
    # Use UTF8 without BOM
    $utf8NoBom = New-Object System.Text.UTF8Encoding $false
    [System.IO.File]::WriteAllText($indexPath, $html, $utf8NoBom)
    Write-Host "  Done."
  } else {
    Write-Host "SKIP: $($case.Name) - no README.md"
  }
}

Write-Host "`nAll cases converted!"
