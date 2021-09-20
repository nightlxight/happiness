/*
npm i js-yaml
*/

var fs = require('fs');
const yaml = require('js-yaml');
const data = yaml.load(fs.readFileSync('./data.yml', 'utf8'));

console.log(data.hewo);