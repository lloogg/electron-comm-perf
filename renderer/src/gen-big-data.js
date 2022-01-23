const fs = require('fs');
const crypto = require('crypto');
function genLargeData() {
  let obj = new Object();
  let i = 0;
  let key;
  for (i; i < 100; i++) {
    console.log(i);
    key =
      'key_' +
      i +
      '_' +
      crypto
        .createHash('md5')
        .update(i + 'aaaa' + Date.now())
        .digest('hex');
    obj[key] = crypto.randomBytes(1024);
    //console.log(key);
  }
  return obj;
}

let bigData = genLargeData();
fs.writeFileSync('./bigdata.json', JSON.stringify(bigData));

let jsonData = JSON.parse(fs.readFileSync('./bigdata.json'));

// let appendData = genLargeData();
