let aTrouve = 0;
let tentatives = 0;
let tentativesMax = 0;
let win = false;

function initialiserJustePrix() {
    let N;
    if ("oui" == prompt("Répondez 'oui' si vous voulez jouer :")) {
        do {
            N = prompt("Renseigner le nombre N : ");
            tentativesMax = prompt("Renseigner le nombre de tentatives max : ");
        } while ((!Number.isInteger(+N) || +!Number.isInteger(+tentativesMax)) || (N == "" || tentativesMax == ""));

        aTrouve = Math.floor(Math.random() * ((+N) + 1));
    }
}

function testerTentative(numTentative) {
    let indication = document.querySelector("#indication");
    if (win == false) {
        if (tentativesMax != 0) {
            if (tentatives < tentativesMax) {
                tentatives = evaluerTentative(numTentative, aTrouve, tentatives);
            }

            if (tentatives == tentativesMax) {
                indication.textContent = `Vous avez utilisé toutes vos ${tentativesMax} tentatives disponibles !!!`;
            }

        } else {
            indication.textContent = "Vous avez choisi de ne pas jouer";
        }
    }
    else{
        indication.textContent = "Vous avez déjà gagné ^^";
    }



    function evaluerTentative(numTente, aTrouve, tentatives) {
        if (numTente > aTrouve) {
            indication.textContent = "Moins";
            tentatives++;
        } else if (numTente < aTrouve) {
            indication.textContent = "Plus";
            tentatives++;
        } else {
            indication.textContent = `Gagné !!! En ${tentatives + 1} tentative(s)`;
            win = true;
        }
        return tentatives;
    }
}

initialiserJustePrix();
