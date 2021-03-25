var express = require("express");
var path = require("path");
var port = process.env.PORT || 5000


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/"));
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.listen(port, () => {
    console.log(`App is running at port: ${port}`);
})