let number1 = parseInt(prompt('Введіть перше число, будь ласка!'));

while (isNaN(number1)) {
    alert('це число нам не підходить, треба ЦІЛЕ число');
    number1 = parseInt(prompt('Введіть перше число, будь ласка!'));
}

let number2 = parseInt(prompt('Введіть друге число, будь ласка!'));

while (isNaN(number2)) {
    alert('це число нам не підходить, треба ЦІЛЕ число ');
    number2 = parseInt(prompt('Введіть друге число, будь ласка!'));
}

let evenNumbers = confirm("Чи потрібно пропускати парні числа?");

let sum = 0;

if (evenNumbers) {
    for (let n = number1; n <= number2; n++ ) {
        if (n % 2 !== 0) {
            sum += n;
        }
    }
} else {
    for (let n = number1; n <= number2; n++) {
        sum += n;
    }
}

document.writeln(`
    <p><b>Результат суми:</b> ${sum}</p>
`);