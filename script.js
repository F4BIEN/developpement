const body = document.querySelector("body");

window.addEventListener("scroll", () => {

    if(window.scrollY > 230){
        body.classList.add("anim_body");
    }else{
        body.classList.remove("anim_body");
    }
});


const header = document.getElementById("HAAA");

window.addEventListener("scroll", () => {

    if(window.scrollY > 230){
        header.classList.add("anim_header");
    }else{
        header.classList.remove("anim_header");
    }

});

/*
class Film {
    constructor(title, type, poster, synopsis) {
        this.title = title;
        this.type = type;
        this.poster = poster
        this.synopsis = synopsis;
    }
}


let aCouteauxTires = new Film("À COUTEAUX TIRÉS", 
"Policier, Comédie / 2019 <a id='prime' href='https://www.primevideo.com/detail/0J82JH44RB2563KFICAXJFGPGO/ref=atv_sr_fle_c_Tn74RA_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0851LCB31&qid=1664013535927' target='_blank'>Prime Vidéo</a> (non inclus)</p>",
"<img src='images/À_couteaux_tirés/À_couteaux_tirés.jpeg' alt='À couteaux tirés'>",
"Célèbre auteur de polars, Harlan Thrombey est retrouvé mort dans sa somptueuse propriété, le soir de ses 85 ans. L’esprit affûté et la mine débonnaire,le détective Benoit Blanc est alors engagé par un commanditaire anonyme afin d’élucider l’affaire. Mais entre la famille d’Harlan qui s'entre-déchire et son personnel qui lui reste dévoué, Blanc plonge dans les méandres d’une enquête mouvementée, mêlant mensonges et fausses pistes, où les rebondissements s'enchaînent à un rythme effréné jusqu'à la toute dernière minute.");

let aCouteauxTitre = document.querySelector("span h1");
aCouteauxTitre.innerHTML = aCouteauxTires.title;
let aCouteauxType = document.querySelector("span p");
aCouteauxType.innerHTML = aCouteauxTires.type;
let aCouteauxPoster = document.querySelector("figure");
aCouteauxPoster.innerHTML = aCouteauxTires.poster;
let aCouteauxSynopsis = document.querySelector("article p");
aCouteauxSynopsis.innerHTML = aCouteauxTires.synopsis;
*/




//const reponse = await fetch("films.json");
//const films = await reponse.json();

async function populate() {

    const requestURL = 'https://raw.githubusercontent.com/F4BIEN/developpement/main/films.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superHeroes = await response.json();

    generateFilms(superHeroes);

  }

function generateFilms(films) {
    //for (let i = 0; i < films.length; i++) {
        // Récupération de l'élément du DOM qui accueillera les cartes
        const sectionCarte = document.getElementById("cartes");
        // Création d’une balise dédiée à un film
        const filmElement = document.createElement("section");

        const aCouteaux = films[0];
        // On crée l’élément img.
        const posterElement = document.createElement("figure");
        // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
        posterElement.innerHTML = aCouteaux.poster;
        // On rattache l’image à pieceElement (la balise article)
        filmElement.appendChild(posterElement);

        // Idem pour le nom, le prix et la catégorie ...

        const titleElement = document.createElement("h1");
        titleElement.textContent = aCouteaux.title;
        filmElement.appendChild(titleElement);


        const typeElement = document.createElement("span");
        typeElement.innerHTML = aCouteaux.type;
        filmElement.appendChild(typeElement);

        const synopsisElement = document.createElement("article p");
        synopsisElement.innerHTML = aCouteaux.synopsis;
        filmElement.appendChild(synopsisElement);

        // On rattache la balise article à la section fiches
        sectionCarte.appendChild(filmElement);
    }
//}

populate();