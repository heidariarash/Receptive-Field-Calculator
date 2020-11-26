const change_3d = (layers, threeD) => {
    for(layer of layers){
        let layer_component = document.getElementById(layer.id);
        infos = layer_component.getElementsByClassName("info")
        if(threeD) {
            infos[0].innerHTML = `Filter Size: ${layer.filter_size[0]},${layer.filter_size[1]},${layer.filter_size[2]}`;
            infos[1].innerHTML = `Stride: ${layer.stride[0]},${layer.stride[1]},${layer.stride[2]}`;
            infos[2].innerHTML = `Padding: ${layer.padding[0]},${layer.padding[1]},${layer.padding[2]}`;
            if(layer.name == "Convolution"){
                infos[3].innerHTML = `Dilation Rate: ${layer.dilation[0]},${layer.dilation[1]},${layer.dilation[2]}`;
            }
        }
        else {
            infos[0].innerHTML = `Filter Size: ${layer.filter_size[0]},${layer.filter_size[1]}`;
            infos[1].innerHTML = `Stride: ${layer.stride[0]},${layer.stride[1]}`;
            infos[2].innerHTML = `Padding: ${layer.padding[0]},${layer.padding[1]}`;
            if(layer.name == "Convolution"){
                infos[3].innerHTML = `Dilation Rate: ${layer.dilation[0]},${layer.dilation[1]}`;
            }
        }
    }
}


module.exports = change_3d;