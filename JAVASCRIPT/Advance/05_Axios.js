
//AXIOS -->  Library to make HTTP requests
//using axios we create the request


// let button = document.querySelector("button");
// button.addEventListener("click", async ()=>{
//     let fact = await getfacts();   ///  -->>we use the get to get the information of facts of cat
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



// //Geting random images 
// let url1 = "https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// btn.addEventListener("click", async()=>{
//     let link = await getImage();
//     let img = document.querySelector("img");
//     img.src = link;
//     console.log(link);
// });

// async function getImage(){
//     try{
//         let res = await axios.get(url1);
//         return res.data.message;
//         console.log(res.data.message);
//     }catch(er){
//         console.log(er)
//     }
// }

// getImage();




//Axios seend headers

// let link = "https://icanhazdadjoke.com/";

// async function calljokes(){
//     try{
//         let config = {headers: {Accept:"application/json"}};
//         let res = await axios.get(link,config);
//         console.log(res.data);
//     }catch(er){
//         console.log(er);
//     }
// }
// calljokes();



//Axios --> UPDATING Query Strings

// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=>{
//    let country = document.querySelector("input").value;
//     //console.log(country);
//    let colleges= await getColleges(country);
//    console.log(colleges);
//    show(colleges);
// });
// function show(colleges){
//     let list = document.querySelector("#result");
//     list.innerText="";
//     for(col of colleges){
//         console.log(col.name);
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// } 
//  let url= "http://universities.hipolabs.com/search?name=";
// let country = "nepal";

// async function getColleges(country){
//     try{
//         let res = await axios.get(url+country);
//        // console.log(res);
//         return res.data;
//     }catch(e){
//         console.log(e);
//         return [];
//     }
// }




 let url= "https://universities.hipolabs.com/search?country=India";


let btn = document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let state = document.querySelector("#result").value;
    let colleges =  await getstate(state);
    show(colleges);
})

function show(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(let col of colleges){
        console.log(col);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getstate(state){
    try{
        let res = await axios.get(url);
        let filtered = res.data.filter(college=>
            college.name.toLowerCase().includes(state.toLowerCase())
        );
        return filtered;
    }catch(er){
        return [];
    }

}