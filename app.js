// Pour le Menu Burger
// Fonction pour afficher la barre de navigation en cliquant sur le bouton burger

let burger = document.getElementById("burger");
let navBarBurger = document.getElementById("navBarBurger");
burger.addEventListener("change", () => {
    if (burger.checked) {
        navBarBurger.classList.remove("d-none");
    } else {
        navBarBurger.classList.add("d-none");
    }
});

// Pour le formulaire de la prise de contact 
let nom = document.getElementById("nom")
nom.addEventListener("change", () => {
    testNom()
})

let prenom = document.getElementById("prenom")
prenom.addEventListener("change", () => {
    testPrenom()
})

let email = document.getElementById("email")
email.addEventListener("change", () => {
    testEmail()
})

let objet = document.getElementById("objet")
objet.addEventListener("change", testObjet)

let message = document.getElementById("message")
message.addEventListener("change", testMessage)

// Compteur de caractères du message
let long = document.getElementById("long")
message.addEventListener("input", () => {
    long.innerText = message.value.length + "/500"
})

/**Fonctions qui testent les champs un par un */

function testNom() {
    // est ce que l'utilisateur a bien rempli ce champ : Nom
    // on teste si le champ est vide
    if (nom.value == "") {
        // on affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficheErreur("nom", "Ce champ ne peut pas être vide")
        return false
    } else {
        // on teste si l'utilisateur a bien utlisé 
        // des caracteres alphabétiques 
        // on affiche le message d'erreur
        // on met la bordure rouge sur l'input
        //let reg = /^[\p{L}\s-]+$/
        let reg = /^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
        //  let reg = /^[\p{L}\p{M}\'\-]+$/
        if (reg.test(nom.value) === false) {
            // il y a des chiffres
            afficheErreur("nom", "Ce champ comporte des caractère non autorisés")
            return false
        } else if (hasCode(nom.value)) {
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficheErreur("nom", "Vous ne pouvez pas injecter de code ici!")
            return false
        } else if (nom.value.length >= 40) {
            afficheErreur("nom", "Vous avez tapé un nom trop long.")
        }
    }
    enleveErreur("nom")
    return true
}
function testPrenom() {
    // est ce que l'utilisateur a bien rempli ce champ : Prénom
    // on teste si le champ est vide
    if (prenom.value == "") {
        // on affiche le message d'erreur
        // on met la bordure rouge sur l'input
        afficheErreur("prenom", "Ce champ ne peut pas être vide")
        return false
    } else {
        // on teste si l'utilisateur a bien utlisé 
        // des caracteres alphabétiques 
        // on affiche le message d'erreur
        // on met la bordure rouge sur l'input
        //let reg = /^[\p{L}\s-]+$/
        let reg = /^[a-zA-ZÀ-ÿ'-]+(?:\s[a-zA-ZÀ-ÿ'-]+)*$/
        //  let reg = /^[\p{L}\p{M}\'\-]+$/
        if (reg.test(prenom.value) === false) {
            // il y a des chiffres
            afficheErreur("prenom", "Ce champ comporte des caractère non autorisés")
            return false
        } else if (hasCode(prenom.value)) {
            //est ce que notre utilisateur n'est pas entrain d'injecter du code
            afficheErreur("prenom", "Vous ne pouvez pas injecter de code ici!")
            return false
        } else if (prenom.value.length >= 40) {
            afficheErreur("prenom", "Vous avez tapé un nom trop long.")
        }
    }
    enleveErreur("nom")
    return true
}
function testEmail() {
    //Est-ce que l'utilisateur a bien remplit ce champ 
    //On test si le champ est vide
    if (email.value == "") {
        //affiche un message d'erreur
        //on met la bordure rouge sur l'input
        afficheErreur("email", "Ce champ ne peut pas être vide")
        return false
    } else {
        //On teste si l'utisateur a bien utilisé :
        //des caractères numériques 
        //Si ce n'est pas le cas :
        //on affiche un message d'erreur
        //on met la bordure rouge sur l'input
        //la variable est ici une expression rationnelle (régulière) pour dire que dans ce input on peut y écrire seulement des nombres
        //let reg =/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (reg.test(email.value) === false) {
            afficheErreur("email", "Une adresse email doit être sous ce format : example@example.exemple")
            return false
        } else if (hasCode(email.value)) {
            //Est-ce que notre utilisateur n'est pas entrain d'injecter du code
            afficheErreur("email", "Vous ne pouvez pas injecter du code ici")
            return false
        } else if (email.value.length >= 100) {
            afficheErreur("email", "Vous avez écrit un email trop long")
            return false
        }
    }
    enleveErreur("email")
    //S'il n'y a eu aucune erreur de noté ci-dessus dans ce cas là tout va bien
    return true
}
function testObjet() {
    if (objet.value === "") {
        afficheErreur("objet", "Merci de choisir un objet")
        return false
    } else {
        enleveErreur("objet")
        return true
    }
}

