const fs = require('fs');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminJpegoptim = require('imagemin-jpegoptim');
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
    save64(base64, fileName, cb){
        //TODO: Save base64
        var data = base64.replace(/^data:image\/\w+;base64,/, '');
        fs.writeFile(fileName, data, {encoding: 'base64'}, cb);
    },
    compressImage(path, cb){
        imagemin([path], appRoot + '/public/uploads/', {
            plugins: [
                imageminJpegtran(),
                imageminJpegRecompress(),
                imageminJpegoptim(),
                imageminMozjpeg()
            ]
        }).then((files) => {
            cb(files)
        })

    },
    uploadToGCS()
    {
        //TODO: Google gcs api
    }
}
;