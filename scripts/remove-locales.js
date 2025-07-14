const fs = require('fs');
const path = require('path');

module.exports = async function (context) {
  // context.appOutDir is the output directory (e.g., dist/win-unpacked)
  const localesDir = path.join(context.appOutDir, 'locales');
  if (!fs.existsSync(localesDir)) return;
  fs.readdirSync(localesDir).forEach(file => {
    if (file !== 'en-US.pak') {
      fs.unlinkSync(path.join(localesDir, file));
    }
  });
}; 