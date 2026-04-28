//Async function
//there are two key words
// Async  and await

//we use the async keyword front of the function it by default it returns the promise then we apply the methods on it like then and catch
// function normally executes returns promises it state will be the fullfiled and returnn value will store int the promises
//In funstion if error occurs also  return the promises state will be rejected and returns undefined in the promises

async function greet(){
    throw "404 page was not found";
    return "hello";
}

greet().then((result)=>{
    console.log("promises was resolved");
    console.log("result was reject :", result);
})
.catch((err)=>{
    console.log("promises was rejected with err:",err);
});



//in arrow function we use async in front of ()
let demo = async()=>{
    return 5;
};



//Await pauses the exection of its surrounding until promise is resolve

function gretings(name){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`hello ${name}`);
            resolve("you have  sayed the hello");
        },1000);
    });
}

async function calling(){
   await gretings("sunny");    //it stops the exetions of surrounding until it is resolved
   await gretings("Bunny");
   await gretings("Bunty");
   await gretings("babulu");
}



//Apling on the color change

let h1 = document.querySelector("h1");

function colorto(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

async function changeto(){
    await colorto("orange", 1000);
    await colorto("Blue", 1000);
    await colorto("red", 1000);



}
changeto();




//Handling the rejections using try and catch blocks
let h1 = document.querySelector("h1");

function colorto(color,delay){
    return new Promise((resolve,reject)=>{
        let numb = Math.floor(Math.random()*10)+1;
        if(numb > 5){
            reject("promise was rejected");
        }
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, delay);
    });
}

async function changeto(){
    try{
        console.log("color changes to orange");
        await colorto("orange", 1000);
        console.log("color changes to  Blue");
        await colorto("Blue", 1000);
        console.log("color changes to red");
        await colorto("red", 1000);
    }catch(res){
        console.log("it was rejected",res);
    }

    let a = 5
    console.log(5);
    console.log("new number is:",a + 4);

}
changeto();
