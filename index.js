const electron = require('electron');

const { app, BrowserWindow, ipcMain, dialog } = electron;

let mainWindow;

app.on('ready', ()=> {
    // Customizing Main Window
    mainWindow = new BrowserWindow({
        minHeight: 700,
        minWidth: 1100,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        },
        // icon: __dirname + '/gallery/icon.png'
    });

    //Loading the corresponding HTML File
    mainWindow.loadURL(`file://${__dirname}/html/main.html`);
    mainWindow.maximize();
});

//exiting app on close app button
ipcMain.on('exit-app', () => {
    app.quit();
});

//maximizing app on max app button
ipcMain.on('max-app', () => {
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
    }
    else {
        mainWindow.maximize();
    }
});

//minimizing app on max app button
ipcMain.on('min-app', () => {
    mainWindow.minimize();
});