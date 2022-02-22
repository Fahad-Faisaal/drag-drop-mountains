const mountainsList = document.getElementById('draggable-list');
const btnCheck = document.getElementById('btn-check');

const mountains = [
  'Mountain Everest',
  'Mountain K2',
  'Mountain Kangchenjunga',
  'Mountain Lhotse',
  'Mountain Makalu',
  'Mountain Cho Oyu',
  'Mountain Dhaulagiri',
  'Mountain Manaslu',
  'Mountain Parbat',
  'Mountain Annapurna',
];

const listItems = [];
let dragStartIndex;

function createList() {
  [...mountains]
  .map(a => {
    return {value: a, sortList: Math.random()}
  })
  .sort((a, b) => a.sortList - b.sortList)
  .map(el => el.value)
  .forEach((mountain, index) => {
    const list = document.createElement('li');
    list.setAttribute('data-index', index);

    list.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="mountain-name">${mountain}</p>
      </div>
    `;

    listItems.push(list);

    mountainsList.appendChild(list);
  })

  addEventListeners();
}

createList();


function dragStart () {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter () {
  this.classList.add('over')
}

function dragLeave () {
  this.classList.remove('over')
}

function dragOver (e) {
  e.preventDefault();
}

function dragDrop () {
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('over');
}

function swapItems (fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');
  
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}


function checkOrder () {
  listItems.forEach((el, i) => {
    const mountainName = el.querySelector('.draggable').textContent.trim();
    
    if (mountainName === mountains[i]) {
      el.classList.add('right')
      el.classList.remove('wrong')
    } else {
      el.classList.add('wrong')
      el.classList.remove('right')
    }
  })
}

function addEventListeners () {
  const draggables = document.querySelectorAll('.draggable');
  const listItems = document.querySelectorAll('#draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart)
 })

 listItems.forEach(item => {
   item.addEventListener('dragover', dragOver);
   item.addEventListener('drop', dragDrop);
   item.addEventListener('dragenter', dragEnter);
   item.addEventListener('dragleave', dragLeave);
 })
}

btnCheck.addEventListener('click', checkOrder)

