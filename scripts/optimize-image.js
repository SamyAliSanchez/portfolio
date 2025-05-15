const sharp = require('sharp');

sharp('public/screenshot.png')
  .resize(1200, 630, {
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 1 }
  })
  .toFile('public/preview.png')
  .then(info => { console.log('Image processed successfully:', info); })
  .catch(err => { console.error('Error processing image:', err); }); 