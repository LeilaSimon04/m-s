let options = {
    method: "GET"
}

fetch("./baskets.json", options)
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data)
        rempliMesArticles(data)
    })
let zone = document.getElementById("zone")
function rempliMesArticles(articles) {
    articles.forEach(donnee => {
        zone.innerHTML += ` <article class="cardBaskets width20">
        <div>
        <img src="./images/imagesProduits/${donnee.photo}" alt="${donnee.nom}" class="responsive">
        </div>
        <div class="infoModele flex justifyBetween">
            <h6>${donnee.nom}</h6>
            <p class="prix">${donnee.prix}</p>
        </div>
    <p>${donnee.description}</p
    </article>`
    })
}