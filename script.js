var container = document.querySelector('.container');
var colorCard = document.querySelector('.color-card');
var btn = document.querySelector("button");
var hex = document.querySelector("span");

//# the var symbol is getting the new color. may be able to set it up like realtime color
function getNewColor(){
    var Symbol = '0123456789ABCDEF' //16 symbols
    //to generate color combonation

    var color = '#';

    for(var i = 0; i<6; i++){
        color = color + Symbol[Math.floor(Math.random()*16)]

    }

    //body
    document.body.style.background = color;
    //colorcard
    colorCard.style.background = color;
    //hexcode
    hex.innerHTML = color
}

btn.addEventListener("click",getNewColor)