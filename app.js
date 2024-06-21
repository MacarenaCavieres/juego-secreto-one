const numRandom = randomNumber();
let intentos = 1;

function signText(element, text) {
    const htmlElement = document.querySelector(element);
    htmlElement.textContent = text;
    return;
}

function userTry() {
    const userNumber = parseInt(document.querySelector("#userValue").value);
    if (userNumber === numRandom) {
        signText(
            ".texto__parrafo",
            `Acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"} `
        );
    } else if (userNumber > numRandom) {
        signText(".texto__parrafo", "SkyNet eligio un número menor");
        intentos++;
    } else {
        signText(".texto__parrafo", "SkyNet eligio un número mayor");
        intentos++;
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

signText("h1", "Juego adivinar número");
signText(".texto__parrafo", "Indica un número del 1 al 10");
