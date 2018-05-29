var Influencer = require('../models/influencer');

function getAllInfluencers(req, res) {
    console.log('all influencers function hit');
    Influencer.find({})
    .then(influencers => res.json(influencers))
}

module.exports = {
    getAllInfluencers
  };