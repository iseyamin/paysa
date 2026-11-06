function getValueById(id){
    return document.getElementById(id).value;
}

function getConvertedTextById(id){
    const text= document.getElementById(id).innerText;
    const ctext=parseFloat(text);
    return ctext;
}

function getConvertedValueById(id){
    const valuee = document.getElementById(id).value;
    const cvaluee=parseFloat(valuee);
    return cvaluee;

}

//display function
function displayStatus(id,status){
    return document.getElementById(id).style.display=status;
}

//box bg
function boxColor(id,color){
    return document.getElementById(id).style.backgroundColor=color;
}
