const   imagemin = require('imagemin'),
        webp = require('imagemin-webp')
const   outputFolder = './img/webp'
const   produceWebP = async () => {
  await imagemin(['img/**/*.png'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  })
  console.log('PNGs processed')
  await imagemin(['img/**/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 85
      })
    ]
  })
  console.log('JPGs and JPEGs processed')
}
produceWebP()

// node webp.js - start js