document.addEventListener('DOMContentLoaded', () => {
  // get the DOM elements
  const message = document.getElementById('message');
  const changeTextBtn = document.getElementById('changeTextBtn');
  const toggleStyleBtn = document.getElementById('toggleStyleBtn');
  const addElementBtn = document.getElementById('addElementBtn');
  const removeElementBtn = document.getElementById('removeElementBtn');
  const dynamicList = document.getElementById('dynamicList');

  //counter for new items
  let itemCount = 3;

  // cange text content
  changeTextBtn.addEventListener('click', () => {
    message.textContent = `Text was changed at ${new Date().toLocaleTimeString()}!`;
  });

  // toggle CSS highlight style
  toggleStyleBtn.addEventListener('click', () => {
    message.classList.toggle('highlight');
    toggleStyleBtn.textContent = message.classList.contains('highlight')
      ? 'Remove Highlight'
      : 'Toggle Highlight';
  });

  //add a new element
  addElementBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `New Item ${itemCount}`;
    dynamicList.appendChild(newItem);
    itemCount++;
    message.textContent = `Added Item ${itemCount - 1}!`;
  });

  //remove the last element
  removeElementBtn.addEventListener('click', () => {
    const lastItem = dynamicList.lastElementChild;
    if (lastItem) {
      dynamicList.removeChild(lastItem);
      message.textContent = 'Removed the last item!';
    } else {
      message.textContent = 'No items to remove!';
    }
  });
});
