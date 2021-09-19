var fs = require('fs');

var colors = [
    "red",
    "green",
    "black",
    "white"
];

var color = colors[Math.floor(Math.random() * colors.length)];
module.exports = {color};