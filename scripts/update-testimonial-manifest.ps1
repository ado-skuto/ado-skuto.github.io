$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$testimonialDir = Join-Path $repoRoot "assets/images/testimonials"
$manifestPath = Join-Path $testimonialDir "manifest.js"
$supportedExtensions = @(".jpg", ".jpeg", ".png", ".webp", ".gif")

if (!(Test-Path $testimonialDir)) {
  New-Item -ItemType Directory -Path $testimonialDir | Out-Null
}

$items = @(Get-ChildItem -Path $testimonialDir -File |
  Where-Object { $supportedExtensions -contains $_.Extension.ToLowerInvariant() } |
  Sort-Object Name |
  ForEach-Object {
    $relativePath = "assets/images/testimonials/$($_.Name)"
    @{
      src = $relativePath
      alt = "Screenshot referencie od klienta"
    }
  })

$json = ConvertTo-Json -InputObject $items -Depth 3

if (!$json) {
  $json = "[]"
}

$content = "window.TESTIMONIAL_SCREENSHOTS = $json;`n"
Set-Content -Path $manifestPath -Value $content -Encoding UTF8

Write-Host "Updated $manifestPath with $($items.Count) testimonial screenshot(s)."
