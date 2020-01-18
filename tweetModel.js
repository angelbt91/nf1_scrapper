var mongoose = require('mongoose');

// Setup schema
var tweetSchema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {collection:"tweets"});

// Export Tweet model
var tweets = module.exports = mongoose.model('tweets', tweetSchema);

module.exports.get = function (callback, limit) {
    tweets.find(callback).limit(limit);
};