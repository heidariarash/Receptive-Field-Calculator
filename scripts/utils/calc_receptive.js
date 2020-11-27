const calculate_receptive_field = (layers) => {
    let receptive = [1,1,1];
    let jump = [1,1,1];

    if (layers.length === 0){
        return;
    }

    for(layer of layers){
        receptive[0] = receptive[0] + (layer.filter_size[0] - 1) * jump[0];
        jump[0] = jump[0] * layer.stride[0];
        receptive[1] = receptive[1] + (layer.filter_size[1] - 1) * jump[1];
        jump[1] = jump[1] * layer.stride[1];
        receptive[2] = receptive[2] + (layer.filter_size[2] - 1) * jump[2];
        jump[2] = jump[2] * layer.stride[2];
    }
    console.log(receptive)
}

module.exports = calculate_receptive_field;