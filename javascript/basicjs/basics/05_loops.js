
//printinfg the even numbers
// for(let i = 0; i < 15; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }


//printinfg the odd numbers

// for(let i = 0; i < 15; i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }

//printing the multiplication table
// let n = prompt("enter numb");
// for(let i = n; i < n*10; i+n){
//      console.log(i);
// }


///While loop
// let i = 0;
// while(i  <= 10){
//     console.log(i);
// }



//finding the favourate move 
// let fav  = prompt("Enter the movie");
// let guess = prompt("enter youn av movie")
// while((fav != guess)&& (guess != 'quit')){
//     console.log("congeralaction");
//     let guess = prompt("bdfvsjh");
// }




//for of loop

// let collection = ["sunny","bunny","gunny","mummy","nana"];
// for(element of collection){
//     console.log(element);
// }


//1

// let arr = [1,2,3,4,5,6,7];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 3){
//         continue;
//     }
//     console.log(arr[i]);
// }


//2.counting the number
let num = 5566513;
let count = 0;
let sum   = 0;
while(num>0){
    let lst = num%10;
    sum = sum *10+lst;
    num = Math.floor(num/10);
}
console.log(sum);