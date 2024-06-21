// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros
// y peso en kilogramos, que se recibirán como parámetros.

function mass(height, weight) {
    const result = weight / Math.pow(height, 2);
    console.log(result);
}

mass(1.57, 56);

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
    console.log(result);
}
factorial(5);

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el
// valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
// Para esto, considera la cotización del dólar igual a R$4,80.

function convert(dolar) {
    const result = dolar * 940.97;
    console.log(result);
}

convert(5);

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
// utilizando la altura y la anchura que se proporcionarán como parámetros.

function calculation(height, width) {
    const areaRectangle = height * width;
    const perimeterRectangle = Math.pow(height, 2) + Math.pow(width, 2);
    console.log("Area:", areaRectangle, "Perimetro:", perimeterRectangle);
}

calculation(5, 4);

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
// utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calculationCircular(ratio) {
    const areaCircular = Math.PI * Math.pow(ratio, 2);
    const perimeterCircular = Math.PI * (ratio * 2);
    console.log("Area:", areaCircular, "Perimetro:", perimeterCircular);
}

calculationCircular(3);

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function table(num) {
    let result = 0;
    for (let i = 1; i <= 12; i++) {
        result = i * num;
        console.log(`${i} x ${num} = ${result}`);
    }
}

table(5);
