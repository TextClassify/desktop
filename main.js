const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

function createWindow () {
// Create the browser window.
win = new BrowserWindow({width: 800, height: 600});
// 然后加载应用的 index.html。
win.loadURL(url.format({
        pathname: process.env.NODE_ENV === "development" ? "localhost:3000":path.join(__dirname, 'build/index.html'),
        protocol: 'http:',
        slashes: true
    }));
}

app.on('ready', createWindow);