const fs = require('fs');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminJpegoptim = require('imagemin-jpegoptim');
const imageminMozjpeg = require('imagemin-mozjpeg');

//Google cloud
var gcs = require('@google-cloud/storage')({
    projectId: 'rqiim-image-upload',
    keyFilename: appRoot + '/config/gcloudKey.json'
});

var bucket = gcs.bucket('imgup')
var options = {
    entity: 'allUsers',
    role: gcs.acl.READER_ROLE
};

bucket.acl.add(options, function (err, aclObject) {
});


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
    uploadToGCS(fileName, name, cb)
    {
        //TODO: Google gcs api
        bucket.upload(fileName, (err) => {
            if(err) return cb(err);
            bucket.file(name).acl.add({
                entity: 'allUsers',
                role: gcs.acl.READER_ROLE
            },cb);
        });
    }
}
;