// Is the Number Less than or Equal to Zero?

function LessThanOrEqualToZero(num) {
    if (num > 0) {
        return false;
    }
    else {
        return true;
    }
}

let num = 1.1;
console.log(LessThanOrEqualToZero(num));

// Are the Numbers Equal?

function EqualNumbers(num1, num2) {
    if ((typeof (num1) === "number") & (typeof (num2) === "number") & (num1 === num2)) {
        return true;
    }
    else {
        return false;
    }
}

let num1 = 5;
let num2 = "5";
console.log(EqualNumbers(num1, num2));

// Two Makes Ten.

function MakesTen(a, b) {
    if (a === 10 || b === 10) {
        return true;
    }
    else if (a + b === 10) {
        return true;
    }
    else {
        return false;
    }
}

let a = 5;
let b = 10;
console.log(MakesTen(a, b));

// Multiple of 100.

function divisible(x) {
    if (x % divisor === 0) {
        return true;
    }
    else {
        return false;
    }
}

let x = 1001;
const divisor = 100;
console.log(divisible(x));

// Triangle and Parallelogram Area Finder

function areaShape(base, height, shape) {
    if (shape === "triangle") {
        let area = base * height / 2;
        return "The area of the triangle is: " + area;
    }
    else if (shape === "parallelogram") {
        let area = base * height;
        return "The area of the parallelogram is: " + area;
    }
}

let base = 2.5;
let height = 8;
let shape = "parallelogram";
console.log(areaShape(base, height, shape));

// Lesson.

const arrayTypes = ["string", "3", true];

function ifNumber() {
    if (typeof (arrayTypes[1]) === "number") {
        return "OK";
    }
    else {
        return "Wrong";
    }
}

console.log(ifNumber(arrayTypes[1]));

// Object

const person = {
    firstName: "John",
    lastName: "Doe",
    age: "50",
    eyeColor: "blue"
};

const checkPersonName = (object) => {
    if (person.firstName === "John") {
        return "Corect name."
    }
    else {
        return "'Wrong name."
    }
}

console.log(checkPersonName(person))

// Խնդիր

const array = [{firstName: "John"}, {firstname: "Jack"}];

function getObjectName(object) {
    if (array[0].firstName === "John") {
        return true;
    }
    else {
        return false;
    }
}

console.log(getObjectName(array));

// Խնդիր 2

const arr = [1, 5];

function concatOrSum(array) {
    if (typeof (array[0]) === "string") {
        let text = "Welcome"
        return `${array[0]} ${text}`
    }
    else if (typeof (array[0]) === "number" && typeof (array[1] === "number")) {
        return array[0] + array[1];
    }
    else {
        return "Wrong variables."
    }
}

console.log(concatOrSum(arr));