let btn = document.querySelector('button');


btn.addEventListener("click", function (){
    let head = document.querySelector('h1');
    let randomColoor = randomColor();
    head.innerText = randomColoor;
    let div  = document.querySelector('div');
    div.style.backgroundColor = randomColoor;


});

function randomColor(){
    let red = Math.floor(Math.random()*255);
    let blu = Math.floor(Math.random()*255);
    let grn = Math.floor(Math.random()*255);

    return `rgb(${red},${blu},${grn})`;
   
}