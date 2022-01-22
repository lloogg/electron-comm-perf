import { ipcMain, BrowserWindow, app } from 'electron';
// let { sharedObject } = require("./index");
import path from 'path';
// ipcMain.on('open-child-window', (e) => {
//   let browserWindow = BrowserWindow.fromId(e.sender.id);
//   console.log(browserWindow);
//   if (browserWindow) {
//     let childWindow = new BrowserWindow({
//       parent: browserWindow,
//       width: 800,
//       height: 600,
//       webPreferences: {
//         nodeIntegration: true,
//         contextIsolation: false,
//         preload: path.resolve(__dirname, './preload'),
//       },
//     });

//     childWindow.loadURL(`file://${__dirname}/../index.html`);
//     if (!app.isPackaged) {
//       childWindow.webContents.openDevTools();
//     }
//   }
// });

ipcMain.handle('open-child-window', (e) => {
  console.log(`e.sender.id ${e.sender.id}`);
  console.log(`e.processId ${e.processId}`);
  console.log(`e.frameId ${e.frameId}`);

  let browserWindows: BrowserWindow[] = BrowserWindow.getAllWindows();
  for (let browserWindow of browserWindows) {
    // browserWindow.webContents.send('message', data);
    console.log(browserWindow.id);
  }
  let browserWindow = BrowserWindow.fromId(e.sender.id);
  // console.log(browserWindow);
  if (browserWindow) {
    let childWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.resolve(__dirname, './preload.js'),
      },
    });

    childWindow.loadURL(`file://${__dirname}/../index.html`);
    if (!app.isPackaged) {
      childWindow.webContents.openDevTools();
    }
  }
});

ipcMain.handle('comm', (e, data) => {
  let bw = BrowserWindow.fromId(e.sender.id);
  let browserWindows: BrowserWindow[] = BrowserWindow.getAllWindows();
  for (let browserWindow of browserWindows) {
    if (bw !== browserWindow) {
      browserWindow.webContents.send('message', e.sender);
    }
  }
});
