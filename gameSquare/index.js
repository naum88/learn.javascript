let $start = document.querySelector('#start');
let $game = document.querySelector('#game');

let score = 0;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);

function startGame() {
  //console.log('start');
  $game.style.backgroundColor = '#fff';
  $start.classList.add('hide');

  renderBox();
}

function handleBoxClick(event) {
  if(event.target.dataset.box) {
    score++;
    renderBox();
  }
}

function renderBox() {
  $game.innerHTML = '';
  let box = document.createElement('div');

  box.style.height = box.style.width = '50px';
  box.style.position = 'absolute';
  box.style.background = '#000';
  box.style.top = '50px';
  box.style.left = '50px';
  box.style.cursor = 'poiter';
  box.setAttribute('data-box', 'true')

  $game.insertAdjacentElement('afterbegin', box);
}