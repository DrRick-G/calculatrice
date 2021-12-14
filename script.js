 
//Addition

function addition(Nbre1,Nbre2) {
    return Nbre1+Nbre2;
}

//Soustraction
function soustraction(Nbre1,Nbre2) {
    return Nbre1-Nbre2;
}
//multiplication
function multiplication(Nbre1,Nbre2) {
    return Nbre1*Nbre2;
}
//Division
function division(Nbre1,Nbre2){
    if (Nbre2 == 0){
        throw new Error("Opération impossible!")
    }
    return Nbre1/Nbre2;
}

do {
    var choix = prompt("Que souhaitez-vous faire? \n\n 1 - Addition \n 2 - Soustraction \n 3 - Multiplication \n 4 - Division");
} while (choix!=1 && choix!=2 && choix!=3 && choix!=4);
do {
    var nbmre1 = Number(prompt("Donner le premier nombre: "));  
    var nbmre2 = Number(prompt("Donner le deuxième nombre: "));  
} while (isNaN(nbmre1) || isNaN(nbmre2));  


try {
    switch(choix){
        case 1:
            var resultat = addition(nbmre1,nbmre2);
            break;
        case 2:
            var resultat = soustraction(nbmre1,nbmre2);
        case 3:
            var resultat = multiplication(nbmre1,nbmre2);
            break;
        case 4:
            var resultat = division(nbmre1,nbmre2);
            break;
        default:
            throw new Error("Erreur");
    }    
    alert("Resultat: " + resultat);
} 
catch (error){
    alert(error);
}

