// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

let ulRef = document.querySelector(`#ingredients`)
// console.log(ulRef);
ingredients.forEach((ingredient) => {
  let createLi = document.createElement(`li`);
    createLi.innerText = ingredient;
    ulRef.append(createLi);
})
console.log(ulRef);








