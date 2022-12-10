// 1 
const itemsEl = document.querySelectorAll('.item')
console.log(itemsEl);

console.log(`Number of categories: ${itemsEl.length} `);

//2

itemsEl.forEach(el => {
console.log(
`Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`);})



