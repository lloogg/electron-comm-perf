const fs = require('fs');
const crypto = require('crypto');
function genLargeData() {
  let obj = new Object();
  let i = 0;
  let key;
  for (i; i < 10000000; i++) {
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
fs.writeFileSync('./bigdata.json', data);
