var express = require('express');
var router = express.Router();
var usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/followInfluencer/:id', usersCtrl.followInfluencer);
router.get('/followed', usersCtrl.getFollowed);
router.delete('/unfollowInfluencer/:id', usersCtrl.unfollowInfluencer);



/*---------- Protected Routes ----------*/





module.exports = router;