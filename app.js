require("typescript-sdk/dist/integrations/express/register");
const express = require('express');
var app = express();
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
app.get('/', function (req, res) {
    res.send('Hello World!\n');
});
app.get('/:name', async(req, res)=>{
    const name = req.params.name;
    const response = await axios.get(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${process.env.apikey}&q=${name}&fx=no&cc=no&mca=yes&format=json`);
    res.send(response.data);
})
var server = app.listen(3000,() =>
console.log(`Example app listening on port 3000!`));
module.exports = server;
