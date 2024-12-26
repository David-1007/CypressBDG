const x = 2;
const y = 4;
const z = "text";
let sum ;
function Result(x, y, z) {
    if (typeof (x === "number") & typeof (y === "number")) {
       sum = x*y;
        return `${z}${sum}`;
    }
    else {
        return "Please select numbers for x and y.";
    }
}
console.log(Result(x, y, z));