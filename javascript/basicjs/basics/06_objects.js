// Objects Literal --> it is used to store keyed collections  & complex entity

// const object = {
//     name: "sharath",
//     age: 22,
//     rank: "1st"
// };

// const clg ={
//     name: "LPU",
//     course: "Btech",
//     location: ["punjab","pagwara","near by lawgate"]
// };

// we can staore the arrray in the values pair
//we can update the key value pairs but canot update the object




//Threadtwiter Post
const obj = {
    username: " Sunny",
    content: "java script",
    likes: 150,
    repost:5,
    tags:["@sai","bunny"]
};


//ACCESS THE KEY VALUES
//in js key values it converts into the string
//console.log(obj);

//console.log(obj["username"]);
//console.log(obj.username);

//add/update 

obj.username = "bunny";
//console.log(obj);

obj.likes  = 180;
//console.log(obj);

/// add the key value
obj.gender = "Male";
//console.log(obj);

//to dlete the key value
//console.log(delete obj.gender);
//console.log(obj);

//creatin the objects inside the objects

let students ={
    sunny:{
        grade :"A+",
        city: "telanagan"
    },
    bunny:{
        grade:"a+",
        city:"Hyderabad",
    },
    gunny:{
        grade:"A",
        city:"Punjab"
    }
}

//console.log(students.bunny);
//console.log(students.bunny.city);



/// CREATING OBJECCTS INSIDE THE ARRAY
const arrr = [
    {
        name:"sunny",
        city:"hyd"
    },
    {
        name: "Bunny",
        city:"ts",
    },
    {
        name: ' gunny',
        city: 'mscl'
    }
]
//console.log(arrr[0]);
//console.log(arrr[0].city);


//Math in object

//Math.abs(n) --> it gives the absolute value if -8 or 8 it will give out put as a 8
//Math.pow(a,b) ---> if we want calculate 2 ** 4 --> 16 in the same way use the pow
//Math.floor(n) ---> it round the value and gives the nearest value if i enter 2.5 it gives 2
//Math.ceil(n) --> it gives the largeest numb if 5.1 it gives 6
//Math.random() --> it gives the random value between 0 to 1


// to generate random numb from 1 to 10

//let a = Math.random()*10;
//console.log(Math.floor(a)+1);

//if i need  random numb between 21 to 25
//console.log(Math.floor(Math.random()*5)+21);



///Gusing the number 
// let maxnum = prompt("Enter the Max NUMBER")
// console.log(maxnum);

// let random = Math.floor(Math.random()*maxnum)+1;

// let gues = prompt("Enter the Guess");
// while(true){
//     if(gues === "quit"){
//         console.log("user quit");
//         break;
//     }
//     if(gues == random){
//         console.log("congeraleaction");
//         break;
//     }else if(gues<random){
//         gues = prompt("your giuess is to small number");
//     }else if(gues > random){
//         gues = prompt("your gues to large enter large number");
//     }
// }

//Q1. Create a program that generates a random number representing a dice roll [the nuber shoul be between 1 to 6]
//console.log(Math.floor(Math.random()*3)+1);

//Q2. Create an object representing  a car that stores the following properties for the car: name, model,color.
//print the car's name.

// const obje  = {
//     car1:{
//         name: "fortuner",
//         model:2026,
//         color: "black"
//     },
//     car2:{
//         name: "tata",
//         model: 2022,
//         color: "red"
//     }
// }
// console.log(obje.car1.name);

//Q3. Create an object Personn with there name age and city.
//Edity their city's value to change it to "New york"
//Add a new property country and set it to the uNITED State


let q3 = {
    name: "Sunny",
    city:"Hyderabad",
    age:22
}
console.log(q3.city = "New York");
console.log(q3.country = "United State");
console.log(q3);