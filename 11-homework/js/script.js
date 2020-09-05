const resultWrapper = document.querySelector('.result');

function getRandomChinese(length) {
    return new Promise((resolve) => {
        let sign = Date.now().toString().substr(-5);
        let characters;
        let word = [];

        for(let i = 0; i < length; i++) {
            characters = String.fromCharCode(sign);
            word.push(characters);
            sign++;
        }

        setTimeout(() => {
            resolve(word);         
        }, length * 50);
    });
}

getRandomChinese(10).then(result => {
    resultWrapper.innerText = `${result}`;
 });
