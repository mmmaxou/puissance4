

// /!\ Ce document s'adapte a la page HTML, si vous ajoutez des cases dans le jeu
// /!\ cela sera pris en compte automatiquement :) !! 

//La balise HTML table
var table = document.getElementById("tab");
//Les balises img de la table
var tableImg = table.getElementsByTagName("img");

// Le nombre de ligne de la table 
var nbX = table.getElementsByTagName("tr").length;
// Le nombre de colonne de la table
var nbY = table.getElementsByTagName("tr")[0].getElementsByTagName("img").length;

//abscisse de l'image qui vient d'être cliquée, mis a jour par calculatePosition(). 
var x;// /!\ de 0 a nbX-1
//ordonnée de l'image qui vient d'être cliquée, mis a jour par calculatePosition().
var y;// /!\ de 0 a nbY-1

//Affiche des informations 
alert("Nb images : " + tableImg.length + " - Nb X : " + nbX + " - Nb Y : " + nbY);

// /!\ Calcul et met dans les variables globales x et y la position en absisse/ordonné suivant le numéro de l'image
function calculatePosition(num){
    x=0;
    y=0;
    while(num >= nbY){
        y++;
        num-= nbY;
    }
    x = num;
}

function clickCase(event){
    // /!\ Ont veux savoir sur quelle image on a cliquée parmis tous les images de tableImg
    var num = 0;
    for(; num<tableImg.length;num++){
        if(event.currentTarget == tableImg[num])
            break;
    }
    //Nous calculons les coordonnées en X et Y de l'image cliquée suivant ce numéro d'image.
    calculatePosition(num);
    //Les voila dans les variables globales x et y
    alert("Image N°" + num +" : " + x + " - " + y);
}

// Permet de lier les balises img du doc HTML a la fonction clickCase
// /!\ Quand ont clique sur une image, la fonction clickCase est éxécutée 
for(var num = 0; num<tableImg.length;num++){
    tableImg[num].onclick=clickCase;
}
