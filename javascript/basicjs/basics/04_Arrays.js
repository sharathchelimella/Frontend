//let roll_numb = [1,2,3,4,5,6,5];
//console.log(roll_numb);  ///to print the elements in the array


//console.log(roll_numb[0]);//too find the indexth element
//console.log(roll_numb.length)//to find the length of an array


//let info   = ["sunny",59,22,119]
//console.log(info);   // in js arrays stores the diferent type off  elements


//console.log(info[0][0]) /// to find the strings fist char in the array

//inf0[0] = "bunny"; // Arrays are mutable

//ARRAYS METHODS

//PUSH, POP, SHIFT, UNSHIFT
 
//Push ---> it addds the element at the last of the array
//unshift --> it adds the element at firt index of the array
//pop  -- > removes the element at the last
//shift -- > remove the element at the first
//indexOf --> to find the elements index
//includes --> checks the element whether it is there or not
//concat  --> to add the two arrays
//reverse --> it is used to reverse the elements in the array
//slice -- > copies a portion of an a array
//splicec -- >it performs removes/replace/ add elements in place
 //              it perform the changes int he arrays in it self
//sort  -- > it sorts the strings by charcter and nuber is sorted by it converts in to the string ad it converts

//let int = [1,2,3,4,5,62,88];
//let b = ["sunny", 22,"bunny"];

// //PUSH
// console.log(int.push(99));
// console.log(int);

// //POP
// console.log(int.pop());
// console.log(int);

// //UNSHIFT
// console.log(int.unshift(55));
// console.log(int);

// //SHIFT
// console.log(int.shift())
// console.log();

//INDEXOF
//console.log(int.indexOf(62));

//includes
//console.log(int.includes(62))

//concat
//console.log(int.concat(b));

//revverse
//console.log(int.reverse());

//slice
//console.log(int.slice(2,4));//it gives in between the element
//console.log(int.slice(2));; //it starts from provided index to last

//splice 
//let color = ["red","orange","blue","black","white"]
// console.log(color.splice(2,4)); //it removess the element from that we provided index
// console.log(color.splice(2,2,"blit"));

//sort
//console.log(color.sort());





//PRACTICE  QUESTIONS
//FOR THE GIVEN START STATE OF AN ARRAY, CHANGE IT TO FINAL FROM USING SPLICE
//STRT = ['JAN', 'JULY','MARC','AUG']
//END = [''JULY,'JUNE','MARCH','AUGST']


//let STRT = ['JAN', 'JULY','MARC','AUG'];
//console.log(STRT.splice(0,2,'july','june'));
//console.log(STRT);

//Return the indexof the july
//console.log(STRT.reverse().indexOf("july"));