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

input1.addEventListener('input', checkInputs);
input2.addEventListener('input', checkInputs);

document.querySelector('#btn').onclick = function () {
  let name1 = input1.value.trim();
  let name2 = input2.value.trim();
  if (
    name1.includes('Siddik') ||
    (name1.includes('Selina') && name2.includes('Siddik')) ||
    name2.includes('Selina')
  ) {
    selectScore.innerHTML = 'Your Love Score is:' + '100' + '%';
    selectMsg.innerHTML = 'Love Statement: True Love';
  } else {
    let score = Math.ceil(Math.random() * 100);
    if (score >= 80) {
      selectScore.innerHTML = 'Your Love Score is:' + ' ' + score + '%';
      selectMsg.innerHTML = 'Love Statement: True Love';
    } else {
      selectScore.innerHTML = 'Your Love Score is:' + ' ' + score + '%';
      selectMsg.innerHTML = 'Love Statement: Fake Love';
    }
  }

  //Clear field value
  input1.value = '';
  input2.value = '';
  submitBtn.disabled = true;
};
