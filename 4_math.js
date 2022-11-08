const button = document.getElementById('button');

const changenumber = document.getElementById('changenumber');


function showResult() {

    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random() * 10 + Math.random() * -10));
    }

    let array = 'Сгенерировали: ' + arr;

    document.getElementById('changenumber').innerHTML = `${array}`;

    for (i = 0; i < arr.length; i++) {
        sum = arr.reduce((a, b) => a + b);
    };

    let array2 = 'Сумма чисел: ' + sum;

    document.getElementById('changenumber2').innerHTML = `${array2}`;


    document.getElementById('changenumber3').innerHTML = `Максимальное число: ${Math.max(...arr)}`;




    /*arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    document.write(" Случайное число равно: " + arr.toString());

   

    document.write("  Минимальное число: " + Math.min.apply(null, arr));

    document.write("  Максимальное число: " + Math.max.apply(null, arr));

    document.write("  Сумма чисел: " + arr.map(i => x += i, x = 0).reverse()[0]);

    document.write("  Среднее арифметическое: " + Math.round(arr.map(i => x += i, x = 0).reverse()[0] / arr.length));

    document.write("  Произведение чисел: " + arr.map(i => x *= i, x = 1).reverse()[0]);*/

}



button.addEventListener('click', showResult);