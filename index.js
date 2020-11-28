//imports
const electron = require('electron');
const { app, BrowserWindow, ipcMain, dialog } = electron;




//variables
let mainWindow;
let configureWindow;
let threeD = false;
let layer_under_config;




//start app
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
});




//ipcRenderer
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

ipcMain.on('add-new-layer', (evt, args) => {
    mainWindow.webContents.send('add-new-layer', {name: args, button: requested_add_button});
    configureWindow.close();
});

ipcMain.on('change_3d', (evt, args) => {
    threeD = args;
});

//configuring a layer
ipcMain.on("config-layer", (event, arg) => {
    configureWindow = new BrowserWindow({
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            devTools: false
        },
        width: 400,
        height: 370,
        resizable: false,
        maximizable: false,
        parent: mainWindow,
        modal: true
    });

    layer_under_config = arg;
    configureWindow.loadURL(`file://${__dirname}/html/configure-window.html`);
});

//sending initialization parameters to layer config window
ipcMain.on("ready-layer-config", () => {
    configureWindow.webContents.send("layer-config", {layer:layer_under_config, threeD:threeD});
});

ipcMain.on("layer-config-finish", (event, arg) => {
    configureWindow.close();
    mainWindow.webContents.send("set-config", arg);
});