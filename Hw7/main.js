const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476 
};
const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
};
const litva = { 
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};


// Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this.
const getMyTaxes = function (salary = this.middleSalary){
    return +(this.tax * salary).toFixed(2);
};

// Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this
const getMiddleTaxes = function (){
    return +(this.tax * this.middleSalary).toFixed(2);
};

// Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this
const getTotalTaxes = function (){
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
};

// Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;
const getMySalary = function (){
    const minSalary = 1500;
    const maxSalary = 2000;
    const mySalary = +(Math.random() * (maxSalary - minSalary + 1) + minSalary).toFixed(2);
    const taxes = +(mySalary * this.tax).toFixed(2);
    const profit = +(mySalary - taxes).toFixed(2);
    return {salary: mySalary, taxes: taxes, profit: profit};
};

setInterval(function(){
    console.log("Salary in Ukraine:");
    console.log(getMySalary.call(ukraine));
    console.log("Salary in Latvia:");
    console.log(getMySalary.call(latvia));
    console.log("Salary in Litva:");
    console.log(getMySalary.call(litva));
}, 10000);

console.log("Taxes in Ukraine:");
console.log(getMyTaxes.call(ukraine, 1000));
console.log("Taxes in Latvia:");
console.log(getMyTaxes.call(latvia, 1000));
console.log("Taxes in Litva:");
console.log(getMyTaxes.call(litva, 1000));
console.log("How many taxes on average in Ukraine:");
console.log(getMiddleTaxes.apply(ukraine));
console.log("How many taxes on average in Latvia:");
console.log(getMiddleTaxes.apply(latvia));
console.log("How many taxes on average in Litva:");
console.log(getMiddleTaxes.apply(litva));
console.log("Total taxes in Ukraine:");
const ukraineTaxes = getTotalTaxes.bind(ukraine);
console.log(ukraineTaxes());
console.log("Total taxes in Latvia:");
const latviaTaxes = getTotalTaxes.bind(latvia);
console.log(latviaTaxes());
console.log("Total taxes in Litva:");
const litvaTaxes = getTotalTaxes.bind(litva);
console.log(litvaTaxes());
console.log("Salary in Ukraine:");
console.log(getMySalary.call(ukraine));
console.log("Salary in Latvia:");
console.log(getMySalary.call(latvia));
console.log("Salary in Litva:");
console.log(getMySalary.call(litva));