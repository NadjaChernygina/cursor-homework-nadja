const getRandomArray = (length, min, max) => {
    let arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }

    return arr;
}


document.writeln(`<p><b>Функція, яка повертає масив випадкових цілих чисел:</b> ${getRandomArray(6, 3, 190)} </p>`);


const getModa = (...numbers) => {
    let list = [];
    let freq = 0;
    let mode;

    numbers.forEach((item) => {
        let foundNum = list.find(function(el){ return el.item == item })

        if(foundNum){
          foundNum.count++;

          if(foundNum.count > freq){
            mode = item;
            freq = foundNum;
          }
        }
        else
          list.push({item: item, count: 1})
    });

    return parseInt(mode);
}


document.writeln(`<p><b>Функція, яка повертає mode:</b> ${getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} </p>`);

const getAverage = (...numbers) => {
    const averageNum = numbers.reduce((a, b) => a + b, 0) / numbers.length;

    return averageNum;

}

document.writeln(`<p><b>Функція, яка рахує середнє арифметичне аргументів:</b> ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)} </p>`);



const getMedian = (...numbers) => {
    let median = 0;
    numbers.sort();

    if (numbers.length % 2 === 0) {
        median = (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
        median = numbers[(numbers.length - 1) / 2];
    }

    return median;
}

document.writeln(`<p><b>Функція, яка рахує медіану всіх переданих в неї аргументів:</b> ${getMedian(1, 2, 3, 4, 5)} </p>`);


const filterEvenNumbers = (...numbers) => {
    const evenNum = numbers.filter((el) => {
        return el % 2;
    });

    return evenNum;
}

document.writeln(`<p><b>Функція, яка фільтрує парні числа:</b> ${filterEvenNumbers(1, 2, 3, 4, 5, 6)} </p>`);


const countPositiveNumbers = (...numbers) => {
    let count = 0;

    const evenNum = numbers.reduce((acc, el) => {
        if (el > 0) {
            count++;
        }
    }, 0)

    return count;
}

document.writeln(`<p><b>Функція, яка порахує кількість чисел > 0:</b> ${countPositiveNumbers(1, -2, 3, -4, -5, 6)} </p>`);











