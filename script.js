
// Exercise 1
const textBtn = document.getElementById('change-text-btn');
textBtn.addEventListener('click', () => {
  document.getElementById('change-text').textContent = 'The text has now changed!';
});

// Exercise 2
const addBtn = document.getElementById('add-item-btn');
addBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'New Item Added';
  document.getElementById('my-list').appendChild(li);
});

// Exercise 3
const logBtn = document.getElementById('log-first-child-btn');
logBtn.addEventListener('click', () => {
  console.log(document.getElementById('my-list').firstElementChild);
});

// Exercise 4
const bgBtn = document.getElementById('change-bg-btn');
bgBtn.addEventListener('click', () => {
  const p = document.querySelector('p');
  if (p) p.style.background = 'yellow';
});

// Exercise 5
const toggleBtn = document.getElementById('toggle-visibility-btn');
toggleBtn.addEventListener('click', () => {
  const box = document.getElementById('toggle-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
});

// Exercise 6
const removeBtn = document.getElementById('remove-last-btn');
removeBtn.addEventListener('click', () => {
  const list = document.getElementById('my-list');
  if (list.lastElementChild) list.removeChild(list.lastElementChild);
});

// Exercise 7
const colourBtn = document.getElementById('change-colour-btn');
colourBtn.addEventListener('click', () => {
  document.querySelectorAll('#my-list li').forEach(li => li.style.color = 'blue');
});

// Exercise 8
const insertBtn = document.getElementById('insert-first-btn');
insertBtn.addEventListener('click', () => {
  const newLi = document.createElement('li');
  newLi.textContent = '⭐ New First Item ⭐';
  const list = document.getElementById('my-list');
  list.insertBefore(newLi, list.firstElementChild);
});
