var mongoose = require('mongoose');
var bcypt = require('bcrypt');

const SALT_ROUNDS = 6;

var userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true, lowercase:true, unique: true},
    password: String,
    followed: [{type: mongoose.Schema.Types.ObjectId, ref: 'Influencer'}]
}, {
    timestamps: true
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function(next) {
    // this = current doc
    var user = this;
    if (!user.isModified('password')) return next();
    // salt and hash the password if its changed
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        // replace password with the hash(salty pass)
        user.password = hash;
        next();
    });
})

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);