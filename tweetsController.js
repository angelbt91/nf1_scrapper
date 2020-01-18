const Tweet = require('./tweetModel.js');
var Sentiment = require('sentiment');

const tweets = [
    {
        body: "The noble people of Iran—who America—deserve a government that\'s more interested in helping them achieve their dreams than killing them for demanding respect. Instead of leading Iran toward ruin, its leaders should abandon terror and Make Iran !",
        user: 'Donald Trump',
        sentiment: 5
    },
    {
        body: "Glad to see American Factory's Oscar nod for Best Documentary. It's the kind of story we don't see often enough and it's exactly what Michelle and I hope to achieve with Higher Ground. Congrats to the incredible filmmakers and entire team!",
        user: 'Barack Obama',
        sentiment: 5
    },
    {
        body: `Team @GoTieLLC and I want to say a HUGE thanks for your amazing support with the GoTie Kickstarter campaign.  Adam hopes to have them in your hands before Father\'s day and we look forward to seeing pictures of ya\'ll in GoTies!\n' +
            '#ChuckNorris #GoTie #Kickstarter #Veteran #Necktie`,
        user: 'Chuck Norris',
        sentiment: 5
    }
];

exports.getTweets = function (req, res) {

    /*var tweetsToSend;

    function addSentiment(phrases) {
        tweetsToSend = phrases.map(tweet => {
            var sentiment = new Sentiment();
            var result = sentiment.analyze(tweet.body);
            tweet.sentiment = result.score;
            return tweet;
        })
        console.log(tweetsToSend);
    }

    addSentiment(tweets);

    res.json(tweetsToSend);*/
    var new_ = new Tweet({body: "Huhuhuhuhuhu",
        date: 7777888841212,
        user: "jiadjiajsdis"});

    new_.save();

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