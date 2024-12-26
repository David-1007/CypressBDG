// Գտնել տվյալ թվի ֆակտորյալը։

let num = 5;
let result = 1;

function factorial() {
    if (num !== 0) {
        let i = 1;
        while (i <= num) {
            result = result * i; // result *= i
            i++;
        }
        return result
    }
    else {
        return "Enter number greater than 0."
    }
}

console.log(factorial(num));