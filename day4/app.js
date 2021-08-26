"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
console.log('hi');
var app = express_1["default"]();
var PORT = 8888;
// TODO: For a GET request like http://localhost:8888?name=chris
// only display on the web page "chris" OR display "Chris not found" if the name 
// isnt in the list.
app.get('/names', function (req, res) {
    fs_1["default"].readFile('./resources/names-list.txt', 'utf8', function (err, data) {
        if (err) {
            console.error(err);
            return;
        }
        // successfully got file data
        var responseBody = "HTTP " + req.method + " request received at " + req.url + ". Names are " + data;
        res.write("hello");
        res.write("world");
        res.end();
        // does same as above
        res.send("hello world");
        //res.send(responseBody);
    });
});
app.post('/', function (req, res) {
    res.send("HTTP " + req.method + " request received at " + req.url);
});
app.put('/', function (req, res) {
    res.send("HTTP " + req.method + " request at " + req.url);
});
app["delete"]('/', function (req, res) {
    res.send("HTTP " + req.method + " request received at " + req.url);
});
app.listen(PORT, function () {
    console.log("app listening at http://localhost:" + PORT);
});
