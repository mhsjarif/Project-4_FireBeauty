var express = require('express');
var router = express.Router();
var usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.post('/followInfluencer', usersCtrl.followInfluencer);



/*---------- Protected Routes ----------*/





module.exports = router;