var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    category: {
        enum: [
            "Foundation", 
            "Concealer", 
            "Setting Spray",
            "Powder",
            "Contour",
            "Highlighter",
            "Blush",
            "Eyeliner",
            "Lipstick",
            "Mascara",
            "Brow",
            "Eyeshadow"
        ],
        type: String
    },
    name: String,
    img_url: String,
    price: Number,
    url: String
});

module.exports = mongoose.model('Product', productSchema);