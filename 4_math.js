const button = document.getElementById('button');

const changenumber = document.getElementById('changenumber');


function showResult() {

    let arr = [];

    for (i = 0; i < 11; i++) {
        arr.push(Math.round((Math.random() * 20 - 10)));
        document.write("Случайное число равно: " + arr.toString());
    };



    /*arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    document.write(" Случайное число равно: " + arr.toString());*/

    for (i = 0; i < arr.length; i++) {
        const sum = arr.reduce((a, b) => a + b);
        document.write("  Сумма чисел: " + sum);
    };

    document.write("  Минимальное число: " + Math.min.apply(null, arr));

    document.write("  Максимальное число: " + Math.max.apply(null, arr));

    document.write("  Сумма чисел: " + arr.map(i => x += i, x = 0).reverse()[0]);

    document.write("  Среднее арифметическое: " + Math.round(arr.map(i => x += i, x = 0).reverse()[0] / arr.length));

    document.write("  Произведение чисел: " + arr.map(i => x *= i, x = 1).reverse()[0]);

}



button.addEventListener('click', showResult);