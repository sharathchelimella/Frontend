 //Promises --> The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


 //promises is an a object it consist of two they are resolve and reject  callback

//  function savetodb(data, succes, failure){
//     let internestspeed = Math.floor(Math.random()*10)+1;
//     if(internestspeed > 5){
//         succes();
//     }else{
//         failure(); 
//     }
// }

// savetodb("i was learng about promises" , ()=>{
//     console.log("success :Your data was saved");
//     savetodb("Hello world",
//     ()=>{
//         console.log("succes2: your data was saved to the second time");
//         savetodb("2Hello world ", ()=>{
//             console.log("Success3 : your 3rd data was saved");
//         },
//     ()=>{
//         console.log("Your data was not saved due to the internet intereption");
//     });  
     
//     }, 
//     ()=>{
//         console.log("data was not saved due internet error");
//     });
// },()=>{
//     console.log("failure: Your data was not saved");
// }) 



// STATE --> in promises there will be multiple states like pending,rejected(error),fullfiled(resolved)

//  function savetodb(data ){
//     return new Promise((resolve,rejected)=>{
//         let internestspeed = Math.floor(Math.random()*10)+1;
//         if(internestspeed > 5){
//             resolve("succes: your data was saved");
//         }else{
//             rejected("failure: your data was not saved"); 
//         } 
//     });
// }



//METHODS in THE PROMISES
// then() and catch 
//we use when promises is fullfiled stateif anything left to do we use then method
//we use catch in promises after rejected state to catch the error

// let req = savetodb("hello")  // req = promises object
// req.then(() =>{
//     console.log("promises was resolved");
//     console.log(req);
// })
// .catch(()=>{
//     console.log("promises was rejected");
//     console.log(req);
// });
 
    //    (OR)
// savetodb("hello").then(() =>{        //we can aply then method to the promises object
//     console.log("promises was resolved");
    
// })
// .catch(()=>{
//     console.log("promises was rejected");
   
// });
 




//Promisses chaining

 function savetodb(data ){
    return new Promise((resolve,rejected)=>{
        let internestspeed = Math.floor(Math.random()*10)+1;
        if(internestspeed > 5){
            resolve("succes: your data was saved");
        }else{
            rejected("failure: your data was not saved"); 
        } 
    });
}
  
savetodb("Promises chaining")
.then(()=>{
    console.log("data was saved .promise is resolved ");
    return savetodb("Promises chaining");   //it returns the promises so that it will become input of  next then
})
.then(()=>{  // we will implement again by call back
    console.log("data was saved.promises is resolved");
                                    // once if we stop returns the promises then the chaiin will be breaked
})
.catch(()=>{
    console.log("promises was rejected");  // if any error occurs in the promisses it will print catch
}) 



//promisses are rejected and resolved with some data(valid result pr error)

 function savetodb(data ){
    return new Promise((resolve,rejected)=>{
        let internestspeed = Math.floor(Math.random()*10)+1;
        if(internestspeed > 5){
            resolve("succes: your data was saved");
        }else{
            rejected("failure: your data was not saved"); 
        } 
    });
}

savetodb("Promises chaining")
.then((result)=>{   //passing the arguments in the methods promises are rejected and resolve with some data(valid result of error) 
    console.log("data was saved .promise is resolved ",result);
    return savetodb("Promises chaining");   //it returns the promises so that it will become input of  next then
})
.then((result)=>{  // we will implement again by call back
    console.log("data was saved.promises is resolved");
                                    // once if we stop returns the promises then the chaiin will be breaked
})
.catch((result)=>{
    console.log("promises was rejected", result);  // if any error occurs in the promisses it will print catch
}) 






//Appling the promises to the ccall back
 
let h1 = document.querySelector("h1");

function changecolor(color, delay ){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Your color was change succesfully");
        },delay);
    });
}


changecolor("red", 1000).then((result)=>{
    console.log("color was chnged completly to red",result);
    return changecolor("orange", 2000);
})
.then((result)=>{
    console.log("color was changed to the orange",result);
    return changecolor("pink",3000);
}).then((result)=>{
    console.log("color was changed to the pink",result);
})
.catch((result)=>{
    console.log("Your color was not changed",result);
});