const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

let directory_name = 'app/img/orign';

let filenames = fs.readdirSync(directory_name);

filenames.forEach((file) => {
    const fileFormat = getExtension(file);
    console.log(fileFormat, file);
    if (fileFormat === 'svg') {
        console.log('svg not processed with sharp');
        return;
    }

    let sh = sharp('./app/img/orign/' + file);
    if (fileFormat === 'jpg' || fileFormat === 'jpeg') {
        sh = sh.jpeg({ quality: 70 }).resize(1024);
    } else if (fileFormat === 'png') {
        sh = sh.png({ quality: 70 }).resize(1024);
    }
    sh.toFile('./app/img/orign/output/' + file, function (err, info) {
        console.log(info);
        if (err) {
            console.log('error orcurred in image optimization');
            return;
        }
    })
});

function getExtension(filename) {
    let ext = path.extname(filename || '').split('.');
    return ext[ext.length - 1];
}