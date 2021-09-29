let NumberN;
let NumberM;

do{
    NumberN = +prompt("Введіть число N", "");
}while(!Number.isInteger(NumberN));

do{
    NumberM = +prompt("Ведітьчисло  M, яке буде більше за число  N", "");
}while(!Number.isInteger(NumberM) || (NumberM < NumberN));


const getEvenNumber = confirm("Пропускаємо парні числа?");

let sum = 0;
for(let i = NumberN; i <= NumberM; i++){
    if(getEvenNumber){ 
        if(i % 2 !== 0){
            sum += i;
        }
    } else {
        sum += i;
    }
}
document.writeln(`Розрахунок: ${sum}`)