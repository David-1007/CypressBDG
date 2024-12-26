// Word Numbers!

let numberInText = "ZeRo";
let result = numberInText.toLowerCase();

switch (result) {
    case "one":
        number = 1;
        break;
    case "two":
        number = 2;
        break;
    case "three":
        number = 3;
        break;
    case "four":
        number = 4;
        break;
    case "five":
        number = 5;
        break;
    case "six":
        number = 6;
        break;
    case "seven":
        number = 7;
        break;
    case "eight":
        number = 8;
        break;
    case "nine":
        number = 9;
        break;
    case "zero":
        number = 0;
        break;
    default:
        number = "Number is not found."
}

console.log(number);

// True Ones, False Zeros.

function integerBoolean(array) {
    let arrayBoolean = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number" && array[i] === 1 || array[i] === 0) {
        arrayBoolean.push(Boolean (array[i]));
        }
        else {
            return "Please input 1 or 0."
        }
    }
    return arrayBoolean
}

let array = [1,0,0,1,0];
console.log(integerBoolean(array));

// Recreating the String.length Property.

function stringLength(text) {
    for (let i = 0; ; i++) {
        if (text.charAt(i) === "") {
            return i
        }
    }
}

let text = "Automation homework";
console.log(stringLength(text));

// Stars pyramide.

function pyramide() {
    let starPyr = "";
    for (let n = 1; n <= 5; n++) {
        for (let i = 0; i < n; i++) {
            starPyr += "*";
        }
        starPyr += "\n";
    }
    return starPyr
}

console.log(pyramide());

// Sum of Cubes.

function sumOfCubes(numArr) {
    let numCubes = [];
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        numCubes.push(numArr[i] * numArr[i] * numArr[i]); // math.cube(numArr[i]);
        for (let n = 0; n < numCubes.length; n++) {
            sum += numCubes[n]; 
        }
    }
    return sum
}

let numArr = [2, 5, 3, 6];
console.log(sumOfCubes(numArr));

// 2 տնային մինչև հաջորդ դաս կլրացնեմ։