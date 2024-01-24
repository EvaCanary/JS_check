//old

function sum(a, b) {
    return a+b;
}

//new

const sum = (a, b) => {
    return a + b;
}

//old

function sum(a, b) {
    if (a === undefined) {
        a = 0;
    }
    if (b === undefined) {
        b = 0;
    }
    return a + b;
}

//new

const sum = (a = 0, b = 0) => a + b;
const result = sum(3, 5);

//old (example with one argument)

function square(number) {
    return number * number;
}

//new (can use param without '('num')')

const square = num => num * num;
const printHello = () => {
    console.log('hello');
}

//old 

var numbers = [1,5,6,8,3,6,12];
numbers sort(function() {return a - b;
});

   

//new 

const numbers = [1,5,6,8,3,6,12];
numbers.sort((a, b) => a - b);   


//old object
var person = {
    name: 'John Doe',
    age: 44,
    languages: ['HTML', 'CSS', 'JavaScript'],
    greet: function () {
        console.log(this.name);
    }
}

//new object 

const person = {
    name: 'John Doe',
    age: 44,
    languages: ['HTML', 'CSS', 'JavaScript'],
    greet() {
        console.log(this.name);
    }
}