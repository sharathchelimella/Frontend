

// let inp = document.querySelector('input');

// inp.addEventListener('keydown' ,function(){
//     console.log("key was presed and moving forward");
// });




//Qs2. Create a button on the page using JavaScript. Add an event listener to the button
//that changes the button’s color to green when it is clicked.

// let button = document.createElement('button');
// button.textContent = 'Click Me';

// document.body.appendChild(button);
// button.addEventListener('click' ,function(){

//     button.style.backgroundColor = 'green';

// })



//Q3 Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let inp = document.querySelector('input');
let h2 = document.querySelector('h2');

inp.addEventListener('input', function(){
    
    let value = inp.value;
    let filter = value.replace(/[a-zA-Z]/g,"");
    inp.value = filter;
    h2.innerText = filter; 
});