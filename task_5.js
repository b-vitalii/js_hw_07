// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
{/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */}

let elem = {
    input: document.querySelector(`#name-input`),
    output: document.querySelector(`#name-output`)
}
// console.log(elem);
elem.input.addEventListener(`input`, event => event.target.value == `` ? elem.output.innerText = `незнакомец` : elem.output.innerText = event.target.value)
