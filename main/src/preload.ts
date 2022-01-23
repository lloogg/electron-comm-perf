import bigdata from './bigdata.json';
declare const window: Window & { sharedObject: any; setSharedObj: any };
// window.sharedObject = 1;

declare interface Window {
  sharedObject?: any;
}

window.sharedObject = bigdata;
window.setSharedObj = function (obj: any) {
  window.sharedObject = bigdata;
};
