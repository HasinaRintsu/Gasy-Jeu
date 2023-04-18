let joueurCourant= "noir"// Le joueur noir commence
let cases= document.querySelectorAll("button");

function selectionnerCase(x,y){
    let caseSelectionnee=document.getElementById('cell_${x}_${y}');

    //Vérifier si la case séléctionnée est valide pour le joueur courant
    if (caseSelectionnee.classList.contains(joueurCourant)){
        //ajouter la classe "selectinne" à la case séléctionné 
        caseSelectionnee.classList.add("selectionne");
    }

    //si le joueur a déjà sélectionné une case et sélectionne une autre case valide 
    else if (document.querySelector(".selectionne") && caseSelectionnee.classList.length==0){
        let caseDepart=document.querySelector(".selectionnee");

        //Vérifier si le mouvement est valide pour le joueur courant 
        if (estMouvementValide(caseDepart,caseSelectionnee)){
            //Deplacer la pièce 
            deplacerPiece(caseDepart,caseSelectionnee);

            //vérifier si le joueur courant a gagner 
            if (aGagne(joueurCourant)){
                alert('${joueurCourant} a gagné!');
            }

            //Changer le joueur courant
            else {
                joueurCourant=joueurCourant==="noir" ? "blanc" : "noir";
                joueurOrdinateur();
            }
        }

        //Si le mouvement n'est pas valide enlever la classe "selectionnee" de la case départ
    }
}
  
