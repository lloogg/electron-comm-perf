import { ipcMain, BrowserWindow, app, BrowserView } from 'electron';
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
  let browserWindows: BrowserWindow[] = BrowserWindow.getAllWindows();
  for (let browserWindow of browserWindows) {
    // browserWindow.webContents.send('message', data);
    console.log(browserWindow.id);
  }
  let browserWindow = BrowserWindow.fromWebContents(e.sender);
  console.log(browserWindow);
  if (browserWindow) {
    let childWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.resolve(__dirname, './preload.js'),
        nativeWindowOpen: true,
      },
    });

    childWindow.loadURL(`file://${__dirname}/../index.html`);
    if (!app.isPackaged) {
      childWindow.webContents.openDevTools();
    }
  }
  // if (browserWindow) {
  //   let view = new BrowserView();
  //   browserWindow.setBrowserView(view);
  //   view.setBounds({ x: 100, y: 100, width: 300, height: 300 });
  //   view.webContents.loadURL(`file://${__dirname}/../index.html`);
  // }
});

ipcMain.handle('open-property-window', (e) => {
  console.log('open-property-window');
  let browserWindow = BrowserWindow.fromWebContents(e.sender);
  // if (browserWindow) {
  //   let childWindow = new PropertyWindow({
  //     width: 800,
  //     height: 600,
  //     webPreferences: {
  //       nodeIntegration: true,
  //       contextIsolation: false,
  //       preload: path.resolve(__dirname, './preload.js'),
  //     },
  //   });

  //   childWindow.loadURL(`file://${__dirname}/../index.html`);
  //   if (!app.isPackaged) {
  //     childWindow.webContents.openDevTools();
  //   }
  // }
  // if (browserWindow) {
  //   let view = new BrowserView();
  //   browserWindow.setBrowserView(view);
  //   view.setBounds({ x: 100, y: 100, width: 300, height: 300 });
  //   view.webContents.loadURL(`file://${__dirname}/../index.html`);
  // }
});

ipcMain.handle('comm', (e, data) => {
  let bw = BrowserWindow.fromWebContents(e.sender);
  let browserWindows: BrowserWindow[] = BrowserWindow.getAllWindows();
  for (let browserWindow of browserWindows) {
    // if (bw !== browserWindow) {
    //   browserWindow.webContents.send('message');
    // }
  }
});
