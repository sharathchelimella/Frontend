//ALTER 
//-->Alter displays an alert message on the page
//alert("Some thing went wrong")
console.error("it is an a error");
//PROMPT
//-->prompt displays dialog box that asks user for some input

//let firstname = prompt("Enter the First Name");
//let lastname = prompt("Enter your lastNme")
// console.log(`hell0 $(firstname) $(lastname)`);


//Strings
//trim() it is used to remove the space start and last

let str = "   abc  ";
//console.log(str.trim());

//let pasword = prompt("Enter the password");
//let newpass = password.trim();
//console.log(password.trim());

//Strings are imutable js 
//no change can made to the strings.
//whenver we do try to make a change ,a new string is created and old one remains same
 


///String Methods 


//str.toUpperCase()
//str.toLowerCase()

//str = "Sunny";
//str.toUpperCase()
//str.toLowerCase()

//let bun = "my name is sunny"
//bun.indexOf(y)

//Slice --> Return a part of the orginal string as a new string

let sli = "sunny is to emotional"
console.log(sli.slice(1,10));

//Replace --> Searches a value in the string & returns a new string with the value replaced
  
console.log(sli.replace("sunny","bunny"));

//Repeat -- > Return the numb of copies of a string 
console.log(sli.repeat(3));