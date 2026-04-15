//Array Methods
//forEach
//Map
//Reduce
//filter
//every
//some
//spread
//rest
//Distrubution


//forEach ---> it is a method it perform s once for each method

let arr = [1,5,6,7,8,9];
//arr.forEach((a) => { console.log(a); });




//Map --> it is used to transform each element and return new array
let newarr = arr.map((a)=>{
   // console.log(a);
});


let nearr1 = arr.map((a)=>{
    return a*a;
});

//console.log(nearr1);




//reduce --> it reduce the entire array in to a single value

//finding the sum of element s in the  array
let a = arr.reduce((sum, a)=>{
    return sum+a;
});

console.log(a);


//Finding the min value in the arr

let b = arr.reduce((min,a)=>{
    if((min) > a){
        return a;
    }else{
        return min;
    }
});

//console.log(b);






//FILTER  --> it checks the each element in the array whether condition is satisfing or not then it will return hte stisfed valu in the new array

//printthe even numbers 
let c = arr.filter((a)=>{
    return a%2 == 0;
});
//console.log(c);


//print odd numbers

let d = arr.filter((a)=>{
    return a%2 != 0;
});
//console.log(d);




//EVERY --> return true, if every element of array gives true for same funcction else false

let e = arr.every((a)=>{
    return a%2 == 0;   // if any value found odd it reurn the false 
});
//console.log(e);




//SOME --> returns true if some element in the array gives true  for some function else return false
let f = arr.filter((a)=>{
    return a%2 == 0;
});
//console.log(f);





//Default parameters  --> giving the default vales to th arguments and we have to give default values for parameters  at the end

function sum(a,b=4){
    return a+b;
}
console.log(sum(1));
console.log(sum(4,8));  // we can also give the value after giving the default parameters


//Spread --> It extends an itterable  into multiple function

let array = [1,5,8,9,44,55];
console.log(array);
console.log(...array);


let str = "sunny@lpu.in";
console.log(...str);



let bot = [4,8,9,99,55,77];
let copy = [...bot];    //to copy the array
let copy2 = [...array,...bot];   // coping of two arrays;

// with object literals

let obj  = {
    name : "sunny",
    age : 22,
    email:"sunny@gmail.com",
    pass: "sunny@123"
}

let donga = {...obj};
let donga1 = {...obj, id:"132"}  //to add the elements ini the coppied object

let newa = [44,55,66,7,8];
let objee = {...newa}   //coping the array in the object





//Rest -->allows the function to take multiple aruments and bundile them in single array

function sum(...a){
    return a.reduce((sum,a)=> (sum+a));
}

console.log(sum(1,2,3,4,5,6));


//Destributing --> storing of values in to a multiple variable

let nameaa = ["sunny" , "bunny", "bunty","chintu"];
let [winner, runnerup, secondrunnerup] = nameaa;

console.log(nameaa);





//Practice Questions
//Q1 .. Square and sum the array elements using the arrow function and then find the average of the array

let arra = [2,3,4,5,6];

let square = arra.map((a)=>{
    return a*a;
})
console.log(square);

let sum1 =  square.reduce((sum,el)=>{
    return sum+el;
})
console.log(sum1);

let average = sum1/arra.length;
console.log(average);


//Q2Create a new array using the map function whose each element is equal to the orginal element plus 5

let array2 = [1,2,3,4,5,6];

let plus = array2.map((a)=>{
    return a+5;
})
console.log(plus);