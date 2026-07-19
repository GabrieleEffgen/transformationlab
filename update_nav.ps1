# Update all case page navigation
 = Get-ChildItem -Path "C:\Users\Jonathan\Desktop\Gabi\transformationlab\cases" -Recurse -Filter "index.html"
 = @'
<nav>
  <div class="nav">
    <a class="brand" href="../../index.html">THE <span>TRANSFORMATION LAB</span></a>
    <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">&#9776;</button>
    <div class="nav-links" id="nav-links">
      <a href="../../index.html">HOME</a>
      <a href="../../capabilities.html">CAPABILITIES</a>
      <a href="../../case-studies.html">CASE STUDIES</a>
      <a href="../../frameworks.html">FRAMEWORKS</a>
      <a href="../../insights.html">INSIGHTS</a>
      <a href="../../about.html">ABOUT</a>
      <a href="../../contact.html" class="nav-cta">CONTACT</a>
    </div>
  </div>
</nav>
'@

 = @'
<script>
document.getElementById('mobile-toggle').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('open');
});
</script>
'@

foreach ( in ) {
     = Get-Content -Path .FullName -Raw
    
    # Replace old nav
     =  -replace '(?s)<nav>.*?</nav>', 
    
    # Add mobile toggle script before closing body
     =  -replace '(</body>)', "
$1"
    
    Set-Content -Path .FullName -Value  -NoNewline
    Write-Host "Updated: "
}
