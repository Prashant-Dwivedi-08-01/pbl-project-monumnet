//Importing the Modules
var express = require('express')
const path = require('path');
const fetch = require("node-fetch");
var cors = require('cors') //Use this Package to know More:  https://www.npmjs.com/package/cors

//Creating the Express App.
var app = express()
// EXPRESS RELATED STUFF
app.use("/static", express.static("static"));// For serving static files
app.use(express.urlencoded()) //is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app. use(express.
app.use(cors())//To mangage the Cross Origin Request Error.


//Template Engine RELATED STUFF
// app.set("view engine", "pug");// Set the template engine as pug
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'))// Set the views directory
app.engine('html', require('ejs').renderFile);

//Serving the URLs
app.get("/", (req, res) => {
    res.render("index.html")
})

//Starting the Server
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})

