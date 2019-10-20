const {app, BrowserWindow} = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({width:900, height:600, webPreferences: {
        nodeIntegration: true
    }});

    win.setIcon('img/code.png');

    win.loadFile('index.html');

    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(process.platform !== 'win32') {
        app.quit();
    }
})