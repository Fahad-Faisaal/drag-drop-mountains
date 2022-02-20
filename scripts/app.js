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

const listItems = mountains.map((mountain, i) => {
  const list = document.createElement('li');
  list.setAttribute('data-index', i);

  list.innerHTML = `
    <span class="number">${i + 1}</span>
    <div class="draggable" draggable="true">
       <p class="mountain-name">${mountain}</p>
    </div>
  `;

  mountainsList.appendChild(list);

  return list;
});

