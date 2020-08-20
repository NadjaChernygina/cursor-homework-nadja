const buttonInterval = document.querySelector('.button-interval');
const button = document.querySelector('.button');


const getRandomColor = () => {
  
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const takeRandomColor = () => {
  const blocksItem = document.querySelectorAll('.inner-block');

  for (let i = 0; i < blocksItem.length; i++) {
    blocksItem[i].style.backgroundColor = getRandomColor();
  }
};

const generateBlocks = () => {
  let blocks = document.getElementById('blocks');
  blocks.classList.add('show-block');
  takeRandomColor();
};


const generateBlocksInterval = () => { 
  buttonInterval.classList.add('disable');
  setInterval(() => takeRandomColor(), 1000);
}

button.addEventListener('click', function() {
  buttonInterval.classList.remove('disable');
}, { once: true });

