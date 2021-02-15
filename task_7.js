// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.
{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}
let elements = {
    inputRef: document.querySelector(`#font-size-control`),
    innerText: document.querySelector(`#text`)
}
// console.log(elements);
elements.inputRef.addEventListener(`input`, event => elements.innerText.style.fontSize = `${event.target.value}px`)
