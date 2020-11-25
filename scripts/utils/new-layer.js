add_new_layer = (args, layers_count) => {
    //constructing layer
    const layer = document.createElement('div');
    let attr;
    //setting the class for layer
    attr = document.createAttribute('class');
    attr.value = 'col-sm-12 heading-4-parent layer-class';
    layer.setAttributeNode(attr);
    attr = document.createAttribute('id');
    attr.value = `layer-${layers_count}`;
    layer.setAttributeNode(attr);

    layer.innerHTML =  `<svg class="add" id="layer-${layers_count}-add" xmlns="http://www.w3.org/2000/svg" onclick="add_new_layer_buttons(this)">
                            <g>
                                <title>background</title>
                                <rect fill="none" id="canvas_background" height="37" width="237" y="-1" x="-1"/>
                            </g>
                            <g>
                                <title>Layer 1</title>
                                <path stroke="null" fill="#db3a34" id="Fill-38" d="m117.41712,32.312877c-8.651637,0 -15.664706,-7.05069 -15.664706,-15.748739c0,-8.698048 7.013069,-15.748739 15.664706,-15.748739s15.664706,7.05069 15.664706,15.748739c0,8.698048 -7.013069,15.748739 -15.664706,15.748739l0,0zm0,-29.784225c-7.668496,0 -13.960595,6.325853 -13.960595,14.035487s6.292099,14.035487 13.960595,14.035487s13.960595,-6.325853 13.960595,-14.035487s-6.292099,-14.035487 -13.960595,-14.035487l0,0z" class="st0"/>
                                <polygon stroke="null" stroke-width="0.5" fill="#db3a34" points="110.51395484805107,15.920446395874023 124.32028266787529,15.920446395874023 124.32028266787529,17.20783042907715 110.51395484805107,17.20783042907715 " id="Fill-39" class="st0"/>
                                <polygon stroke="null" fill="#db3a34" points="116.85720130801201,9.578431129455566 117.97703620791435,9.578431129455566 117.97703620791435,23.54984474182129 116.85720130801201,23.54984474182129 " id="Fill-40" class="st0"/>
                                <line stroke="#db3a34" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_2" y2="16.606061" x2="182.15126" y1="16.522215" x1="132.582884" fill="none"/>
                                <line stroke="#db3a34" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_4" y2="16.519892" x2="102.15126" y1="16.608385" x1="52.15126" fill="none"/>
                                <line stroke="#db3a34" stroke-dasharray="5,2,2,2" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_5" y2="16.519892" x2="102.15126" y1="16.608385" x1="2.15126" fill="none"/>
                                <line stroke="#db3a34" stroke-dasharray="5,2,2,2" stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_6" y2="16.606061" x2="232.15126" y1="16.522215" x1="132.582884" fill="none"/>
                            </g>
                        </svg>
                        <br>
                        <svg class="cog" id="layer-${layers_count}-cog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onclick="layer_config(this)">
                            <path d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
                        </svg>
                        <label class="main-heading-4">${args.name}</label>
                        <svg class="trash" id="layer-${layers_count}-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onclick="delete_layer(this)">
                            <path d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"/>
                        </svg>
                        <br>
                        <p class="info">Filter Size: 3,3</p>
                        <p class="info">Stride: 1,1</p>
                        <p class="info">Padding: 0,0</p>
                        <p class="info">Dilation Rate: 1,1</p>
                        `
    
    infos = layer.getElementsByClassName('info');
    switch (args.name) {
        case "Convolution":
            new_layer = {
                id: `layer-${layers_count}`,
                name: args.name,
                filter_size: [3,3,3],
                stride: [1,1,1],
                padding: [0,0,0],
                dilation: [1,1,1]
            };
        
            if(args.button === "new-layer-button-parent"){
                layers.push(new_layer);
            }
            else{
                let item_index = layers.findIndex(x => x.id == args.button);
                layers.splice(item_index, 0, new_layer);
            }
            break;

        case "Avg Pool":
        case "Max Pool":
            infos[3].parentNode.removeChild(infos[3]);
            new_layer = {
                id: `layer-${layers_count}`,
                name: args.name,
                filter_size: [3,3,3],
                stride: [1,1,1],
                padding: [0,0,0]
            };
        
            if(args.button === "new-layer-button-parent"){
                layers.push(new_layer);
            }
            else{
                let item_index = layers.findIndex(x => x.id == args.button);
                layers.splice(item_index, 0, new_layer);
            }
            break;
    }

    

    document.getElementById('layers-panel').insertBefore(layer, document.getElementById(args.button));
}

module.exports = add_new_layer;