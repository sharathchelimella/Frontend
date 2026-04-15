//SCOPE --> Scope determines the accessibility of variabels, objects, and functions from different parts
//Function sCOPE-->variable is defined inside the function not accisible from outsude function
//Block Scope
//Lexical Scope


//Function sCOPE

function cals(a,b){
    let sum = a+b; //Function scope because the variable is define inside the function 
    console.log(sum);
}

//global scope --> which we declear the varaiable outside of the function we can use ever where in the that file



// Block Scope --> Variables decleared inside a {} block cannot be accessed from outside the block.
//we can apply bllock scope variables let and const

{
    let  a = 22;
    const b = 23;
}


for(let i = 0; i < 55; i++){  //we can acces the i values in the partular {} brackts only we canot acces the i values  out side  {} this is clled the block scope
    //console.log(i);
} 



//Lexical Scope -- >A variable defines outside a function can be accessible inside another function defined after the variabe declaration.
//The opisite is not true 

function lexi(){
    let a = 222;
    let b = 32;
    function innerf(){
        console.log(a);
        console.log(b);
    }
    innerf();
}
//lexi();

//Function Expression--> storing a function in a variiable is called a functionn expression

let a = function(a,b){
    let sum = a+b;
    console.log(sum);
}
//a(1,2);

//to change
a = function(a,b){
    let mult = a*b;
    console.log(mult);
}
//a(2,2);

//***Higher Orde Function  */ -- >Afunction that  does one or more and takes one or mre function as a argument and returns the funcction is called the Higher order function
 
// //Q1.
// function grett(func,n){
//     for(let i = 0; i < n; i++){
//         func();
//     }
// }

// let func = function hello(){
//     console.log("hell0");
// }

// grett(func,5);


//Q2

// function evenoddd(request){
//     if(request == "even"){
//         let even = function(n){
//             console.log(n%2 ==0);
//         }
//         return even;
//     }else if(request == "odd"){
//         let odd = function(n){
//             console.log(n%2 != 0);
//         }
//         return odd;
//     }else{
//         console.log("wrong statemment");
//     }
// }
// let request = "odd";



///METHODs -->  Action that can be performed on the object is called method

// let calculator = {
//     add:function(a,b){
//             return a+b;
//     },
//     mult:
//         function(a,b){
//             return a*b;
        
//     },
//     sub:
//         function(a,b){
//             return a-b;
        
//     }
// };



//Q1

// function largest(arr){
//     let max = 0;
//     for(let i = 0; i < arr.length; i++){
      
//         if(max<arr[i]){
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }

// largest( [4,5,6,9,10,44]
// );

