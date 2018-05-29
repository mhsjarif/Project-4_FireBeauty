var express = require('express');
var router = express.Router();
var influencersCtrl = require('../../controllers/influencers');

/*---------- Public Routes ----------*/
router.get('/', influencersCtrl.getAllInfluencers);
router.get('/:youtubeId/img', influencersCtrl.getImgUrl);





/*---------- Protected Routes ----------*/





module.exports = router;