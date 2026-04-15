//This key word --->it reffers  to an object excuting that is executing curent piece of code

let student = {
    name : "Sharath",
    scen : 33,
    math : 44,
    eng : 33,
    avgm() {
        let avg = (this.math + this.scen + this.eng)/2;
        console.log(avg);
    }
}



//TRY AND CATCH BLOCK

//TRY --> it allow you to define a block of code to be tested  for errors while code is  being execution
//Catch --> it defines a block of code to be executed ,item if any error occurs during the try block

//console.log("hello");
//console.log("chadvukora puva");
try{
    console.log(a);  //it thros the errorr of  a is not 
}catch{
   // console.log("a is not defined0");
}
//console.log("execungtio");


//Arow function --> writing the funtion in the shorter form 

const arr = (a,b) =>{
    let sum = a+b;
//    return sum;    
}
arr(2,3);

//implicity in function --> wwe use when wwe havve single expression wthit out return we replace curly breackets with parenthsis

const implicitys = (a,b) => (a+b);
// implicitys(5,4);


//Explicty -- > we use regulary that using return in the functions


//SETTIMEOUT -- > executing the function after few delay that will  given in miliseconds

setTimeout(()=>{
   // console.log("eripuva");
},5000);

//SETINTERVAL --> executing the function for evvery few delay continuosly


let id= setInterval(()=>{
   // console.log("Enters for every 2 seec");
},2000);

//clearInteval --> is used to stop the setInterval execution for every setInterval there will be a unique id we use that id and

clearInterval(id);




//This key word in arrow function ---> it doest not have its own this in the arrow function insted it inherates from the surouinding scoope (lexical scope)

let obj = {
    name: "Sunny",
    marks:55,
    prop: this,
    getMarks: function(){
        console.log(this);  
        return this.marks;
    },
    getName: ()=>{
        console.log(this); //parent's scope --> window
        return this.name;
    },
    getMarks: function (){
        console.log(this);
        return this.marks;
    }
}




//Q1.. write an arrow function that returns the square of a number 'n'
const sq = (n)=>{
    return n*n;
}
sq(2);


//Q2. Write a function that prints "Hello World" 5 Times at interval of 2s each

let ids = setInterval(()=>{
    //    console.log("Hello World");
},2000);

setTimeout(()=>{
   // clearInterval(ids);
},10000);


//Q3 write an arrow function named arrayAverage that Acepts an array of numbers and returns the average of those number

const arrayAverage = (arr)=>{
    let n = arr.length;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum = sum+arr[i];
    }
    let avg = sum/n;
    return avg;
}

//arrayAverage([5,8,9,6,7,5,4,3]);


//Q4 write an arrow function named isEven() that takes a single number as argument and returns if it is even or not
const isEven = (n)=>{
    if(n%2 == 0){
        return "Even";
    }else{
        return "odd";
    }
}


//  Q5 What is the out put of the folllowing code
const object = {
    mesage:"hello,World",

    logMessage(){
        console.log(this.mesage);
    }
};
setTimeout(object.logMessage, 1000);