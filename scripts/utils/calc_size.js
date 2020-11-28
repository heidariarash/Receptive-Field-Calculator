const calculate_minimum_size = (layers) => {
    let size = [1,1,1];
    let temp;

    if (layers.length === 0){
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
    console.log(size)
}

module.exports = calculate_minimum_size;