/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main/src/index.ts":
/*!***************************!*\
  !*** ./main/src/index.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n// const { app, BrowserWindow } = require(\"electron\");\r\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\n// require(\"./ipcMain\");\r\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\n__webpack_require__(/*! ./ipcMain */ \"./main/src/ipcMain.ts\");\r\nelectron_1.app.on('ready', function () {\r\n    var window = new electron_1.BrowserWindow({\r\n        width: 800,\r\n        height: 600,\r\n        show: false,\r\n        webPreferences: {\r\n            nodeIntegration: true,\r\n            contextIsolation: false,\r\n            preload: path_1.default.resolve(__dirname, './preload.js'),\r\n            nativeWindowOpen: true,\r\n        },\r\n    });\r\n    window.loadURL(\"file://\".concat(__dirname, \"/../index.html\"));\r\n    window.once('ready-to-show', function () {\r\n        window.show();\r\n        if (!electron_1.app.isPackaged) {\r\n            window.webContents.openDevTools();\r\n        }\r\n    });\r\n    window.webContents.on('new-window', function (e, url, frameName, disposition, windowOptions) {\r\n        if (frameName === 'windowPortal') {\r\n            console.log(true);\r\n            e.preventDefault();\r\n            var options = __assign(__assign({}, windowOptions), { frame: false, titleBarStyle: 'default', skipTaskbar: true, show: false, width: 600, height: 400, center: true, webPreferences: {\r\n                    nodeIntegration: true,\r\n                } });\r\n            var newWindow_1 = new electron_1.BrowserWindow(options);\r\n            newWindow_1.once('ready-to-show', function () {\r\n                newWindow_1.show();\r\n            });\r\n            e.newGuest = newWindow_1;\r\n        }\r\n    });\r\n    // let window = new PropertyWindow();\r\n    // console.log(window);\r\n});\r\n\n\n//# sourceURL=webpack://electron-comm-perf/./main/src/index.ts?");

/***/ }),

/***/ "./main/src/ipcMain.ts":
/*!*****************************!*\
  !*** ./main/src/ipcMain.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\n// let { sharedObject } = require(\"./index\");\r\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\r\n// ipcMain.on('open-child-window', (e) => {\r\n//   let browserWindow = BrowserWindow.fromId(e.sender.id);\r\n//   console.log(browserWindow);\r\n//   if (browserWindow) {\r\n//     let childWindow = new BrowserWindow({\r\n//       parent: browserWindow,\r\n//       width: 800,\r\n//       height: 600,\r\n//       webPreferences: {\r\n//         nodeIntegration: true,\r\n//         contextIsolation: false,\r\n//         preload: path.resolve(__dirname, './preload'),\r\n//       },\r\n//     });\r\n//     childWindow.loadURL(`file://${__dirname}/../index.html`);\r\n//     if (!app.isPackaged) {\r\n//       childWindow.webContents.openDevTools();\r\n//     }\r\n//   }\r\n// });\r\nelectron_1.ipcMain.handle('open-child-window', function (e) {\r\n    var browserWindows = electron_1.BrowserWindow.getAllWindows();\r\n    for (var _i = 0, browserWindows_1 = browserWindows; _i < browserWindows_1.length; _i++) {\r\n        var browserWindow_1 = browserWindows_1[_i];\r\n        // browserWindow.webContents.send('message', data);\r\n        console.log(browserWindow_1.id);\r\n    }\r\n    var browserWindow = electron_1.BrowserWindow.fromWebContents(e.sender);\r\n    console.log(browserWindow);\r\n    if (browserWindow) {\r\n        var childWindow = new electron_1.BrowserWindow({\r\n            width: 800,\r\n            height: 600,\r\n            webPreferences: {\r\n                nodeIntegration: true,\r\n                contextIsolation: false,\r\n                preload: path_1.default.resolve(__dirname, './preload.js'),\r\n                nativeWindowOpen: true,\r\n            },\r\n        });\r\n        childWindow.loadURL(\"file://\".concat(__dirname, \"/../index.html\"));\r\n        if (!electron_1.app.isPackaged) {\r\n            childWindow.webContents.openDevTools();\r\n        }\r\n    }\r\n    // if (browserWindow) {\r\n    //   let view = new BrowserView();\r\n    //   browserWindow.setBrowserView(view);\r\n    //   view.setBounds({ x: 100, y: 100, width: 300, height: 300 });\r\n    //   view.webContents.loadURL(`file://${__dirname}/../index.html`);\r\n    // }\r\n});\r\nelectron_1.ipcMain.handle('open-property-window', function (e) {\r\n    console.log('open-property-window');\r\n    var browserWindow = electron_1.BrowserWindow.fromWebContents(e.sender);\r\n    // if (browserWindow) {\r\n    //   let childWindow = new PropertyWindow({\r\n    //     width: 800,\r\n    //     height: 600,\r\n    //     webPreferences: {\r\n    //       nodeIntegration: true,\r\n    //       contextIsolation: false,\r\n    //       preload: path.resolve(__dirname, './preload.js'),\r\n    //     },\r\n    //   });\r\n    //   childWindow.loadURL(`file://${__dirname}/../index.html`);\r\n    //   if (!app.isPackaged) {\r\n    //     childWindow.webContents.openDevTools();\r\n    //   }\r\n    // }\r\n    // if (browserWindow) {\r\n    //   let view = new BrowserView();\r\n    //   browserWindow.setBrowserView(view);\r\n    //   view.setBounds({ x: 100, y: 100, width: 300, height: 300 });\r\n    //   view.webContents.loadURL(`file://${__dirname}/../index.html`);\r\n    // }\r\n});\r\nelectron_1.ipcMain.handle('comm', function (e, data) {\r\n    var bw = electron_1.BrowserWindow.fromWebContents(e.sender);\r\n    var browserWindows = electron_1.BrowserWindow.getAllWindows();\r\n    for (var _i = 0, browserWindows_2 = browserWindows; _i < browserWindows_2.length; _i++) {\r\n        var browserWindow = browserWindows_2[_i];\r\n        // if (bw !== browserWindow) {\r\n        //   browserWindow.webContents.send('message');\r\n        // }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://electron-comm-perf/./main/src/ipcMain.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main/src/index.ts");
/******/ 	
/******/ })()
;