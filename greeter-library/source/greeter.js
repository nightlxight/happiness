var fs = require('fs');
const yaml = require('js-yaml');

function dayGreet() {
    let dayGreetResponses = [
        "Good day!",
        "Good day ;)" //,
        // add more responses here
        // the last response should not contain a comma
    ];
    let dayGreetResponse = dayGreetResponses[Math.floor(Math.random() * dayGreetResponses.length)];
    console.log(dayGreetResponse);
};

function nightGreet() {
    let nightGreetResponses = [
        "Good night!",
        "Good night :)"
    ];
    let nightGreetResponse = nightGreetResponses[Math.floor(Math.random() * nightGreetResponses.length)];
    console.log(nightGreetResponse);
};


try {
    if (new Date().getHours() < 18) {
        dayGreet();   
    } else {
        nightGreet();
    }
} catch  (error) {
    console.log("There was an error!");
    console.error(error);
}