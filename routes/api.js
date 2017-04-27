var router = require('express').Router();
var uploadHelper = require('../helpers/uploadHelper');
var textHelper = require('../helpers/textHelper');
var Image = require('../models/image');

router.route('/images')
    .get((req, res, next) => {
        Image.find().sort({_id: 'desc'}).exec(ok(next, (images) => {
            res.json(images);
        }));
    })
    .post((req, res, next) => {
        var name = textHelper.randomChars(4) + '.jpg'
        var fileName = appRoot + '/public/uploads/' + name;
        uploadHelper.save64(req.body.imageContent, fileName, () => {
            uploadHelper.compressImage(fileName, (files) => {
                uploadHelper.uploadToGCS(fileName, name, ok(next, (file) => {
                    console.log(file);
                    var image = new Image;
                    image.set({
                        imagePath: 'https://storage.googleapis.com/imgup/',
                        imageName: name,
                        description: req.body.description
                    });
                    image.save(ok(next, () => {
                        res.json({success: true});
                    }))
                }))

            });
        });
    });

module.exports = router;
