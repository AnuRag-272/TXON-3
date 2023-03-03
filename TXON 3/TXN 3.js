let input = document.getElementById('input');
let list = document.getElementById('list');

function addTask() {
  let task = input.value;
  if (task) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let button = document.createElement('button');
    span.innerText = task;
    button.innerText = 'X';
    button.onclick = function() {
      li.remove();
    }
    li.appendChild(span);
    li.appendChild(button);
    list.appendChild(li);
    input.value = '';
  }
}