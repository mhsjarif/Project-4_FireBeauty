var Influencer = require('../models/influencer');
var request = require('request');
var ROOT_URL = 'https://www.googleapis.com/youtube/v3/';
var YT_PART = 'snippet,contentDetails,statistics,status';

function getAllInfluencers(req, res) {
    Influencer.find({})
    .then(influencers => res.json(influencers))
}

function getInfluencer(req, res) {
    Influencer.find({_id: req.params.id})
    .then(influencer => res.json(influencer))
}

function getYouTubeChannel(req, res) {
   request(`${ROOT_URL}channels?id=${req.params.youtubeId}&key=${process.env.YT_API_KEY}&part=${YT_PART}`, 
        function(err, response, body) {
            var data = JSON.parse(body);
            console.log(data.items);
            res.json({thumbnailUrl: data.items[0].snippet.thumbnails.medium.url})
        }
    );
};

module.exports = {
    getAllInfluencers,
    getInfluencer,
    getYouTubeChannel
  };