function hello(){
    console.log("inside the hello   function");
    console.log("Hello");
}

function demo(){
    console.log("calling to hello function"); 
    hello();
}

console.log("calling function demo")
demo();
console.log("ccalling demo if finished");
 

//visualization the call stack


function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    ans = two() + one();
    console.log(ans); 
}

three();




//Break Point --> break poin thelps us to inspect the call stack,variabls and exception flow in real time

//Browser --> inspect --> source --> file




//JS is Single Thread 




//Call back hell --> it happens when we use to many nested call back (fuction inside function) making the code hard to read,understand the code and maintain

let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "lightblue";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
    
// }, 3000);



// function change_color(color,delay){
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }

// change_color("orange",2000);
// change_color("red",3000);
// change_color("violet", 5000);



// function change_color(color,delay, nextchangecolor){
//     setTimeout(() => {
//         h1.style.color = color;
//         nextchangecolor();
//     }, delay);
// }

// change_color("orange",2000, ()=>{
//     change_color("red",3000, ()=>{
//         change_color("violet", 5000,()=>{
//             change_color("blue", 2000);
//         } );
//     });
// });

//call back nesting this is called hell 

//to sove call back hell we use promises and async/await




//
