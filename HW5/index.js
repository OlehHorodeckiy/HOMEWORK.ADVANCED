//  Задача №1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
// 1

const getRandomArray = (length, min, max) => {
  let randomArray = [];

  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * (max - min) + min + 1));
  }
  return randomArray;
};

const randomArr = getRandomArray(15, 1, 100);
console.log(randomArr);


//  Задача №2 Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.


//  Задача №3 .Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ.

const getAverage = (...numbers) => {
	return numbers.filter(number => Number.isInteger(number))
		.reduce((sum, number) => (sum + number)) / numbers.length;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// Задача №5 .Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функціїю

const filterEvenNumbers = (...numbers) =>
  numbers.filter((number) => number % 2 !== 0);
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));


//Задача №6  Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
const countPositiveNumber = (...numbers) => numbers.filter(number => number > 0).length;
console.log(countPositiveNumber(1, -2, 3, -4, -5, 6));



// Задача №7 Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const getDividedByFive = (...numbers) => numbers.filter(number => number % 5 === 0);

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



