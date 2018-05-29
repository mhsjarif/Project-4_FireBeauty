var Influencer = require('../models/influencer');
var request = require('request');
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/';
var YT_PART = 'snippet,contentDetails,statistics,status';

function getAllInfluencers(req, res) {
    console.log('all influencers function hit');
    Influencer.find({})
    .then(influencers => res.json(influencers))
}

function getImgUrl(req, res) {
   request(`${ROOT_URL}channels?id=${req.params.youtubeId}&key=${process.env.YT_API_KEY}&part=${YT_PART}`, 
        function(err, response, body) {
            var data = JSON.parse(body);
            console.log(data.items);
            res.json({url: data.items[0].snippet.thumbnails.medium.url})
        }
    );
};

module.exports = {
    getAllInfluencers,
    getImgUrl
  };