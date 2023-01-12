require("typescript-sdk/dist/integrations/express/register");
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World!\n');
});

var server = app.listen(3000,() =>
console.log(`Example app listening on port 3000!`));
module.exports = server;