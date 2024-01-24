  function sayHello() {
  console.log('Привет, меня зовут');
  console.log('Ева');

  }
//вызов функции
  sayHello();

//Передача параметров в функцию 
function sum(a, b) {
return a + b;
}

const a = 7;
const b = 3;
const result = sum(a, b);
console.log(result);

// 1
function multiply(a, b) {
    return a * b;
}
console.log (multiply(5, 5));

// 2
function buildDate (day, month, year) {
   return day + '/' + month + '/' + year;
}
console.log (buildDate (11, 12, 2023));
// 3 
function isAdult () {
    const age = 24;
    if (age >= 18) {
        console.log('true')
    }
    else {
        console.log('false')
    }
}
// 4 
function getMonthByNumber (monthNumber) {
    let month = '';
    if (monthNumber === 1) {
        month = 'январь';
    }
    if (monthNumber === 2) {
        month = 'февраль';
    }
    if (monthNumber === 3) {
        month = 'март';
    }
    if (monthNumber === 4) {
        month = 'апрель';
    }
    if (monthNumber === 5) {
        month = 'май';
    }
    if (monthNumber === 6) {
        month = 'июнь';
    }
    if (monthNumber === 7) {
        month = 'июль';
    }
    if (monthNumber === 8) {
        month = 'август';
    }
    if (monthNumber === 9) {
        month = 'сентабрь';
    }
    if (monthNumber === 10) {
        month = 'октябрь';
    }
    if (monthNumber === 11) {
        month = 'ноябрь';
    }
    if (monthNumber === 12) {
        month = 'декабрь';
    }
    return month;
}

// свич
function getMonth (monthNumber) {
let month = 'Такого месяца нет';
switch (monthNumber) {
    case 1:
        month = 'январь';
    break;
    case 2:
        month = 'февраль';
    break;
    case 3:
        month = 'март';
    break;
    case 4:
        month = 'апрель';
    break;
    case 5:
        month = 'май';
    break;
    case 6:
        month = 'июнь';
    break;
    case 7:
        month = 'июль';
    break;
    case 8:
        month = 'август';
    break;
    case 9:
        month = 'сентябрь';
    break;
    case 10:
        month = 'октябрь';
    break;
    case 11:
        month = 'ноябрь';
    break;
    case 12:
        month = 'декабрь';
    break;
}
return month;
}
console.log (getMonth (13));

//цикл
function printNumbers () {
    for (let Y = -10; Y <= 10; Y++) {
        console.log (Y);
    }
}
console.log (printNumbers())
//массив + сложение чисел
function calculateNumberSum (numbers) {
    let sum = 0;
    numbers.forEach((element => {
        sum = sum + element;
    }));
    return sum;
}
console.log (calculateNumberSum([0, 1, 2, 4, 8]));
//массив + обьект
const people = [ 
    { 
      name: "Petr", 
      age: 29, 
    }, 
    { 
      name: "Ivan", 
      age: 34, 
    }, 
    { 
      name: "Kate", 
      age: 25, 
    }, 
  ];
  function findOldest(people) { 
    let oldest = 0;  //почему с 0
   
    people.forEach(function (person, index) //что за i 
    { 
      if (person.age > people[oldest].age) { 
        oldest = index; 
      } 
    }); 
   
    return people[oldest].name; 
  } 
   
  console.log(findOldest(people));