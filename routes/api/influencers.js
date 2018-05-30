var express = require('express');
var router = express.Router();
var influencersCtrl = require('../../controllers/influencers');

/*---------- Public Routes ----------*/
router.get('/', influencersCtrl.getAllInfluencers);
router.get('/:id', influencersCtrl.getInfluencer);
router.get('/:youtubeId/channel', influencersCtrl.getYouTubeChannel);





/*---------- Protected Routes ----------*/





module.exports = router;