const numRandom = randomNumber();

function signText(element, text) {
    const htmlElement = document.querySelector(element);
    htmlElement.textContent = text;
    return;
}

function userTry() {
    console.log("funcionando");
}

function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

signText("h1", "Juego adivinar número");
signText(".texto__parrafo", "Indica un número del 1 al 10");
