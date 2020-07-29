function getMaxDigit(numbers){
    const digits = String(numbers).split('');
    const maxNumber = Math.max(...digits);
    
    return maxNumber;  
}

document.writeln(`<p><b>Функція, яка отримує будь-яке число та виводить найбільшу цифру:</b> ${getMaxDigit(121212136)} </p>`);




function getDegree(number1, number2) {

    let result = number1;

    for (let i = 1; i < number2; i++) {
        result *= number1;
    }

    return result;
}



document.writeln(`<p><b>Функція, яка визначає ступінь числа:</b> ${getDegree(2, 5)}</p>`);



function formatName(name) {
    const myName = name.toLowerCase();

    const modifiedName =  myName.charAt(0).toUpperCase() + myName.slice(1); 

    return modifiedName;
}


document.writeln(`<p><b>Функція, яка форматує ім'я, роблячи першу букву великою:</b> ${formatName('nADiia')}</p>`);

function amountPayment(salary) {
    const tax = 19.5;
    const taxSalary = (tax*salary)/100;
    const netSalary = salary - taxSalary;

    return netSalary;
}

document.writeln(`<p><b>Функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати:</b> ${amountPayment(1500)}</p>`);

function getRandomNumber(n, m) {
    const randomNum = Math.floor(n + Math.random()*(m + 1 - n));

    return randomNum;
}

document.writeln(`<p><b>Функція, яка повертає випадкове ціле число в діапазоні від N до M:</b> ${getRandomNumber(1, 700)}</p>`);


function countLetter(letter, word) {
    let count = 0;

    for (let i = 0; i < word.length; i++ ) {
        if ( word.charAt(i).toLowerCase() === letter) {
            count += 1;
        }
    }

    return count;
}

document.writeln(`<p><b>Функція, яка рахує скільки разів певна буква повторюється в слові:</b> ${countLetter("r", "America")}</p>`);


function convertCurrency(money) {
    const modifiedMoney = money.toLowerCase();

    if (modifiedMoney.indexOf("uah") !== -1) {
        const convert1 = modifiedMoney.replace('uah'," ")/27;
 
        document.writeln(` $:  ${convert1}`);

    } else if (modifiedMoney.indexOf("$") !== -1) {
        const convert2 = modifiedMoney.replace('$'," ")*27;

        document.writeln(` UAH:  ${convert2}`);

    } else {
        alert("not correct money!");
    }

    return modifiedMoney;
}

convertCurrency("10$");


function getRandomPassword(passLength = 8) {
    const numbers = "1234567890";
    let randomstring = '';
    let randomNum = '';


    if (!isNaN(passLength) && passLength > 0 && passLength <= 8) {
         for (let i = 0; i< passLength; i++) {

            randomNum = Math.floor(Math.random() * numbers.length);
            randomstring += numbers.substring(randomNum,randomNum+1);
        }

    
    } else {
        randomNum = Math.floor(Math.random() * numbers.length);
        randomstring += numbers.substring(randomNum,randomNum+1);
    }

    return randomstring;
    
}

document.writeln(`<p><b>Функцію генерації випадкового паролю:</b> ${getRandomPassword()}</p>`);


function deleteLetters(letter, word) {
    let newWord = word.toLowerCase();

    for (let i = 0; i < word.length; i++ ) {
        newWord = newWord.replace(letter, '');
    }

    return newWord;
}

document.writeln(`<p><b>Функція, яка видаляє всі букви з речення:</b> ${deleteLetters("a", "America")}</p>`);