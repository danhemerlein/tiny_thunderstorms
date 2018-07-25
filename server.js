

const droplets = ['⁚', '⁛', '⁝', '⁞', '⁑', '⁕', '′', '⋅', '⋰', '⌁', '⋱', '☂', '☁','✈'];

'。', '〮'

'〟'


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

console.log(storm(droplets));
console.log(storm(droplets).length);


