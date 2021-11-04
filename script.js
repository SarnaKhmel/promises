// // Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:

// // Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр 
// // результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
// // Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// // Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. 
// // Час роботи проміса має складати length * 50ms.
// // (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

// let length = 5;
// let randomTime = Date.now();
// let returnyk = 0;
// console.log(randomTime);
//    // randomTime = randomTime.toString();
//    // randomTime = randomTime.substring(randomTime.length-5, randomTime.length);
// //     console.log(randomTime);
// //     randomTime = parseInt(randomTime.toString().substring(randomTime.length-5, randomTime.length), 10)
// //     console.log(randomTime);
// //     returnyk = String.fromCharCode(randomTime);
// //     console.log(returnyk );

//     //while()

    // const randomChinise = (length) => {
    //     let string = '';
    //     let randomTime = 0 ;
    //     for (let i = 0; i < length; i++) {
    //             randomTime = Date.now();
    //             randomTime = randomTime.toString();
    //             let characterIndex = parseInt(randomTime.substring(randomTime.length-5, randomTime.length), 10);
    //             console.log(characterIndex);
    //             let character = String.fromCharCode(characterIndex);
    //             console.log(character);
            

    //     }
    // }
    // randomChinise(3);

    const waiter = length => {
        return new Promise(resolve => {
            setTimeout(() => resolve(), length * 50);
        })
    }

    const getRandomChinese = length => {
        let element = document.querySelector('.container');
        let randomTime = 0, characterIndex = 0, character = 0; 
        for (let i = 0; i < length; i++) {
            waiter(i).then(() => {
                randomTime = Date.now();
                randomTime = randomTime.toString();
                characterIndex = parseInt(randomTime.substring(randomTime.length-5, randomTime.length), 10);
                character = String.fromCharCode(characterIndex);
                console.log(character);
                element.innerHTML += character;
        })
        }
    }

    getRandomChinese(1500);
    
  

// let length = 5;
// let i = 0;
// let ret = '';
// //let range = (start, end) => [...Array(end - start).keys(), end - start].map(n => start + n); // діапазон іерогліфів
// //let character = range(13312, 14351);
// while (i < length) {
//     //alert("Chines ierogliphs");
//     let randomTime =  Date.now();
//     randomTime = String.toString.substring(randomTime.length-6, randomTime.length);
//     randomTime = randomTime.parseInt();
//     console.log(randomTime);
//     ret = String.fromCharCode(randomTime);
//     console.log(ret);

// }

// let string  = '16086';
// string = String.fromCharCode(16086);
// console.log(string);


// let range = (start, end) => [...Array(end - start).keys(), end - start].map(n => start + n);
// let A = range(13312, 14351);   // A-Z
// let a = range(340, 344);  // a-z
// let dig = range(340, 344); // 0-9
// //let all = A.concat(a).concat(dig); // Склеиваем в один
// let all = A;

// function generateString(length = 10){
//   let str = '';
  
//   for(let i = 0; i < length; i++){
//     str += String.fromCharCode(all[Math.floor(Math.random() * all.length)]); // Берём случайное число, преобразуем в соответствующий символ и добавляем к строке
//   }
  
//   return str;
// }



// console.info(generateString(1));


//  const getRandomChinese = length => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), length * 50)
//     })
//  }



// //     const t = Date.now();

// //     return t;
// // }

// // console.log(Date.now());


// function olsa(callback) {
//     let a = [1,3,4,5,6];
//     let element = document.querySelector('.container');
//     callback(element, a);
// }

// function star(elem, arr) {
//     elem.innerHTML = arr.join(' * ')
// }

// function at(elem, arr) {
//     elem.innerHTML = arr.join(' @ ')
// }

// let g = Date.now();
// console.log(g)


// olsa(star);