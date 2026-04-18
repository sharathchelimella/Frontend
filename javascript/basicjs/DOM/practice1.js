let p = document.createElement('p');
p.innerText = "i'm red";
document.querySelector('body').append(p);

p.style.color='red';
p.style.backgroundColor='lightblue';

let  h3 = document.createElement('h3');
h3.innerText = "I'm a blue";
document.querySelector('body').append(h3);
h3.style.backgroundColor="yellow";

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p2 = document.createElement('p');

h1.innerText= "I'm in a div";
p2.innerText = "Mee Too!";

div.append(h1);
div.append(p2);
//div.classList.add("box");
div.style.backgroundColor="lightpink";
document.querySelector('body').append(div);



//create a new input and button element on the pag using JavaSccript only. Set the text of button to "Click me"

let btn = document.createElement('button');
btn.innerText = "Click Me";
document.querySelector('body').append(btn);

//Qs2.Addfollowingattributestotheelement:-
//Changeplaceholdervalueofinputto“username”-
// Changetheidofbuttonto“btn”

let input = document.querySelector('input');
let btn = document.querySelector('button');
btn.style.backgroundColor='blue';
btn.style.color='blue';
input.setAttribute('placeholder', 'username');
btn.setAttribute("id","btn");


document.querySelector('btn');
document.querySelector('input');