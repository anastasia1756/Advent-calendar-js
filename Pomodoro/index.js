const refs = {
  startBtn: document.querySelector('.start'),
  settingsBtn: document.querySelector('.settings'),
  ring: document.querySelector('.ring'),
  minutes: document.querySelector('.minutes input'),
  seconds: document.querySelector('.seconds input'),
};
// let refs.seconds;
let intervalHandle;
// console.log(refs.minutes.text);

let min = Number(refs.minutes.value);
let sec = Number(refs.seconds.value);
refs.startBtn.addEventListener('click', onStartClick);
console.log('🚀 ~ file: index.js ~ line 13 ~ min', min);
function onStartClick() {
  //   if (+min === 0) {
  //     return;
  //   }
  //   refs.seconds.value--;
  //   if (+refs.seconds.value === 00) {
  //     min--;
  //   }
  min = Math.floor(sec / 60);

  sec = sec - min * 60;
  console.log('🚀 ~ file: index.js ~ line 24 ~ onStartClick ~ sec', sec);
  if (sec < 10) {
    padStart(sec);
  }
  if (sec === 0) {
    refs.ring.style.stroke = 'FF0000';
    alert('Done!');
    clearInterval(intervalHandle);
  }

  sec--;

  sec = min * 60;
  intervalHandle = setInterval(onStartClick, 1000);
}

function padStart(value) {
  return String(value).padStart(2, '0');
}
//refs.ring.style.stroke = red;
