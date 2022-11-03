const button = document.getElementById('button');

function showResult() {

    let names = document.getElementById('enter').value.trim();

    let allnames = names.split(" ");

    console.log(allnames);


    let lastname = names.split(" ")[0].charAt(0).toUpperCase() + names.split(" ")[0].slice(1).toLowerCase();

    let firstname = names.split(" ")[1].charAt(0).toUpperCase() + names.split(" ")[1].slice(1).toLowerCase();

    let unknowname = names.split(" ")[2].charAt(0).toUpperCase() + names.split(" ")[2].slice(1).toLowerCase();


    document.getElementById('lastname').value = `${lastname}`;
    document.getElementById('firstname').value = `${firstname}`;
    document.getElementById('unknowname').value = `${unknowname}`;


}

button.addEventListener('click', showResult);

