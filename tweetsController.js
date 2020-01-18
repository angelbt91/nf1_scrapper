const Tweet = require('./tweetModel.js');

exports.getTweets = function (req, res) {
    /*
    res.json({
        status: "success",
        message: "El endpoint de get se ha ejecutado"
    });
    */

    console.log('get tweets');
    Tweet.get(function (err, tweets) {

        console.log('get tweets model');
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tweets retrieved successfully",
            data: tweets
        });
    });


};