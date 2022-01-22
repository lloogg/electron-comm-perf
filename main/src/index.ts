// const { app, BrowserWindow } = require("electron");
import { app, BrowserWindow } from 'electron';
// require("./ipcMain");
import path from 'path';
import './ipcMain';
app.on('ready', () => {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.resolve(__dirname, './preload.js'),
    },
  });
  window.loadURL(`file://${__dirname}/../index.html`);
  if (!app.isPackaged) {
    window.webContents.openDevTools();
  }
});
