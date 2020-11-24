const electron = require('electron');

const { app, BrowserWindow, ipcMain, dialog } = electron;

let mainWindow;
let configureWindow;

app.on('ready', ()=> {
    // Customizing Main Window
    mainWindow = new BrowserWindow({
        minHeight: 700,
        minWidth: 1100,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            // devTools: false
        },
        // icon: __dirname + '/gallery/icon.png'
    });

    //Loading the corresponding HTML File
    mainWindow.loadURL(`file://${__dirname}/html/main.html`);
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

//New Layer Request
ipcMain.on('new-layer-request', (event, args) => {
    configureWindow = new BrowserWindow({
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        },
        width: 400,
        height: 300,
        resizable: false,
        maximizable: false,
        parent: mainWindow,
        modal: true
    });
    requested_add_button = args;
    configureWindow.loadURL(`file://${__dirname}/html/new-layer.html`);
});

//cancle in Add New Layer Window
ipcMain.on('close-small', () => {
    configureWindow.close();
})