var express = require('express');
var router = express.Router();
var productsCtrl = require('../../controllers/products');

/*---------- Public Routes ----------*/
router.get('/:id', productsCtrl.getProduct);


/*---------- Protected Routes ----------*/



module.exports = router;