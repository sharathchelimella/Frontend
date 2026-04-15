// function print1to5(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);
//     }
// }

// print1to5();



// function adul(){
//     let age = 21;
//     if(age >= 18){
//         console.log("he is adult");
//     }else{
//         console.log("He is not adult");
//     }
// }
// adul();


// //Dice roll
// function rolldice(){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }

// rolldice();


//FUNCTION WITH ARGUMENTS
function printName(name,age){
    console.log(`${name} age is ${age}`);
}

//printName("sunny",22);


//Average of a 3 Numbers
function marks(s,M,c){
    let avg = (s+M+c)/3;
    console.log(avg);
}

//marks(9,10,12);

function table(n){
    for(let i = 1; i < 11; i++){
        console.log(`${i} * ${n} = `+ i * n);
    }
}
//table(6);


//Return
function sum(a,b){
    return a+b;
}
//console.log(sum(3,4));



function adul(){
    let age = 21;
    if(age >= 18){
        return "he is adult";
    }else{
        return "He is not adult";
    }
}
//adul();


//finding sum of nn numbers
function getsum(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
        sum =sum + i;
    }
    return sum;
}
//console.log(getsum(5));


let str = ["sbdvfhj","hello","bunny","and","gunny"];

function combin(str){
    let conc="";
    for(let i =0; i <= str.length;i++){
        conc += str[i];
    }
    return conc;

}
console.log(combin(str));