//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/vendor"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

//if statement allows running locally as well as on keroku
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port 3000");
});
