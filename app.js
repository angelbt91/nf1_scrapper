// Import express, body parser, mongoose, routes
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let apiRoutes = require("./api-routes");

// Initialise the app
let app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
var db = mongoose.connection;

console.log(db.model("tweets").schema);

// Added check for DB connection
if (!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App, just as an example
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});