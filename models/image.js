var mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({
    imagePath: String,
    imageName: String,
    description: String,
    createdAt: Date
});

imageSchema.pre('save', function (next) {
    if (this.isNew && !this.createdAt) this.createdAt = new Date();
    next();
});
module.exports = mongoose.model('Image', imageSchema, 'images');