let div = document.querySelector('#recentColor')
let button = document.querySelector('#button');
let body = document.querySelector('body')

let hexaColor = 0xA8A8A8

div.innerHTML= `HEXA COLOR: #${hexaColor.toString(16)}`.toUpperCase();
 
body.style.backgroundColor = `${hexaColor.toString(16)}`;


document.querySelector('#button').addEventListener('click', setHex)

function setHex(){
    
    let color = 0xf323

    let rd1 = Math.ceil(Math.random()*255 .toFixed(2)).toString(16)
    let rd2 = Math.ceil(Math.random()*255 .toFixed(2)).toString(16)
    let rd3 = Math.ceil(Math.random()*255 .toFixed(2)).toString(16)
    
    div.innerHTML = 'COR HEXA: #'+(rd1+rd2+rd3).toUpperCase()
    body.style.backgroundColor = rd1+rd2+rd3
}




