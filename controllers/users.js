var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      res.json({token: createJWT(user)});
    })
    .catch(err => res.status(400).json(err));
}

function login(req, res) {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        var token = createJWT(user);
        res.json({token: createJWT(user)});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  }).catch(err => res.status(401).json(err));
}

function followInfluencer(req, res) {
  User.findOne({_id: req.user._id}, function(err, user) {
    if (!user.followed.some(i => i.equals(req.params.id))) {
      user.followed.push(req.params.id);
      user.save((err, user) => res.json(user));
    }
  })
}

function getFollowed(req, res) {
  User.findById(req.user._id).populate({
      path: 'followed',
      populate: {
        path: 'favorites'
      }
  }).exec((err, user) => {
    res.json(user);
  })
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = {
  signup,
  login,
  followInfluencer,
  getFollowed
};