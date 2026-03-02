// CommonJS script (.cjs bypasses "type":"module" in package.json)
const fs = require('fs');
fs.copyFileSync('dist/index.html', 'dist/404.html');
console.log('✔ dist/404.html created');
