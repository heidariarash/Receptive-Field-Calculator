const change_desc = (layer, threeD) => {
    let size_calc = "";
    configed_layer = document.getElementById(layer.id);
    for(size of layer.filter_size){
        size_calc += `${size},`;
    }
    size_calc = size_calc.slice(0,-1);
    configed_layer.getElementsByTagName("p")[0].innerHTML = `Filter Size: ${size_calc}`;
    size_calc = "";
    for(size of layer.stride){
        size_calc += `${size},`;
    }
    size_calc = size_calc.slice(0,-1);
    configed_layer.getElementsByTagName("p")[1].innerHTML = `Stride: ${size_calc}`;
    size_calc = "";
    for(size of layer.padding){
        size_calc += `${size},`;
    }
    size_calc = size_calc.slice(0,-1);
    configed_layer.getElementsByTagName("p")[2].innerHTML = `Padding: ${size_calc}`;
    if(layer.name == "Convolution"){
        size_calc = "";
        for(size of layer.dilation){
            size_calc += `${size},`;
        }
        size_calc = size_calc.slice(0,-1);
        configed_layer.getElementsByTagName("p")[3].innerHTML = `Dilation Rate: ${size_calc}`;
    }
}

module.exports = change_desc;