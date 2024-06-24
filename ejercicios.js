// // Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros
// // y peso en kilogramos, que se recibirán como parámetros.

// function mass(height, weight) {
//     const result = weight / Math.pow(height, 2);
//     console.log(result);
// }

// mass(1.57, 56);

// // Crea una función que calcule el valor del factorial de un número pasado como parámetro.

// function factorial(num) {
//     let result = 1;
//     for (let i = num; i >= 1; i--) {
//         result *= i;
//     }
//     console.log(result);
// }
// factorial(5);

// // Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el
// // valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
// // Para esto, considera la cotización del dólar igual a R$4,80.

// function convert(dolar) {
//     const result = dolar * 940.97;
//     console.log(result);
// }

// convert(5);

// // Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
// // utilizando la altura y la anchura que se proporcionarán como parámetros.

// function calculation(height, width) {
//     const areaRectangle = height * width;
//     const perimeterRectangle = Math.pow(height, 2) + Math.pow(width, 2);
//     console.log("Area:", areaRectangle, "Perimetro:", perimeterRectangle);
// }

// calculation(5, 4);

// // Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
// // utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

// function calculationCircular(ratio) {
//     const areaCircular = Math.PI * Math.pow(ratio, 2);
//     const perimeterCircular = Math.PI * (ratio * 2);
//     console.log("Area:", areaCircular, "Perimetro:", perimeterCircular);
// }

// calculationCircular(3);

// // Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

// function table(num) {
//     let result = 0;
//     for (let i = 1; i <= 12; i++) {
//         result = i * num;
//         console.log(`${i} x ${num} = ${result}`);
//     }
// }

// table(5);

// Crea una lista vacía llamada "listaGenerica".

const listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

const lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrar() {
    console.log(lenguagesDeProgramacion);
}
// mostrar();

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarInver() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

// mostrarInver();

// Crea una función que calcule el promedio de los elementos en una lista de números.
const nums = [4, 1, 6, 3];

function prom() {
    const num = nums.reduce((acc, curr) => acc + curr);
    console.log(num / nums.length);
}

// prom();

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function show() {
    const num = nums.reduce((acc, curr) => {
        if (acc >= curr) {
            return acc;
        } else {
            return curr;
        }
    });
    const num1 = nums.reduce((acc, curr) => {
        if (acc <= curr) {
            return acc;
        } else {
            return curr;
        }
    });

    console.log("Mayor:" + num + " Menor:" + num1);
}
// show();
// Crea una función que devuelva la suma de todos los elementos en una lista.

function suma() {
    const sum = nums.reduce((acc, curr) => acc + curr);
    console.log(sum);
}

// suma();

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function findInd(nums, num) {
    const index = nums.findIndex((item) => item === num);
    console.log(index);
}

// findInd(nums, 4);
// findInd(nums, 7);

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumArrays(arra1, array2) {
    const newArray = [];
    for (let i = 0; i < arra1.length; i++) {
        const result = arra1[i] + array2[i];
        newArray.push(result);
    }
    console.log(newArray);
}

// sumArrays([1, 2, 3, 4], [1, 2, 3, 4]);

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function lista(array) {
    const newLista = array.map((item) => {
        return Math.pow(item, 2);
    });
    console.log(newLista);
}

lista([3, 5, 7, 2]);
