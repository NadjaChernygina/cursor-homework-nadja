const getRandomColor = () => {
  
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const generateBlocks = () => {
  let blocksItem = document.querySelectorAll('.inner-block');
  let blocks = document.getElementById('blocks');
  blocks.classList.add('show-block');

  for (let i = 0; i < blocksItem.length; i++) {
    blocksItem[i].style.backgroundColor = getRandomColor();
  }
};


const generateBlocksInterval = () => {
  let disable = document.getElementById('disable');
  setInterval(() => generateBlocks(), 1000);
  disable.disabled = true;
}