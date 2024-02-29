const passInput1 = document.querySelector('#password');
const passInput2 = document.querySelector('#confirm-password');

let input1;
let input2;

passInput1.addEventListener('input', (e) => {
    const button = document.querySelector('button');
    input1 = e.target.value;

    if (input1 != input2) {
        button.disabled = true;
    }

    else {
        const messageDiv = document.querySelector('#confirm-password + div');
        const validator = document.querySelector('.validator');

        if (passInput2.nextSibling.nodeName == "DIV") {
            validator.removeChild(messageDiv);
            button.disabled = false;
        }
    }
})

passInput2.addEventListener('input', (e) => {
    const button = document.querySelector('button');
    input2 = e.target.value;

    if (input1 != input2) {
        button.disabled = true;

        if (passInput2.nextSibling.nodeName != "DIV") {
            const messageDiv = document.createElement('div');
            messageDiv.style.width = "500px";
            messageDiv.style.height = "10px";
            messageDiv.textContent = "✖ Please match both the password fields!"
            passInput2.insertAdjacentElement("afterend", messageDiv);
        }
    }

    else {

        const messageDiv = document.querySelector('#confirm-password + div');
        const validator = document.querySelector('.validator');

        if (passInput2.nextSibling.nodeName == 'DIV') {
            validator.removeChild(messageDiv);
            button.disabled = false;
        }
    }
})


