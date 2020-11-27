const change_desc = (layer, threeD) => {
    let size_calc = "";
    configed_layer = document.getElementById(layer.id);
    for(let i=0; i<2; i++){
        size_calc += `${layer.filter_size[i]},`;
    }
    if (threeD){
        size_calc += `${layer.filter_size[2]},`;
    }
    size_calc = size_calc.slice(0,-1);
    configed_layer.getElementsByTagName("p")[0].innerHTML = `Filter Size: ${size_calc}`;
    size_calc = "";
    for(let i=0; i<2; i++){
        size_calc += `${layer.stride[i]},`;
    }
    if (threeD){
        size_calc += `${layer.stride[2]},`;
    }
    size_calc = size_calc.slice(0,-1);
    configed_layer.getElementsByTagName("p")[1].innerHTML = `Stride: ${size_calc}`;
    size_calc = "";
    for(let i=0; i<2; i++){
        size_calc += `${layer.padding[i]},`;
    }
    if (threeD){
        size_calc += `${layer.padding[2]},`;
    }
    size_calc = size_calc.slice(0,-1);
    configed_layer.getElementsByTagName("p")[2].innerHTML = `Padding: ${size_calc}`;
    if(layer.name == "Convolution"){
        size_calc = "";
        for(let i=0; i<2; i++){
            size_calc += `${layer.dilation[i]},`;
        }
        if (threeD){
            size_calc += `${layer.dilation[2]},`;
        }
        size_calc = size_calc.slice(0,-1);
        configed_layer.getElementsByTagName("p")[3].innerHTML = `Dilation Rate: ${size_calc}`;
    }
}

module.exports = change_desc;