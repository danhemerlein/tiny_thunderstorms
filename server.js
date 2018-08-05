
var weather = require('openweather-apis');
var Twitter = require('twitter');
const keys = require('./config');

weather.setAPPID(keys.weather);
weather.setCity('New York');

const droplets = ['⁚', '⁝', '⁞', '′', '⋅', '⋰', '⌁', '⋱', '☂', '☁'];
const snow = ['⁑', '⁕', '✈', '☁', '❄', '❅', '❆', '❇', '❈', '❉', '❉', '❊', '❋','☃']
const cloud = ['☁', '✈', '☁', '☁', '☁'];
const sun = ['☼', '☁', '☼', '☼', '☼'];

var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token,
  access_token_secret: keys.access_secret
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
    str += `${createStorm(arr)}\n`
  }
  return str;
}

weather.getAllWeather(function (err, data) {
  console.log(data);
  let str = '';
  let id = String(data.weather[0].id);
  
  if (id.startsWith('2') || id.startsWith('3') || id.startsWith('5') || id.startsWith('7')) {
    str += storm(droplets)
  }

  if (id.startsWith('6')) {
    str += storm(snow)
  }  

  if (id === '800') {
    str += storm(sun)
  }

  if ((id === '801') || (id === '802') || (id === '803') || (id === '804')) {    
    str += storm(cloud)
  }

  console.log(str);

  client.post('statuses/update', { status: str }, function (error, tweet, response) {
    if (error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });
});