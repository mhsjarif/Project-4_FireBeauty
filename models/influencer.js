var mongoose = require('mongoose');

var influencerSchema = new mongoose.Schema({
    name: String,
    youtube_id: String,
    video_url: String,
    favorites: [{type: mongoose.Schema.Types.ObjectId, ref:'Product'}]
});

module.exports = mongoose.model('Influencer', influencerSchema);