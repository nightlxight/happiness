var fs = require('fs');
const yaml = require('js-yaml');

const {colors, color} = require('./random_color.js');

const car = {
    name: "BMW",
    model: "Series 1",
    color: `${color}`
};

module.exports = {car};