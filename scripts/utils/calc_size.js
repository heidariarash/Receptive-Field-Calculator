const calculate_minimum_size = (layers, threeD) => {
    let size = [1,1,1];
    let temp;
    const size_label = document.getElementById('min-shape');

    if (layers.length === 0){
        size_label.innerHTML = "Please add at least a layer";
        return;
    }

    for(let i = layers.length - 1; i>=0; i--){
        if(layers[i].name === "Convolution"){
            temp = (size[0] - 1) * layers[i].stride[0] - 2 * layers[i].padding[0] + layers[i].dilation[0] * (layers[i].filter_size[0] - 1) + 1;
        }
        else {
            temp = (size[0] - 1) * layers[i].stride[0] - 2 * layers[i].padding[0] + (layers[i].filter_size[0] - 1) + 1;
        }
        if (temp > 0) {
            size[0] = temp;
        }
        if(layers[i].name === "Convolution"){
            temp = (size[1] - 1) * layers[i].stride[1] - 2 * layers[i].padding[1] + layers[i].dilation[1] * (layers[i].filter_size[1] - 1) + 1;
        }
        else {
            temp = (size[1] - 1) * layers[i].stride[1] - 2 * layers[i].padding[1] + (layers[i].filter_size[1] - 1) + 1;
        }
        if (temp > 0) {
            size[1] = temp;
        }
        if(layers[i].name === "Convolution"){
            temp = (size[2] - 1) * layers[i].stride[2] - 2 * layers[i].padding[2] + layers[i].dilation[2] * (layers[i].filter_size[2] - 1) + 1;
        }
        else {
            temp = (size[2] - 1) * layers[i].stride[2] - 2 * layers[i].padding[2] + (layers[i].filter_size[2] - 1) + 1;
        }
        if (temp > 0) {
            size[2] = temp;
        }

    }

    if (threeD){
        size_label.innerHTML = `${size[0]} x ${size[1]} x ${size[2]}`;
    }
    else {
        size_label.innerHTML = `${size[0]} x ${size[1]}`;
    }
}

module.exports = calculate_minimum_size;