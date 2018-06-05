const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

const toWriteResult = require('./src/config').toLocalStorage;

function createWindow () {
    // Create the browser window.
    fs.access(toWriteResult, fs.constants.R_OK | fs.constants.W_OK, (err) => {
        if(err){
            fs.writeFileSync(toWriteResult,"path,class");
        }
    });

    win = new BrowserWindow({width: 1200, height: 800, resizable: false});
    win.webContents.openDevTools();

    // 然后加载应用的 index.html。
    win.loadURL(url.format({
            pathname: process.env.NODE_ENV === "development" ? "localhost:3000":path.join(__dirname, 'build/index.html'),
            protocol: 'http:',
            slashes: true
        }));
}

app.on('ready', createWindow);