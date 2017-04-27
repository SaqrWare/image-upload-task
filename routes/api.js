var router = require('express').Router();

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
        console.log(req)
    });

module.exports = router;
