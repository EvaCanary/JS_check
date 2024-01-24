// function printNumbers() {
//     for (let i = -10; i <= 10; i++) {
//         console.log (i);
// }
// }
// printNumbers()



// function printNumbersByRange(start, end) {
//     for (let i = start; i <= end; i++) {
//         console.log (i);
// }
// }
// printNumbersByRange(-3, 2);


// const numbers = [1,10,4,6];
// const number = 2;
// function includes(numbers, number) {
// const result = numbers.includes(number);
//     return result;
// }
// console.log(includes(numbers, number));



const createPerson = (name, surname, age) => {
return {name:name,surname:surname,age:age} 
}
console.log(createPerson('Katya','Pupkina','33'));



// function calculateNumbersSum(array) {
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
// }
// return sum;
// }
// console.log(calculateNumbersSum([0, 1, 2, 4, 8]))



// function createPerson (name, age) {
//     return {name, age}
// }

// function findOldest(person) {
//     let oldPerson = person[0];
//     for (let index = 0; index < person.length; index++) {
//         if (person[index].age > oldPerson.age) {
//             oldPerson = person[index];
//         } 
//     }
//  return oldPerson.name;
// }
// const person = [
//     createPerson('alina', 23),
//     createPerson('dmitry', 40),
//     createPerson('valeria', 34),
// ]
// const old = findOldest(person);
// console.log(old);