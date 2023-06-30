const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));
const 𝝿 = Math.PI;

buttons.map(button => {
button.addEventListener('click', (e) => {
switch (e.target.innerText) {
    case 'AC':
    display.value = '';
    break;
    case 'C':
    if (display.value) {
        display.value = display.value.slice(0, -1);
    }
    break;
    case '𝝿':
    display.value += '𝝿';
    break;
    case '÷':
    display.value += '/';
    break;
    case '=':
    try {
        
        display.value = eval(display.value);
    } catch {
        display.value = 'دكتب عدل';
    }
    break;
    case '√':
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch {
        display.value = 'دكتب عدل';
    }
    break;
    case '!':
    try {
        display.value = factorial(eval(display.value));
    } catch {
        display.value = 'دكتب عدل';
    }
    break;
   case '%':
    try {
        display.value = percentage(eval(display.value));
    } catch {
        display.value = 'دكتب عدل';
    }
    break;
    default:
    display.value += e.target.innerText;
}
});
});


function factorial(n) {
if (n < 0) {
return 'دكتب عدل';
}

let result = 1;
for (let i = 2; i <= n; i++) {
result *= i;
}
return result;
}



function percentage(n) {
if (n < 0) {
return 'دكتب عدل';
}
else{
result =n/100;

return result;
}}





