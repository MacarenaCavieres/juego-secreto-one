let arrayNums = [];
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
        const btnRestart = document.querySelector("#reiniciar");
        btnRestart.removeAttribute("disabled");
    } else if (userNumber > numRandom) {
        signText(".texto__parrafo", "SkyNet eligio un número menor");
        cleanInput();
        intentos++;
    } else {
        signText(".texto__parrafo", "SkyNet eligio un número mayor");
        cleanInput();
        intentos++;
    }
}

function initCondit() {
    signText("h1", "Juego adivinar número");
    signText(".texto__parrafo", "Indica un número del 1 al 10");
    intentos = 1;
    numRandom = randomNumber();
}

function restart() {
    cleanInput();
    const btnRestart = document.querySelector("#reiniciar");
    btnRestart.setAttribute("disabled", "");

    initCondit();
}

function cleanInput() {
    const userValue = document.querySelector("#userValue");
    userValue.value = "";
}

function randomNumber() {
    const btnTry = document.querySelector("#intentar");
    const num = Math.floor(Math.random() * 10) + 1;
    const index = arrayNums.findIndex((item) => item === num);
    if (arrayNums.length === 10) {
        signText(".texto__parrafo", "SkyNet se quedo sin números, refresque para comenzar a jugar de nuevo");
        btnTry.setAttribute("disabled", "");
    } else {
        if (index === -1) {
            arrayNums.push(num);
            return num;
        } else {
            return randomNumber();
        }
    }
}

initCondit();
