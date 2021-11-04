// Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:

// Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр 
// результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. 
// Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

// const getRandomChinese = () => {
//     const t = Date.now();

//     return t;
// }

// console.log(Date.now());


function olsa(callback) {
    let a = [1,3,4,5,6];
    let element = document.querySelector('.container');
    callback(element, a);
}

function star(elem, arr) {
    elem.innerHTML = arr.join(' * ')
}

function at(elem, arr) {
    elem.innerHTML = arr.join(' @ ')
}

let g = Date.now();
console.log(g)


olsa(star);