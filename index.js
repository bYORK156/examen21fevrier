// déclaration liste des taches

let listeDeTaches = [];


// fonction ajouterTache à la liste
function ajouterTache(tache) {
    if (tache.trim() !== "") { // Empêche l'ajout de tâches vides
        listeDeTaches.push(tache);
        afficherTaches();
        document.getElementById("nouvelleTache").value = ""; // Efface le champ actuel
    }
}
// fonction ajouterTache à la liste HTML
function afficherTaches() {
    const listeTachesElement = document.getElementById("listeTaches");
    listeTachesElement.innerHTML = "";
    console.log('affichage des taches');

    for (let i = 0; i < listeDeTaches.length; i++) {
        const tache = listeDeTaches[i];
        const li = document.createElement("li");
        li.textContent = tache;

        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.textContent = "Supprimer";
        boutonSupprimer.addEventListener("click", () => supprimerTache(i));

        li.appendChild(boutonSupprimer);
        listeTachesElement.appendChild(li);
    }
}

// fonction pour supprimer une Tache
function supprimerTache(index) {
    listeDeTaches.splice(index, 1);
    afficherTaches();
}

// function Afficher taches // Écouteur d'événement pour le bouton "Ajouter"
const boutonAjouter = document.getElementById("ajouter");
boutonAjouter.addEventListener("click", () => {
    const nouvelleTache = document.getElementById("nouvelleTache").value;
    ajouterTache(nouvelleTache);
}
);

afficherTaches(); // Affichage initial