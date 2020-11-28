const calculate_receptive_field = (layers, threeD) => {
    const receptive_label = document.getElementById("rec-field");
    let receptive = [1,1,1];
    let jump = [1,1,1];
    let temp = [0,0,0];

    if (layers.length === 0){
        receptive_label.innerHTML = "Please add at least a layer";
        return;
    }

    for(layer of layers){
        if (layer.name == "Convolution"){
            temp[0] = (layer.filter_size[0] - 1) * layer.dilation[0] + 1;
            temp[1] = (layer.filter_size[1] - 1) * layer.dilation[1] + 1;
            temp[2] = (layer.filter_size[2] - 1) * layer.dilation[2] + 1;
        }
        else {
            temp[0] = layer.filter_size[0];
            temp[1] = layer.filter_size[1];
            temp[2] = layer.filter_size[2];
        }
        receptive[0] = receptive[0] + (temp[0] - 1) * jump[0];
        jump[0] = jump[0] * layer.stride[0];
        receptive[1] = receptive[1] + (temp[1] - 1) * jump[1];
        jump[1] = jump[1] * layer.stride[1];
        receptive[2] = receptive[2] + (temp[2] - 1) * jump[2];
        jump[2] = jump[2] * layer.stride[2];
    }
    
    if (threeD){
        receptive_label.innerHTML = `${receptive[0]} x ${receptive[1]} x ${receptive[2]}`;
    }
    else {
        receptive_label.innerHTML = `${receptive[0]} x ${receptive[1]}`;
    }
}

module.exports = calculate_receptive_field;