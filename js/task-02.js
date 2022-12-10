const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')

const elements = ingredients.map(el => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add('item')
  itemEl.textContent = el;
  return itemEl;
})
 
listEl.append(...elements)









