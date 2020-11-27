//imports
const add_layer_to_window = require("../scripts/utils/new-layer.js");
const change_3D = require("../scripts/utils/change_3d.js");
const change_desc = require("../scripts/utils/change_desc.js");
const calculate_receptive_field = require("../scripts/utils/calc_receptive.js")
const electron = require('electron');
const {ipcRenderer} = electron;



//variables
let layers_count = 0;
let layers = [];
let threeD = false;



//functions
const add_new_layer_buttons = element => {
    ipcRenderer.send('new-layer-request', element.id.slice(0,-4));
}

const delete_layer = (element) => {
    for (let i=0; i < layers.length; i++) {
        if (layers[i].id === element.id.slice(0,-6)) {
            layers.splice(i, 1);
            layer_to_remove = document.getElementById(element.id.slice(0,-6));
            layer_to_remove.parentNode.removeChild(layer_to_remove);
            break;
        }
    }
}

const layer_config = element => {
    for (let i=0; i < layers.length; i++) {
        if (layers[i].id === element.id.slice(0,-4)) {
            ipcRenderer.send("config-layer", layers[i])
            break;
        }
    }
}





//get element by id listeners
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

document.getElementById('threeD').addEventListener('change', () => {
    threeD = document.getElementById('threeD').checked;
    ipcRenderer.send('change_3d', document.getElementById('threeD').checked);
    change_3D(layers, document.getElementById('threeD').checked);
});





//ipcs renderers
ipcRenderer.on('add-new-layer', (event, args) => {
    add_layer_to_window(args, layers_count, threeD);
    layers_count += 1;
    calculate_receptive_field(layers);
});

ipcRenderer.on('set-config', (event, layer) => {
    for (let i=0; i < layers.length; i++) {
        if (layers[i].id === layer.id) {
            layers[i] = layer;
            change_desc(layer, threeD);
            calculate_receptive_field(layers);
            break;
        }
    }
});