// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
{/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */}

let elem = {
  span: document.querySelector(`#value`),
  btnInc: document.querySelectorAll(`button`)[1],
  btnDec: document.querySelectorAll(`button`)[0],
  counterValue: 0
}
// console.log(elem);
elem.span.innerText = elem.counterValue
elem.btnInc.addEventListener('click', () => elem.span.innerText = elem.counterValue += 1)
elem.btnDec.addEventListener('click', () => elem.span.innerText = elem.counterValue -= 1)

