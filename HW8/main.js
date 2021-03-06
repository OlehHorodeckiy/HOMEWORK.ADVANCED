// Домашнє завдання по темі "Прототипи. ES6 класи"
// 1.У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
// 2.Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
// 3.Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
// 4.Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
// 5.Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
// 6.Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
// 7.Створіть метод this.recover, який дозволить поновити студента.
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.isStudy = true;
    this.isMarks = [5, 4, 4, 5];
  }

  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

  get marks() {
    return this.isStudy ? this.isMarks : null;
  }

  set marks(mark) {
    if (this.isStudy) {
      return this.isMarks.push(mark);
    }
  }

  getAverageMark() {
    if (this.isStudy) {
      return this.isMarks.reduce((sum, a) => (sum += a)) / this.isMarks.length;
    }
    return null;
  }

  dismiss() {
    this.isStudy = false;
  }

  recover() {
    this.isStudy = true;
  }
}

const student = new Student(
  'Вищої Школи Психотерапії м.Одеса',
  1,
  'Остап Бендер'
);

console.log(student.getInfo());
console.log(student.marks);
// Ставимо оцінку:
student.marks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
student.dismiss();
console.log('Студент відрахований');
student.marks = 5;
student.marks = 4;
console.log(student.marks);
student.recover();
console.log('студента поновлено');
student.marks = 5;
student.marks = 4;
console.log(student.marks);
