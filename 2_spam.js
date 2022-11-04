const button = document.getElementById('button');

function showResult() {

    let enterMessage = document.getElementById('enter').value;

    let comment = enterMessage;

    console.log(comment);

    let newstr = comment.replace(/viagra|XXX|buy|sales/gi, '***');

    document.getElementById('massage').value = `${newstr}`;
}

button.addEventListener('click', showResult);