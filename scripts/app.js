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

function createList() {
  [...mountains]
  .map(a => {
    return {value: a, sortList: Math.random()}
  })
  .sort((a, b) => a.sortList - b.sortList)
  .map(el => el.value)
  .forEach((mountain, index) => {
    console.log(mountain);
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
}

createList();

