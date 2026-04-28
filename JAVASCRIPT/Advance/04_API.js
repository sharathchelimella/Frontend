

//converting json data to the js object
let jsonres = '{"fact":"Today there are about 100 distinct breeds of the domestic cat.","length":62}'
let validres = JSON.parse(jsonres);
console.log(validres);
console.log(validres.fact);


//Converting js object to the json data

let student = {
    name :"sunny",
    age : 22,
    clg: "lpu"
};

let data  = JSON.stringify(student);
console.log(data);