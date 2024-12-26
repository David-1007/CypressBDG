// Loop.

// let cars = ["Mercedes", "BMW", "Ferrari"];
// let carsName;
// function getCarsName(cars) {
//     for (let i = 0; i < cars.length; i++) {
//         carsName += cars[i]; // carsName.push(cars[i]);
//     }
//     return carsName;
// }

// console.log(getCarsName(cars));

// Խնդիր։

let cars = ["Volvo", "Mers", "BMW", "Ferrari"];

function getCarsName(cars) {
    for (let i = 0; i < cars.length; i++) {
        
        if (cars[i] === "Mers") {
            return "Mers good auto.";
        }
    }
}

console.log(getCarsName(cars));