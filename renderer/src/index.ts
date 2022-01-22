import { ipcRenderer, BrowserWindow } from 'electron';
import crypto from 'crypto';
import bigdata from './bigdata.json';
ipcRenderer.on('message', (e, data) => {
  console.log(data);
});
let openChildWindowButton = document.getElementById('open-child-window-button');
openChildWindowButton?.addEventListener('click', () => {
  console.log(ipcRenderer);
  console.log(window);
  // ipcRenderer.send('open-child-window');
  ipcRenderer.invoke('open-child-window');
});

let commButton = document.getElementById('comm-button');

commButton?.addEventListener('click', () => {
  let largeObj = genLargeData();
  console.log(largeObj);
  ipcRenderer.invoke('comm', largeObj);
});

function genLargeData() {
  let obj: any = new Object();
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
