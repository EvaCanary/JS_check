/**
 * ОПЕРАТОРЫ
 */

// Арифметические: сложение
const a = 3;
const b = 4;

console.log(a + b)

// Арифметические: вычитание
// Арифметические: умножение
// Арифметические: деление
const result = a / b;

console.log(result);

// Сравнение: равно
console.log( a == b );

// Сравнение: не равно
console.log( a != b );

// Сравнение: строгое равно
console.log( a == b );
console.log( a === b );

// Сравнение: строгое не равно
console.log( a != b, a !== b );

//Логические: И
const age = 17;
const isRoomClean = true;

// Логические: ИЛИ
const isAllowGoingToParty = (age >= 18) || isRoomClean;

console.log(isAllowGoingToParty);

// Логические: НЕ
const title = '';
const isTitleEmpty = !title;

console.log(isTitleEmpty);



function sayHi() {
    console.log('hello');
}

sayHi();