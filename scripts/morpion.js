let grille = [[3, 3, 3], [3, 3, 3], [3, 3, 3]];
let joueur = 1;
let win = false;

function jouerUneCase(idXY) {
    if (win != true) {

        let laCase = document.querySelector("#" + idXY).children[0];
        let players = document.querySelectorAll(".joueur");
        //console.log(laCase)
        let splitId = idXY.split("-");
        let x = splitId[1];
        let y = splitId[2];

        joueur = TesterEmplacementDejaOccupe(grille, joueur, x, y, laCase, players);

        win = Gagner(grille);

        if (win == true){
            joueur = joueur == 1 ? 2 : 1;
            if(joueur == 1){
                players[0].removeAttribute('id');
                players[0].setAttribute('id', 'winner');
                players[1].setAttribute('id', 'loser');
            }
            else{
                players[1].removeAttribute('id');
                players[1].setAttribute('id', 'winner');
                players[0].setAttribute('id', 'loser');
            }
            alert("Le joueur " + joueur + " a gagné !!!");
        }
            

    } else{
        alert("Le jeu a déjà été gagné !!!");
    }
    //FUNCTIONS
    function TesterEmplacementDejaOccupe(grille, joueur, x, y, laCase, players) {
        if (grille[x][y] == 3 && joueur == 1) {
            grille[x][y] = joueur;
            joueur = joueur == 1 ? 2 : 1;
            laCase.innerHTML = "X";
            players[0].removeAttribute('id');
            players[1].setAttribute('id', 'currentJoueur');
        }
        else if (grille[x][y] == 3 && joueur == 2) {
            grille[x][y] = joueur;
            joueur = joueur == 1 ? 2 : 1;
            laCase.innerHTML = "O";
            players[1].removeAttribute('id');
            players[0].setAttribute('id', 'currentJoueur');
        }
        else {
            alert("Vous avez selectionné un emplacement déjà pris");
        }

        return joueur;
    }

    function Gagner(grille) {
        let winGagner = false;

        //console.log(grille);
        //HORIZONTAL
        if (grille[0][0] != 3 && (grille[0][0] == grille[1][0]) && (grille[0][0] == grille[2][0])) {
            //console.log("Yo");
            winGagner = true;
        }
        else if (grille[0][1] != 3 && (grille[0][1] == grille[1][1]) && (grille[0][1] == grille[2][1])) {
            //console.log("Po");
            winGagner = true;
        }
        else if (grille[0][2] != 3 && (grille[0][2] == grille[1][2]) && (grille[0][2] == grille[2][2])) {
            //console.log("To");
            winGagner = true;
        }//HORIZONTAL //VERTICALE
        else if (grille[0][0] != 3 && (grille[0][0] == grille[0][1]) && (grille[0][0] == grille[0][2])) {
            //console.log("Ro");
            winGagner = true;
        }
        else if (grille[1][0] != 3 && (grille[1][0] == grille[1][1]) && (grille[1][0] == grille[1][2])) {
            //console.log("Mo");
            winGagner = true;
        }
        else if (grille[2][0] != 3 && (grille[2][0] == grille[2][1]) && (grille[2][0] == grille[2][2])) {
            //console.log("Lo");
            winGagner = true;
        }//VERTICALE //DIAGONALE
        else if (grille[0][0] != 3 && (grille[0][0] == grille[1][1]) && (grille[0][0] == grille[2][2])) {
            //console.log("Jo");
            winGagner = true;
        }
        else if (grille[2][0] != 3 && (grille[2][0] == grille[1][1]) && (grille[2][0] == grille[0][2])) {
            //console.log("Zo");
            winGagner = true;
        }//DIAGONALE

        return winGagner;
    }
    //FUNCTIONS
}
