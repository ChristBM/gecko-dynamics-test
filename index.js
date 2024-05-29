document.getElementById('addItemButton').addEventListener('click', function() {
  const ul = document.getElementById('myList');
  const li = document.createElement('li');
  const listItems = ul.getElementsByTagName('li');
  li.textContent = `Item ${listItems.length + 1}`;
  ul.appendChild(li);
});
