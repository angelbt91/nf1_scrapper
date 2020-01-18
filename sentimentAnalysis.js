var Sentiment = require('sentiment');

function addSentiment(phrase) {
    foreach ()



    var sentiment = new Sentiment();
    var result = sentiment.analyze(phrase);
    console.dir(phrase + " || Score: " + result.score);
    return result;
}

const phrases = [
    {
        "body": "",
        "user": ""
    },
    {
        "body": "",
        "user": ""
    },
    {
        "body": "",
        "user": ""
    },
    {
        "body": "",
        "user": ""
    },
    {
        "body": "",
        "user": ""
    },
    {
        "body": "",
        "user": ""
    },
]

getSentiment(phrases);