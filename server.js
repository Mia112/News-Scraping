var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser =  require("body-parser");

var PORT = process.env.PORT || 3000;


// Initialize Express
var app = express();

// 
var router = express.Router();

//Require our routes file pass our router object
require("./config/routes")(router);

// Make public a static folder
app.use(express.static(__dirname + "/public"));


app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
    
}));

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.connect(db, function(error) {
    if(error) {
        console.log(error);
    }
    else{
        console.log("mongoos connection is successful");
    }
}
);


// Start the server
app.listen(PORT, function() {
    console.log("App Listening on port " + PORT);
  });

