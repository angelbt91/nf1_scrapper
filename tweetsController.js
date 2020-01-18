const Tweet = require('./tweetModel.js');

exports.getTweets = function (req, res) {
    const tweets = [
        {
            body: 'The noble people of Iran—who love America—deserve a government that\'s more interested in helping them achieve their dreams than killing them for demanding respect. Instead of leading Iran toward ruin, its leaders should abandon terror and Make Iran Great Again!',
            user: 'Donald Trump',
            sentiment: 5
        },
        {
            body: 'Glad to see American Factory’s Oscar nod for Best Documentary. It’s the kind of story we don’t see often enough and it’s exactly what Michelle and I hope to achieve with Higher Ground. Congrats to the incredible filmmakers and entire team!',
            user: 'Barack Obama',
            sentiment: 5
        },
        {
            body: 'Team @GoTieLLC and I want to say a HUGE thanks for your amazing support with the GoTie Kickstarter campaign.  Adam hopes to have them in your hands before Father\'s day and we look forward to seeing pictures of ya\'ll in GoTies!\n' +
                '#ChuckNorris #GoTie #Kickstarter #Veteran #Necktie',
            user: 'Chuck Norris',
            sentiment: 5
        }

    ];
    res.json({
        status: "success",
        tweets
    });



};