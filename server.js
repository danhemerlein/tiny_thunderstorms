
var weather = require('openweather-apis');
var Twitter = require('twitter');
const keys = require('./config');

weather.setAPPID(keys.weather);
weather.setCity('New York');

const droplets = ['⁚', '⁛', '⁝', '⁞', '⁑', '⁕', '′', '⋅', '⋰', '⌁', '⋱', '☂', '☁','✈'];
const cloud = ['☁'];

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

weather.getAllWeather(function (err, JSONObj) {
  console.log(JSONObj);

  if (JSONObj)
});



// from: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function createStorm(arr) {
  let str = '';
  for (let i = 0; i < 9; i++) {
    shuffle(arr)
    str += `${arr[0]} `
  }
  return str;
}

function storm(arr) {
  let str = '';
  for (let i = 0; i < 9; i++) {
    str+=`${createStorm(arr)}\n`
  }
  return str;
}

let stormToPost = storm(droplets)

console.log(stormToPost);

// client.post('statuses/update', { status: stormToPost }, function (error, tweet, response) {
//   if (error) throw error;
//   console.log(tweet);  // Tweet body.
//   console.log(response);  // Raw response object.
// });


