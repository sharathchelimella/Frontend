let todo = [];
let enter = prompt("Chose the what you want list, add,delet,exit");
console.log(enter);

while(true){
    if(enter == "exit"){
        console.log("exiting the todo");
        break;
    }

    
    if(enter =="list"){
        console.log("-------------")
        for(let i = 0; i <  todo.length; i++){
            console.log(i,todo[i]);
        }
        console.log("-------------");
    }else if(enter == "add"){
        let add = prompt("add the list");
        todo.push(add);
        console.log("added the element");
    }else if(enter == "delet"){
        let indx = prompt("enter the idex of item you want to delete");
        todo.splice(indx,1);
        console.log("tak deleted");
     }
     enter = prompt("chose the what you ant")
}