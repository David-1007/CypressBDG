// 1

const sentence = "Hello world, how are you";
let modifiedText = "";

function modText (text) {
    let i = 0;
    while (i < text.length) {
        if (text[i] !== " " && text[i] !== ",") {
            modifiedText += text[i];
        }
        i++;
    }
    return modifiedText
}
console.log(modText(sentence));

// 

const text = "Hello World";
let char = "l";
let count = 0;

function findL () {
    let i = 0;
    while (i < text.length) {
        if (text[i] === char) {
            count++;
        }
        i++;
    }
    return count
}

console.log(findL(text));

// ?????

const array = ["Hello World", ["Its", "a", "lazy", "day"]];
let character = "l";
let countOfChar = 0;

function findChar () {
    let i = 0;
    let j = 0;
    while (i < array[i]) {
        if (j < array[i]) {
            countOfChar++;
        }
        i++;
    }
    return countOfChar
}

console.log(findChar());