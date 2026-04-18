//DOM Events 
//Events are signals that something has occured.(user inputs/ actions)

//Inline events  that write the code in side the html code that handle the events such like in insta likeing the post 




//ONCLICK(WHEN AN ELEMENT IS CLICKED)
// let btn = document.getElementById('clickk');
// console.dir(btn);  // it shows the property that consiit in the button

// btn.onclick = function (){
//     alert("You have clicked on the button");
// };


let butn = document.querySelector('button');

for(each of butn){
    each.onclick=sayhello;

}

function sayhello(){
    alert("hello");
}


//ONMOUSEENTER(WHEN MOUSE ENTERS AN ELEMENT)
 
butn.onmouseover =function(){
    console.log("you have placed the mouse on the mutton");
};