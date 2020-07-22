function getMaxDigit(numbers){
    const digits = String(numbers).split('');
    const maxNumber = Math.max(...digits);
    
    return maxNumber;  
}

document.writeln(`Функція №1: ${getMaxDigit(121212136)}`)