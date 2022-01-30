import { ipcRenderer, BrowserWindow } from 'electron';
import crypto from 'crypto';
declare const window: Window & { sharedObject: any; setSharedObj: any };

// import bigdata from './bigdata copy.json';
ipcRenderer.on('message', (e, data) => {
  console.log('object');
  console.log(window.sharedObject);
});
let openChildWindowButton = document.getElementById('open-child-window-button');
openChildWindowButton.addEventListener('click', () => {
  console.log(ipcRenderer);
  console.log(window);
  // ipcRenderer.send('open-child-window');
  ipcRenderer.invoke('open-child-window');
});

let openPropertyWindowButton = document.getElementById(
  'open-property-window-button',
);
openPropertyWindowButton.addEventListener('click', () => {
  ipcRenderer.invoke('open-property-window');
});

let commButton = document.getElementById('comm-button');

commButton?.addEventListener('click', () => {
  // let largeObj = genLargeData();
  // console.log(bigdata);
  ipcRenderer.invoke('comm');
});

let windowOpenButton = document.getElementById('window-open-button');
windowOpenButton.addEventListener('click', () => {
  window.open();
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
