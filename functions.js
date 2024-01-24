//Функции

// Создание функции
sayHi();

function sayHi() {
    console.log('hello');
}

// Передача параметров 
sum(1, 4); // 5
console.log(sum(1, 2));

function sum(a, b) {
    return a + b;
}

// Возвращение значений 
const name = 'Eva';
const surname = 'Assayag';
const fullname = buildFullName (name, surname);
console.log(fullname);

function buildFullName(name, surname) {
    return `${name} ${surname}`;
}

const myAge = 20;
const canGoDance = isAdult(myAge);

function isAdult(age) {
    return age > 18;

}

const a = 2;
const b = 4;

function multiple (a, b) {
    return a * b;
}
console.log(multiple(2, 4)) 



function buildDate(day, month, year) {
    return `${day}/${month}/${year}`
}
console.log(buildDate(7, 9, 1999))

function isAdult (age) {
    if (age >= 18) {
        return true
    } else { 
        return false
    }
}
console.log(isAdult(22))

function convertRub(valueRub, currency) {
    switch (currency) {
        case 'USD':
            return valueRub / 88.5;
            
        case 'EUR': 
            return valueRub / 97.3;
            
        case 'KZT': 
            return valueRub / 0.20;
            
        case 'AED':
            return valueRub / 24.10;
           
    }
}
console.log(convertRub(4000, 'USD'))