$cases = @{
  8  = '08-continuous-improvement-system'
  9  = '09-ai-enabled-operations'
  10 = '10-inventory-optimization'
  11 = '11-lean-office-transformation'
  12 = '12-enterprise-change-management'
  13 = '13-capex-governance'
  14 = '14-transformation-management-office'
}

foreach ($cn in 8..14) {
  $c = $cn.ToString('00')
  $dir = $cases[$cn]
  $fp = "cases/$dir/index.html"
  $content = Get-Content $fp -Raw

  # Fix corrupted thead in section 7 (governance table)
  $content = $content -replace '<th data-i18n="[^"]*"ead><tr>\s*', "<thead><tr>`n"

  # Fix first th after thead for Forum
  $content = $content -replace '(?s)<thead><tr>\s*<th>Forum</th>', "<thead><tr>`n<th data-i18n=`"c${c}-s7-th1`">Forum</th>"

  # Fix corrupted thead in section 9 (risks table)
  $content = $content -replace '<th data-i18n="[^"]*"ead><tr>\s*', "<thead><tr>`n"

  # Fix first th after thead for Risk
  $content = $content -replace '(?s)<thead><tr>\s*<th>Risk</th>', "<thead><tr>`n<th data-i18n=`"c${c}-s9-th1`">Risk</th>"

  Set-Content $fp $content
  Write-Host "Fixed: case ${c}"
}