function testRefProduit() {
    // On teste si le champ est vide
    // si la référence a le bon format
    // si le champ ne comporte pas de code
   if (refProduit.value == "") {
        afficheErreur("refProduit", "Vous devez noter la référence du produit")
        return false
    } else  {
        let reg = /^[A-Za-z]{3}-\d{6}$/
        if (reg.test(refProduit.value) === false)  {
        afficheErreur("refProduit", "La référence du produit doit être sous cette forme : xxx-123456 (3 lettres -6 chiffres)")
        return false
        } else if (hasCode(refProduit.value)) {
        afficheErreur("refProduit", "Vous ne pouvez pas écrire de script ici")
        return false
    }}
    enleveErreur("refProduit")
    return true
}

function testMessage() {
    // On teste si le champ est vide
    // si le champ ne comporte pas de code
    // si le message n'est pas plus long que 500 caractères
    if (message.value == "") {
        afficheErreur("message", "Votre message est vide")
        return false
    } else if (hasCode(message.value)) {
        afficheErreur("message", "Vous ne pouvez pas écrire de script ici")
        return false
    } else if (message.value.length > 500) {
        afficheErreur("message", "Votre message est trop long")
        return false
    }
    enleveErreur("message")
    return true
}

function hasCode(text) {
    // cette fonction cherche dans une chaine s'il y a une balise script
    // retour true : y'a du code
    // false :y'a pas de code
    let reg = /<script/
    return reg.test(text)

}

// Fonctions d'affichage
function afficheErreur(id, messageErreur) {
    // Rôle : Afficher une erreur : mettre une bordure sur le bon input et remplir le paragraphe d'erreur associé
    // Paramètre : id l'id de l'input dans lequel il y a une erreur
    // messageErreur : le message à afficher
    // retour: rien !
    let input = document.getElementById(id)
    input.classList.add("input-error")
    let p = document.getElementById("error-" + id)
    p.innerText = messageErreur
    p.classList.remove("d-none")

}
function enleveErreur(id) {
    // Role: eneleve l'erreur sur l'input et cache le paragraphe associé
    let input = document.getElementById(id)
    input.classList.remove("input-error")
    let p = document.getElementById("error-" + id)
    p.innerText = ""
    p.classList.add("d-none")
}

// Fonction pour que si l'on sélectionne un des 2 objets nécessitant une refProduit on affiche la div la demandant
document.getElementById("objet").addEventListener("change", afficheRefProduit)
function afficheRefProduit(){
    let objet =document.getElementById("objet")
    let divRefProduit = document.querySelector(".divRefProduit")
    
    if (objet.value === "infoProduit" || objet.value === "problemeProduit") {
        divRefProduit.classList.remove("d-none")
    } else {
        divRefProduit.classList.add("d-none")
    }
}

// A la soumission du formulaire 
// on relance notre batterie de tests
// (on apelle de nouveau nos fonctions de test)
// si toutes les fonctions retournent true
// j'envoie le formulaire

let monform = document.getElementById('monform')
monform.addEventListener("submit", (e) => {
    e.preventDefault()
    let test1 = testNom()
    let test2 = testPrenom()
    let test3 = testEmail()
    let test4 = testObjet()
    let test5 = testRefProduit()
    let test6 = testMessage()

    if (test1 === true && test2 === true && test3 === true && test4 === true && test5 === true && test6 === true) {
        monform.submit()
    }
})

