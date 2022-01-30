// const { app, BrowserWindow } = require("electron");
import { app, BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
// require("./ipcMain");
import path from 'path';
import './ipcMain';
app.on('ready', () => {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.resolve(__dirname, './preload.js'),
      nativeWindowOpen: true,
    },
  });
  window.loadURL(`file://${__dirname}/../index.html`);
  window.once('ready-to-show', () => {
    window.show();
    if (!app.isPackaged) {
      window.webContents.openDevTools();
    }
  });
  window.webContents.on(
    'new-window',
    (e, url, frameName, disposition, windowOptions) => {
      if (frameName === 'windowPortal') {
        console.log(true);
        e.preventDefault();
        const options: BrowserWindowConstructorOptions = {
          ...windowOptions,
          frame: false,
          titleBarStyle: 'default',
          skipTaskbar: true,
          show: false,
          width: 600,
          height: 400,
          center: true,
          webPreferences: {
            nodeIntegration: true,
          },
        };
        const newWindow = new BrowserWindow(options);
        newWindow.once('ready-to-show', () => {
          newWindow.show();
        });
        e.newGuest = newWindow;
      }
    },
  );
  // let window = new PropertyWindow();
  // console.log(window);
});
