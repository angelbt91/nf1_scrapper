const cheerio = require('cheerio');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {

    // paso 1: crear el schema de la bdd
    var tweetSchema = new mongoose.Schema({
        user: String,
        date: Number,
        body: String
    });

    // paso 2: crear el modelo de un tweet
    var Tweet = mongoose.model('Tweet', tweetSchema);

    // paso 3: cargar el chrome headless y hacer scroll y scroll
    const url = 'https://twitter.com/realdonaldtrump?lang=en';

    const puppeteer = require('puppeteer');

    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({width: 1366, height: 768});
        await page.goto('https://twitter.com/realdonaldtrump?lang=en');

        await page.evaluate( () => {
            window.scrollBy(0, 50000);
        });
        await page.waitFor(4000);

        await page.evaluate( () => {
            window.scrollBy(0, 50000);
        });
        await page.waitFor(4000);

        await page.evaluate( () => {
            window.scrollBy(0, 50000);
        });
        await page.waitFor(4000);

        let html = await page.$eval('.ProfilePage', el => el.innerHTML);

        await browser.close();

        // paso 4: para cada tweet, creamos un modelo y lo guardamos
        const $ = cheerio.load(html);
        const tweets = $('.tweet');

        let numSavedTweets = 0;

        tweets.each(function () {
            const user = $(this).find('.fullname').text();
            const body = $(this).find('.tweet-text').text();
            const date = $(this).find('._timestamp').attr('data-time');

            let tweetToSave = new Tweet({user: user, body: body, date: date});

            tweetToSave.save(function (err, tweetToSave) {
                if (err) return console.error(err);
            });

            numSavedTweets++;

        });

        console.log("¡" + numSavedTweets + " tweets guardados!");

    })();

});





