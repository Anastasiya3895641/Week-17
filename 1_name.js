


let names = prompt('Введите ФИО и нажмите "Enter"').trim();
let allnames = names.split(" ");
console.log(allnames);

//let trimmed = names.trim(allnames);//


let lastname = names.split(" ")[0];

let firstname = names.split(" ")[1];

let unknowname = names.split(" ")[2];






document.getElementById('lastname').value = `${lastname}`;
document.getElementById('firstname').value = `${firstname}`;
document.getElementById('unknowname').value = `${unknowname}`;






