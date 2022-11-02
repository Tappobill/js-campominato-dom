const griglia = document.getElementById("griglia");
const difficolta = 100;
let bombe = [];
let sconfitta = false;
let vittoria = false;
let punteggio = 0;
const numbombe = 16;
const punteggiomax = difficolta - numbombe;

function creazioneQuadrato(num) {
    const div = document.createElement("div");

    if (bombe.includes(num)) {
        div.classList.add("bomba");
    }

    div.classList.add("quadrato");
    div.innerHTML = `<span>${num}</span>`;
    return div;
}

function generaGriglia() {
    for (let i = 1; i <= difficolta; i++) {
        let elementoCorrente = creazioneQuadrato(i);

        elementoCorrente.addEventListener("click", function () {

            verificaCella(this);
        })

        griglia.append(elementoCorrente);

    }
}



function mostraGriglia() {
    let gri = document.getElementById("griglia-principale")
    gri.classList.remove("d-none")
}

function play() {
    punteggio = 0;
    aggiornadivPunteggio();
    sconfitta = false;
    generaBombe();
    svuotaGriglia();
    generaGriglia();
    mostraGriglia();
    console.log(bombe);

}

function svuotaGriglia() {
    griglia.innerHTML = "";
}


function generaBombe() {
    bombe = [];
    while (bombe.length < numbombe) {
        let random = getRandomInt(1, difficolta);
        if (bombe.includes(random) === false) {
            bombe.push(random);
        }

    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function verificaCella(cella) {

    if (sconfitta === true) {
        alert("Hai perso! Non puoi continuare a giocare")
        return;
    }

    if (cella.classList.contains("bomba")) {
        cella.classList.add("bomba-active");
        alert("Hai perso!")
        sconfitta = true;
        mostraBombe();
    } else if (cella.classList.contains("active") === false) {
        cella.classList.add("active");
        punteggio++
    }
    aggiornadivPunteggio();
    verificaPunteggioVittoria();
}

function mostraBombe() {
    const allbombe = document.querySelectorAll(".bomba")
    console.log(allbombe)

    for (const bomba of allbombe) {
        bomba.classList.add("bomba-active");
    }
}

function verificaPunteggioVittoria() {
if(punteggio ===punteggiomax){
    vittoria= true;
    alert("Hai vinto!")
}
}

function aggiornadivPunteggio() {
    let divPunteggio = document.getElementById("punteggio");
    divPunteggio.innerHTML = punteggio;
    console.log("aggiornadivPunteggio")

}
