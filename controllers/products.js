var Product = require('../models/product');


function getProduct(req, res) {
    Product.find({_id: req.params.id})
    .then(product => res.json(product))
}

module.exports = {
    getProduct
}