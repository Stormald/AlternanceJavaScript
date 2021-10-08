let ajouterChiffre = (num) =>{
    let calcul = document.querySelector("#calcul");
    calcul.value+=num;
    //console.log(num);
}

let ajouterOperateur = (ope) =>{
    let calcul = document.querySelector("#calcul");
    calcul.value+=ope;
    //console.log(ope);
}

let calculer = (calcul) =>{
    let nombresArray = [];
    let resultat = document.querySelector("#resultat");

    //EVAL
    let calculReplaced = calcul.replace("x", "*");
    resultat.value = eval(calculReplaced);
    //EVAL
    
    /*if(calcul.includes("+")){
        nombresArray = calcul.split("+");
        resultat.value = +nombresArray[0] + +nombresArray[1];
    } else if(calcul.includes("-")){
        nombresArray = calcul.split("-");
        resultat.value = +nombresArray[0] - +nombresArray[1];
    } else if(calcul.includes("/")){
        nombresArray = calcul.split("/");
        resultat.value = +nombresArray[0] / +nombresArray[1];
    } else if(calcul.includes("x")){
        nombresArray = calcul.split("x");
        resultat.value = +nombresArray[0] * +nombresArray[1];
    }
    else{
        resultat.value ="Opérateur incorrect";
    }*/
}