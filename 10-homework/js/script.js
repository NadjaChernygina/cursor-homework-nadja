

const pressButton = (e) => {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!sound) return;
    sound.currentTime = 0;
    sound.play();
  const btn = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
    btn.classList.add('active');
};

function removeActiveClass(e) {
  if(e.propertyName != 'transform') return;
  this.classList.remove('active');
};

document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('transitionend', removeActiveClass));

function clickMouse(e) {
  const keyCode = this.getAttribute('data-key');
  const sound = document.querySelector(`audio[data-key="${keyCode}"]`);

  sound.currentTime = 0;
  sound.play();
  this.classList.add('active');
};


document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', clickMouse));
window.addEventListener('keydown', pressButton);