const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = [
  'Диференційне рівняння',
  'Теорія автоматів',
  'Алгоритми і структури даних',
];
const marks = [4, 5, 5, 3, 4, 5];

function getRandomMark(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const mans = [];
const womens = [];
const pairs = [];
const studentsMark = [];

for (const name of students) {
  if (name.slice(-1) === 'а') {
    womens.push(name);
  } else {
    mans.push(name);
  }
}
if (mans.length !== womens.length) {
  console.log('Непарна к-сть студетів');
} else {
  for (let i = 0; i < mans.length; i++) {
    pairs.push([mans[i], womens[i]]);
  }
  console.log("Пари студентів ",pairs)

  for (let i = 0; i < themes.length; i++) {
    const pair = pairs[i].join(' i ');
    pairs[i] = [pair, themes[i]];
  }

  console.log('Пари студентів з предметами ', pairs);

  for (let i = 0; i < students.length; i++) {
    studentsMark.push([students[i], marks[i]]);
  }

  console.log('Оцінки студентів ', studentsMark);

  for (let i = 0; i < pairs.length; i++) {
    pairs[i].push(getRandomMark(1, 5));
  }

  console.log('Пари студентів з предметами та оіцінками ', pairs );
}

document.writeln('Пари студентів :', pairs + ";"+"<br>");
document.writeln('Пари студентів з предметами :', pairs + ";"+"<br>");
document.writeln('Оцінки студентів : ', studentsMark + ";"+"<br>");
document.writeln('Пари студентів з предметами та оіцінками :', pairs + ";"+"<br>");
