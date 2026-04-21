let gameseq=[];
let userseq=[];
let btns = ["yellow","green","purple","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function (){
   if(started == false){
    console.log("game started");
    started = true;
    levelUp();
   }
});


function gameflash(btn){ 
    btn.classList.add("flash"); 
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}


function userflash(btn){ 
    btn.classList.add("userflash"); 
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*4);
    let randomColor = btns[randIndx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    gameflash(randombtn);    
}

function checkAns(idx){
  
    //console.log("curr level : ", level);
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000);
        }
        console.log("same value");
    }else{
        h2.innerHTML = `game over You score was <b>${level}</b> <br>you have press any key to start the key`;  
        let c= document.querySelector('body').style.backgroundColor= 'lightblue '
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor= "white";
        }, 150);
        reset()
    }

}

function btnpress() {
    let btn = this;
    userflash(btn);
     
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll('.btn');
for(let btn of allbtns){
    btn.addEventListener('click', btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}