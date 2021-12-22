const input = document.getElementById('input');
const submitBtn = document.getElementById('submitBtn');
const clearBtn = document.getElementById('clearBtn');
const ul = document.getElementById('ul');

submitBtn.addEventListener('click', function addTodo() {
  if (!input.value) {
    alert('You must write something');
  } else {
    let li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    li.innerHTML = input.value;
    ul.appendChild(li);
    ul.insertBefore(li, ul.childNodes[0]);
    input.value = '';

    if (li) {
      const div = document.createElement('div');
      li.append(div);

      const buttonDone = document.createElement('button');
      buttonDone.classList.add('btn', 'btn-outline-success');
      buttonDone.innerHTML = 'Done';
      buttonDone.style.marginRight = '5px';
      div.append(buttonDone);

      const buttonRemove = document.createElement('button');
      buttonRemove.classList.add('btn', 'btn-outline-danger', 'end-0');
      buttonRemove.innerHTML = 'Remove';
      div.append(buttonRemove);

      buttonRemove.addEventListener('click', () => {
        li.remove();
      });

      buttonDone.addEventListener('click', () => {
        li.classList.toggle('completed');
        buttonDone.remove();
      });
    }
  }
});

clearBtn.addEventListener('click', () => {
  if (!ul.innerHTML) {
    alert('There is nothing to remove');
  } else {
    ul.innerHTML = '';
  }
});
