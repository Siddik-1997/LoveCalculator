let selectScore = document.querySelector('#score');
let selectMsg = document.querySelector('#msg');
let input1 = document.getElementById('text1');
let input2 = document.getElementById('text2');
let submitBtn = document.getElementById('btn');

// Required field and Button disabled state.

function checkInputs() {
  if (input1.value && input2.value) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// Check input value
input1.addEventListener('input', checkInputs);
input2.addEventListener('input', checkInputs);

document.querySelector('#btn').onclick = function () {
  // let name1 = input1.value.trim();
  // let name2 = input2.value.trim();
  // if (
  //   name1.includes('Siddik') ||
  //   (name1.includes('Selina') && name2.includes('Siddik')) ||
  //   name2.includes('Selina')
  // ) {
  //   selectScore.innerHTML = 'Your Love Score is:' + '100' + '%';
  //   selectMsg.innerHTML = 'Love Statement: True Love';
  // } else {
  let score = Math.ceil(Math.random() * 100);
  if (score >= 90) {
    selectScore.innerHTML = 'Your Love Score is:' + ' ' + score + '%';
    selectMsg.innerHTML = 'Love Statement: Soulmates ❤️';
  } else if (score <= 89 && score >= 75) {
    selectScore.innerHTML = 'Your Love Score is:' + ' ' + score + '%';
    selectMsg.innerHTML = 'Love Statement: True Love 💖';
  } else if (score <= 74 && score >= 50) {
    selectScore.innerHTML = 'Your Love Score is:' + ' ' + score + '%';
    selectMsg.innerHTML = 'Love Statement: Strong Affection 💘';
  } else if (score <= 49 && score >= 25) {
    selectScore.innerHTML = 'Your Love Score is:' + ' ' + score + '%';
    selectMsg.innerHTML = 'Love Statement: Acquaintance 🤝';
  } else {
    selectScore.innerHTML = 'Your Love Score is:' + ' ' + score + '%';
    selectMsg.innerHTML = 'Love Statement: Just Friends 😊';
  }
  //Clear field value
  input1.value = '';
  input2.value = '';
  submitBtn.disabled = true;
};
