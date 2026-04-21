// console.log("hello inspect how are you");

// console.log('window');
// console.log(document);

//Accessing DOM Element
//getElemenet ById
//getElementByClassName
//getElementByTagName


//Example 1

document.getElementById('changeTextButton')
.addEventListener('click', function (){
    let p = document.getElementById('myParagraph');
    p.textContent = "The paragraph has changed";
});



//Example  2;

document.getElementById('highlightFirstCity')
.addEventListener('click', function (){
    let b = document.getElementById('citiesList');
    b.firstElementChild.classList.add("highlight");
});

//EXAPMPLE -3


document.getElementById("changeOrder")
.addEventListener('click', function (){
    let c = document.getElementById('coffeType');
    c.textContent = "Espresso";
    c.style.backgroundColor ="white";
});

//Example 4;

document.getElementById("addNewItem")
.addEventListener('click', function (){
    let d = document.createElement('li');
    d.textContent = "Eggs";
    let f = document.getElementById('shoppingList').append(d);
});

//Example 5;

document.getElementById('removeLastTask')
.addEventListener('click', function(){
   let x= document.getElementById(taskList);
   x.lastElementChild.remove();
});

//Exampple -6

document.getElementById('clickMeButton')
.addEventListener('blur',function(){
    let blur = document.getElementById('Example-6');
    alert("blur");
})


//Example 7;

document.getElementById('teaList')
.addEventListener('click', function(event) {
    if (event.target && event.target.matches(".teaItem")){
        alert("you have selected "+event.target);
    }
});

//Example 8

document.getElementById('feedbackForm')
.addEventListener('submit' , function(event){
    event.preventDefault();
    let feedback = document.getElementById
    ("feedbackInput").Value;
    console.log(feedback);
    document.getElementById('feedbackDisplay')
    .textContent = `Feed back is: ${feedback}`;
});
