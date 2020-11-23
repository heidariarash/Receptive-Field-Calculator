const add_layer_to_window = require("../scripts/utils/new-layer.js");
const electron = require('electron');
const {ipcRenderer} = electron;


document.getElementById('close-btn').addEventListener('click', () => {
    ipcRenderer.send('exit-app');
});

document.getElementById('min-btn').addEventListener('click', () => {
    ipcRenderer.send('min-app');
});

document.getElementById('max-btn').addEventListener('click', () => {
    ipcRenderer.send('max-app');
});

document.getElementById('new-layer-button').addEventListener('click', () => {
    add_new_layer_buttons({id: 'new-layer-button-parent-add'})
});

const add_new_layer_buttons = element => {
    ipcRenderer.send('new-layer-request', element.id.slice(0,-4));
}