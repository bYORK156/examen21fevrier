// Déclaration de la liste des taches 

let listeDeTaches = [];


// fonction ajouter une tache à la liste
function ajouterTache(tache) {
    if (tache.trim() !== "") { // Empêche l'ajout de tâches vides
        listeDeTaches.push(tache);
        afficherTaches();
        document.getElementById("nouvelleTache").value = ""; // Efface le champ actuel
    }
}

// fonction pour afficher les tâches dans la liste
function afficherTaches() {
    const listeTachesElement = document.getElementById("liste des Taches");
    listeTachesElement.innerHTML = "";
    
    for (let i = 0; i < listeDeTaches.length; i++) {
        const tache = listeDeTaches[i];
        const li = document.createElement("li");
        li.textContent = tache;

        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer tâches";
        boutonSupprimer.addEventListener("click", () => supprimerTache(i));

        li.appendChild(boutonSupprimer);
        listeTachesElement.appendChild(li);
    }
}

// fonction pour supprimer une tache
function supprimerTache(index) {
    listeDeTaches.splice(index, 1);
    afficherTaches(); //affiche inital de la tache
}

// function Afficher taches // Écouteur d'événement pour le bouton "Ajouter"
const boutonAjouter = document.getElementById("ajouter");
boutonAjouter.addEventListener("click", () => {
    const nouvelleTache = document.getElementById("nouvelleTache").value; // effacer le champs de saisie
    ajouterTache(nouvelleTache); 
}
);

// Affichage initial des tâches (si le tableau n'est pas vide au chargement de la page)
afficherTaches(); 