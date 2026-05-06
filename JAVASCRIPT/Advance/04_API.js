

//converting json data to the js object
// let jsonres = '{"fact":"Today there are about 100 distinct breeds of the domestic cat.","length":62}'
// let validres = JSON.parse(jsonres);
// console.log(validres);
// console.log(validres.fact);


//Converting js object to the json data

// let student = {
//     name :"sunny",
//     age : 22,
//     clg: "lpu"
// };


// let data  = JSON.stringify(student);
// console.log(data);



//Our first Req using fetch

// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log("runs successfully",res);
//     return res.json(); // it returns the promises
// }).then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// }).then((res)=>{
//     console.log(res);
//     return res.json();
// }).then((data)=>{
//     console.log(data.fact);
// }).catch((err)=>{
//     console.log("   ",err);
// }); 




//Using  async await

// let url = "https://catfact.ninja/fact";
// async function callfact(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res = await fetch(url);
//         let data = await res.json(); 
//         console.log(data.fact);

//     }catch(err){
//         console.log(err);
//     }
// } 
// callfact()



//AXIOS -->  Library to make HTTP requests
//using axios we create the request


// let button = document.querySelector("button");
// button.addEventListener("click", async ()=>{
//     let fact = await getfacts();
//     console.log(fact);
//     let p = document.querySelector("#pid");
//     p.innerText = fact; 
// });


// let url = "https://catfact.ninja/fact";
// async function getfacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log(e);
        
//     }
// }