
function hexToRgb(hex, alpha)
{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex); 
    var value = result ? {
        r: parseInt(result[1], 16), 
        g: parseInt(result[2], 16), 
        b: parseInt(result[3], 16) 
    } : null; 

    retorno = 'rgba('+ value.r +','+ value.g +','+ value.b +','+ alpha +')'; 
    return retorno; 
}
console.log(hexToRgb('#0099ff','.5'));