var fs = require('fs');
const yaml = require('js-yaml');
const settings = yaml.load(fs.readFileSync('../settings.yml', 'utf8'));
const {car} = require('./car-bmw.js');

function log() {
    console.log("Car name:" + settings.space + car.name);
    console.log("Car model:" + settings.space + car.model);
    console.log("Car color:" + settings.space + car.color);
};

try {
    log();
} catch (error) {
    console.log(`${settings.errorMessage}`);
    console.error(error);
}