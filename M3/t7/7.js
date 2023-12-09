'use strict';

let p = document.getElementById('trigger');
let img = document.getElementById('target');

function hoverChangeImg(){
    img.src = 'img/picB.jpg'
}

p.addEventListener('mouseover', hoverChangeImg)