

///Event Bubling -->  
//when an element happend on the child element it first runs the that element than it runs the parent element and then it runs the grand parent element
//To avoid the even bubbling we use the event stoppropagration

// let div = document.querySelector('div');
// let ul = document.querySelector('ul');
// let li =  document.querySelector('li');

// div.addEventListener('click', function(){
//     console.log('clicked on the div');
// });

// ul.addEventListener('click' ,function(event){
//     event.stopPropagation(); //it stops the event bubling
//     console.log("clicked on the ul"); 
// });

// for(l of li){
//     li.addEventListener('click' ,function(event){
//     event.stopPropagation();
//     console.log('clicked on the li');
// });
// }


//Activity on event bubbling

let btn = document.querySelector('button');
let ul = document.querySelector('ul')
let li = document.querySelector('li');
let inp = document.querySelector('input');

btn.addEventListener('click' , function(){
    let item = document.createElement('li');
    let dltbtn = document.createElement('button');
    dltbtn.innerText = "Delete";
    item.innerText = inp.value;
    dltbtn.classList.add("delete");
    ul.appendChild(item);
    item.appendChild(dltbtn);   // this add the btn to the new list

    inp.value = ""; //

});


//EVENT DELEGATION

ul.addEventListener('click',function (event){
    if(event.target.nodeName == 'BUTTON') {
        let listItem = event.target.parentElement;
        console.log('clicked on the button');
        listItem.remove();
    }
})
