// Функція №1 Отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
const getMaxDigit = number => Math.max(...number.toString().split(''));

// ФУнція №2 Визначає ступінь числа.

const degreOfNumber = (x, y) => {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}
// Фунція №3  Яка форматує ім'я, роблячи першу букву великою. 
const  capitalLetter = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();


// Фунція №4 Яка вираховує суму, що залишається після оплати податку від зарабітньої плати.

const getPureIncome = (theSalary) => {
const tax = 18 + 1.5;
return theSalary - theSalary * tax / 100;
}

// Фунція №5 Яка повертає випадкове ціле число в діапазоні від N до M. 
const calcutRandom = (min, max) => Math.round(Math.random() * (max - min + 1));

//  Фунція №8 Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

const randomPassword = (number = 8) => {
let str = '';
for(let i = 0; i < number; i++){
str += Math.floor(Math.random() * 10)
} 
return str;
}


document.writeln(`Функція №1: ${getMaxDigit(13579)} <br>`)
document.writeln(`Функція №2: ${degreOfNumber(3, 4)} <br> `)
document.writeln(`Функція №3: ${capitalLetter('аНатоЛій')}<br>`);
document.writeln(`Функція №4: ${getPureIncome(1000)}<br>`);
document.writeln(`Функція №5: ${calcutRandom(1,10)}<br>`);
document.writeln(`Функція №8: ${randomPassword()}<br>`);

