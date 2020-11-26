const {ipcRenderer} = require('electron');
let threeD;
let layer;

document.getElementById('cancle').addEventListener('click', () => {
    ipcRenderer.send('close-small');
});

document.getElementById('done').addEventListener('click', ()=> {
    //checking for completion
    for(let i = 0; i < document.getElementsByClassName("small-input").length; i++){
        if(document.getElementsByClassName("small-input")[i].value == ""){ return;}
    }

    if(threeD){
        for(let i = 0; i < 3; i++){
            layer.filter_size[i] = document.getElementsByClassName("small-input")[i].value;
        }
        for(let i = 3; i < 6; i++){
            layer.stride[i] = document.getElementsByClassName("small-input")[i].value;
        }
        for(let i = 6; i < 9; i++){
            layer.padding[i] = document.getElementsByClassName("small-input")[i].value;
        }
        if(document.getElementsByClassName("small-input").length > 9){
            for(let i = 9; i < 12; i++){
                layer.dilation[i] = document.getElementsByClassName("small-input")[i].value;
            }
        }
    }
    else {
        for(let i = 0; i < 2; i++){
            layer.filter_size[i] = document.getElementsByClassName("small-input")[i].value;
        }
        for(let i = 2; i < 4; i++){
            layer.stride[i] = document.getElementsByClassName("small-input")[i].value;
        }
        for(let i = 4; i < 6; i++){
            layer.padding[i] = document.getElementsByClassName("small-input")[i].value;
        }
        if(document.getElementsByClassName("small-input").length > 6){
            for(let i = 6; i < 8; i++){
                layer.dilation[i] = document.getElementsByClassName("small-input")[i].value;
            }
        }
    }

    ipcRenderer.send("layer-config-finish", layer);
});

ipcRenderer.on("layer-config", (event , arg) => {
    threeD = arg.threeD;
    layer = arg.layer;
    if(layer.name === "Convolution"){
        document.getElementsByClassName("small-input")[0].value = layer.filter_size[0];
        document.getElementsByClassName("small-input")[1].value = layer.filter_size[1];
        document.getElementsByClassName("small-input")[3].value = layer.stride[0];
        document.getElementsByClassName("small-input")[4].value = layer.stride[1];
        document.getElementsByClassName("small-input")[6].value = layer.padding[0];
        document.getElementsByClassName("small-input")[7].value = layer.padding[1];
        document.getElementsByClassName("small-input")[9].value = layer.dilation[0];
        document.getElementsByClassName("small-input")[10].value = layer.dilation[1];
        if(arg.threeD){
            document.getElementsByClassName("small-input")[2].value = layer.filter_size[2];
            document.getElementsByClassName("small-input")[5].value = layer.stride[2];
            document.getElementsByClassName("small-input")[8].value = layer.padding[2];
            document.getElementsByClassName("small-input")[11].value = layer.dilation[2]; 
        }
        else {
            document.getElementsByClassName("small-input")[11].parentNode.removeChild(document.getElementsByClassName("small-input")[11]);
            document.getElementsByClassName("small-input")[8].parentNode.removeChild(document.getElementsByClassName("small-input")[8]);
            document.getElementsByClassName("small-input")[5].parentNode.removeChild(document.getElementsByClassName("small-input")[5]);
            document.getElementsByClassName("small-input")[2].parentNode.removeChild(document.getElementsByClassName("small-input")[2]);
        }
    }
    else {
        document.getElementsByClassName("small-input")[0].value = layer.filter_size[0];
        document.getElementsByClassName("small-input")[1].value = layer.filter_size[1];
        document.getElementsByClassName("small-input")[3].value = layer.stride[0];
        document.getElementsByClassName("small-input")[4].value = layer.stride[1];
        document.getElementsByClassName("small-input")[6].value = layer.padding[0];
        document.getElementsByClassName("small-input")[7].value = layer.padding[1];
        document.getElementsByClassName("info")[3].parentNode.removeChild(document.getElementsByClassName("info")[3].previousSibling);
        document.getElementsByClassName("info")[3].parentNode.removeChild(document.getElementsByClassName("info")[3].previousSibling);
        document.getElementsByClassName("info")[3].parentNode.removeChild(document.getElementsByClassName("info")[3].nextSibling);
        document.getElementsByClassName("info")[3].parentNode.removeChild(document.getElementsByClassName("info")[3]);
        if(arg.threeD){
            document.getElementsByClassName("small-input")[2].value = layer.filter_size[2];
            document.getElementsByClassName("small-input")[5].value = layer.stride[2];
            document.getElementsByClassName("small-input")[8].value = layer.padding[2];
            document.getElementsByClassName("small-input")[11].parentNode.removeChild(document.getElementsByClassName("small-input")[11]);
            document.getElementsByClassName("small-input")[10].parentNode.removeChild(document.getElementsByClassName("small-input")[10]);
            document.getElementsByClassName("small-input")[9].parentNode.removeChild(document.getElementsByClassName("small-input")[9]);
        }
        else {
            document.getElementsByClassName("small-input")[11].parentNode.removeChild(document.getElementsByClassName("small-input")[11]);
            document.getElementsByClassName("small-input")[10].parentNode.removeChild(document.getElementsByClassName("small-input")[10]);
            document.getElementsByClassName("small-input")[9].parentNode.removeChild(document.getElementsByClassName("small-input")[9]);
            document.getElementsByClassName("small-input")[8].parentNode.removeChild(document.getElementsByClassName("small-input")[8]);
            document.getElementsByClassName("small-input")[5].parentNode.removeChild(document.getElementsByClassName("small-input")[5]);
            document.getElementsByClassName("small-input")[2].parentNode.removeChild(document.getElementsByClassName("small-input")[2]);
        }
    }
});

(function() {
    ipcRenderer.send('ready-layer-config');
 })();