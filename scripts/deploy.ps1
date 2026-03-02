# Deploy portfolio to GitHub Pages using git worktree (Windows-compatible)
$ErrorActionPreference = "Stop"

Write-Host "Building..."
npm run build
node scripts/copy404.cjs

$tempDir = ".gh-pages-deploy"
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"

# Clean up any leftover worktree
if (Test-Path $tempDir) {
    git worktree remove $tempDir --force 2>$null
    Remove-Item -Recurse -Force $tempDir 2>$null
}

# Check if gh-pages branch exists on remote
$branchExists = git ls-remote --heads origin gh-pages 2>&1
if ($branchExists -match "gh-pages") {
    Write-Host "Adding worktree from existing gh-pages branch..."
    git worktree add $tempDir gh-pages 2>&1 | Out-Null
    # Clear old files
    Get-ChildItem $tempDir -Exclude ".git" | Remove-Item -Recurse -Force
} else {
    Write-Host "Creating new gh-pages branch..."
    git worktree add --orphan -b gh-pages $tempDir
}

# Copy built files into the worktree
Copy-Item -Path "dist\*" -Destination $tempDir -Recurse -Force

# Commit and push
Push-Location $tempDir
git add -A
$count = (git status --short | Measure-Object -Line).Lines
if ($count -gt 0) {
    git commit -m "Deploy: $timestamp"
    git push origin gh-pages --force
    Write-Host "✔ Deployed successfully to gh-pages!"
} else {
    Write-Host "Nothing to deploy (no changes)."
}
Pop-Location

# Clean up
git worktree remove $tempDir --force
Write-Host "Done."
