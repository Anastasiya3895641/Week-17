const button = document.getElementById('button');

function showResult() {

    let arr = [];


    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    arr.push(Math.round((Math.random() * 20 - 10)));

    document.write("Случайное число равно " + arr.toString());

    document.write("Минимальное число" + Math.min.apply(null, arr));

    document.write("Максимальное число" + Math.max.apply(null, arr));

    document.write("Сумма чисел" + arr.map(i => x += i, x = 0).reverse()[0]);

    document.write("Среднее арифметическое" + Math.round(arr.map(i => x += i, x = 0).reverse()[0] / arr.length));

    document.write("Произведение чисел" + arr.map(i => x *= i, x = 1).reverse()[0]);

}

button.addEventListener('click', showResult);