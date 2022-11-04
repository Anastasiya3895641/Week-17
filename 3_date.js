
const button = document.getElementById('button');

function formDate(date) {

    let time = new Date() - date;

    console.log(time);

    let now1 = new Date((new Date(-1)));

    console.log(now1);



    document.getElementById('time1').innerHTML = `${now1}`;
    document.getElementById('time2').innerHTML = `${firstname}`;
    document.getElementById('time3').innerHTML = `${unknowname}`;
    document.getElementById('time4').innerHTML = `${unknowname}`;

}

button.addEventListener('click', formDate());
