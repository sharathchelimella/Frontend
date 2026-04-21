//DOM Events 
//Events are signals that something has occured.(user inputs/ actions)

//Inline events  that write the code in side the html code that handle the events such like in insta likeing the post 




//ONCLICK(WHEN AN ELEMENT IS CLICKED)
// let btn = document.getElementById('clickk');
// console.dir(btn);  // it shows the property that consiit in the button

// btn.onclick = function (){
//     alert("You have clicked on the button");
// };


// let butn = document.querySelector('button');

// for(each of butn){
//     each.onclick=sayhello;

// }
// function sayhello(){
//     alert("hello");
// }


//ONMOUSEENTER(WHEN MOUSE ENTERS AN ELEMENT)
  
// let buttn  = document.querySelectorAll('button');
// for(let btn of buttn){
//     btn.onmouseenter = function(){
//         console.log("you have placced pointer on the button");
//     };
// };


//EVENT LISENERS --> We can perform multiple events



//Click
let buttn = document.querySelectorAll('button');

// buttn.addEventListener("click", function (){
//     alert("say chill chilll chilla");
//     alert("say i am ver bad body");
// });



//dblclick

// for(let btn of buttn){

//     btn.addEventListener("dblclick",function (){
//     alert("are you clicked double time ");
//     alert("Then you are oce id woorking");

// });
// };


//mouseenter

// let container = document.querySelector('div');
// container.addEventListener("click", function(){
//     console.log("You have entered to div block");
// });


// container.addEventListener('mouseenter', function(){
//     console.log("You have entered to dihgcv block");
// });



//this in EventListener


// btn.addEventListener('click',function(){
//     // console.log(this)    it refers to the button
// })

// let p2 = document.querySelector('p');
// p2.addEventListener('click',color);

// function color(){
//     this.style.backgroundColor= 'blue';
// }


//keyboard Events

let inp = document.querySelector('input');

// inp.addEventListener('keydown',function(event){
//     console.log(event)  //event is inbuilt it refers to the properties
//     console.log("key was pressedd");
// });

// inp.addEventListener('keyup',function(){
//     console.log("Key was released");
// })


// game
// inp.addEventListener('keydown',function(event){
//     console.log(event.code);
//     if(event.code="ArrowdUp"){
//         console.log("key movew forward");
//     }
//     else if(event.code == "ArrowDown"){
//         console.log("key moves backwords");
//     }
//     else if(event.code == "ArrowLeft"){
//         console.log("key moves to the left");
//     }else if(event.code == "ArrowRigth"){
//         console.log("key moves to the right");
//     }

// });


//Form Events

let form = document.querySelector('form');

// form.addEventListener("submit",function(event){
//     event.preventDefault(); //it prevents that not go for action page
//     alert("form submited");    
// })

//Extracting form data
form.addEventListener('submit',function(event){
    event.preventDefault();
    // let inp = document.querySelector('#user');
    // let pass = document.querySelector('#pass');
    // console.log(inp.value); //to extract that last submited the form
    // console.log(pass.value);
    // console.dir(inp);

    // alert(`Your ${inp.value} and pass is ${pass.value}`);



    //Acescing the directly with out storing the element ids in the variavles and and using valu to see the data
    let user = this.elements[0];
    let pass = this.elements[1];  //it refers to the form in the form properties there will be the elements we acces through that

    console.log(user.value);
    console.log(pass.value);

    alert(`user name is ${user} nad pass is ${pass}`);
});
