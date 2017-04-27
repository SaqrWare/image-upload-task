var router = require('express').Router();
var uploadHelper = require('../helpers/uploadHelper');
var textHelper = require('../helpers/textHelper');
router.route('/images')
    .get((req, res, next) => {
        let data = [
            {
                _id: "1",
                imagePath: "https://placehold.it/",
                imageName: "1600x900",
                description: "image1"
            },
            {
                _id: "2",
                imagePath: "https://placehold.it/",
                imageName: "1600x900",
                description: "image2"
            },
            {
                _id: "3",
                imagePath: "https://placehold.it/",
                imageName: "1600x900",
                description: "image3"
            }
        ];
        res.json(data);
    })
    .post((req, res, next) => {
        var name = textHelper.randomChars(4) + '.jpg'
        var fileName = appRoot + '/public/uploads/' + name;
        uploadHelper.save64(req.body.imageContent, fileName, () => {
            uploadHelper.compressImage(fileName, (files) => {
                res.json({message: 'yos idiot!'});
                console.log(files)
            });
        });
    });

module.exports = router;
