//alert()
//alert(1 + 4);

//confirm()
// const isAdult = confirm('Вам есть 18 лет?');

// if (isAdult) {
//     alert('Вы можете идти на тусовку');
// } else {
//     alert('Пока рано');
// }


// prompt() вопрос - ответ-ввод от пользователя
const age = prompt('Введите свой возраст');

if (isAdult(age)) {
    alert('Вы можете идти на вечеринку');
} else {
    alert('Пока рано');
}

function isAdult(age) {
    return age >= 18;
}