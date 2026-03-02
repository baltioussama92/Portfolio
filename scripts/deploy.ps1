$ErrorActionPreference = "Stop"
$tempDir = ".gh-pages-deploy"
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

if (Test-Path $tempDir) {
    git worktree remove $tempDir --force 2>$null
    Remove-Item -Recurse -Force $tempDir 2>$null
}

$branchExists = git ls-remote --heads origin gh-pages 2>&1
if ($branchExists -match "gh-pages") {
    Write-Host "Updating existing gh-pages branch..."
    git worktree add $tempDir gh-pages 2>&1 | Out-Null
    Get-ChildItem $tempDir -Exclude ".git" | Remove-Item -Recurse -Force
} else {
    Write-Host "Creating new gh-pages branch..."
    git worktree add --orphan -b gh-pages $tempDir
}

Copy-Item -Path "dist\*" -Destination $tempDir -Recurse -Force

Push-Location $tempDir
git add -A
$lines = (git status --short | Measure-Object -Line).Lines
if ($lines -gt 0) {
    git commit -m "Deploy: $timestamp"
    git push origin gh-pages --force
    Write-Host "Deployed successfully!"
} else {
    Write-Host "Nothing to deploy."
}
Pop-Location
git worktree remove $tempDir --force
