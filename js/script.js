let pokeType = 'Tous';
let affichage;
let dataPokemon;

function typePokemon(type){
    console.log(type);
    pokeType=type;
}

//Background du main en bleu clair
let container = document.querySelector("main");
container.style.backgroundColor = "lightblue";

//Génération du select avec les 8 générations de pokémons
let generationSelect = document.createElement("Select");
generationSelect.setAttribute("id","generationSelect");
for (let i = 1; i <= 8; i++) {
    generationSelect.innerHTML += `<option value="${i}">Génération ${i}</option>`
}

//Ajout du select avant la balise main
container.insertAdjacentElement("beforebegin",generationSelect);

//Récupértion des différents types de pokémon
const dataTypes = await fetch("https://pokebuildapi.fr/api/v1/types")
.then(response => response.json())
.catch(error => alert("Ereur : "+ error));

//Ajout du menu type de pokémon
let choixType = document.createElement("menu");
for (const type of dataTypes) {
    choixType.innerHTML += `<li id="type${type.name}" ><img src="${type.image}" /><h3>${type.name}</h3></li>`
;}

 //insertion du menu
container.insertAdjacentElement("beforebegin",choixType);

let tab = new Array(20);
for (let i=0;i<18;i++) {
    tab[i] =  document.querySelector(`#type${dataTypes[i].name}`);
    tab[i].addEventListener("click",()=>{
       let newdata = dataPokemon.filter(pokemon => pokemon.apiTypes[0].name == dataTypes[i].name)
       console.log(dataTypes[i].name)
        console.log(newdata)
        refreshPage(newdata)
    });
}




//Génération évènmement au changement de valeur du select génération
generationSelect.addEventListener("change",async ()=>{
console.log(generationSelect.options[generationSelect.selectedIndex].value);
loadData(generationSelect.options[generationSelect.selectedIndex].value)});

//Génération évènement de tri
let selectTri = document.querySelector("#tri")
selectTri.addEventListener("change",()=>{
    console.log(selectTri.options[selectTri.selectedIndex].value)
    let newdata = dataPokemon.sort((a,b)=>{
        let typeA = a.selectTri.options[selectTri.selectedIndex].value;
        let typeB = b.selectTri.options[selectTri.selectedIndex].value;
        return typeA.localCompare(typeB);
    })
        console.log(newdata)
        refreshPage(newdata)
})
   

async function loadData(numGeneration){
    container.innerHTML = "";
    const data = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${numGeneration}`)
    .then(response => response.json())
    .catch(error => alert("Erreur : "+ error));


    dataPokemon=data
    console.log(dataPokemon)


    for (const pokemon of data) {

            let pokemonarticle = document.createElement("article");
            pokemonarticle.innerHTML = `<figure>
                <picture>
                    <img src="${pokemon.image}" alt="Image Bulbizarre" />
                </picture>
                <figcaption>
                    <span class="types">${pokemon.apiTypes[0].name}</span>
                    <h2>${pokemon.name}</h2>
                    <ol>
                    <li>Points de vie : ${pokemon.stats.HP}</li>
                    <li>Attaque : ${pokemon.stats.attack}</li>
                    <li>Défense : ${pokemon.stats.defense}</li>
                    <li>Attaque spécial : ${pokemon.stats.special_attack}</li>
                    <li>Vitesse : ${pokemon.stats.speed}</li>
                    </ol>
                </figcaption>
                </figure>`;
                var pokemonType = pokemon.apiTypes[0].name;
    // Sélectionnez la couleur en fonction du type du Pokémon
    var backgroundColor;
    var borderColor;

    switch (pokemonType) {
        case "Plante":
            backgroundColor = "green";
            borderColor = "green";
            break;
        case "Feu":
            backgroundColor = "orange";
            borderColor = "orange";
            break;
        case "Eau":
            backgroundColor = "blue";
            borderColor = "blue";
            break;
        case "Électrik":
            backgroundColor = "yellow";
            borderColor = "yellow";
            break;
        case "Insecte":
            backgroundColor = "brown";
            borderColor = "brown";
            break;
        case "Poison":
            backgroundColor = "purple";
            borderColor = "purple";
            break;
        case "Sol":
            backgroundColor = "sienna";
            borderColor = "sienna";
            break;
        case "Roche":
            backgroundColor = "gray";
            borderColor = "gray";
            break;
        case "Combat":
            backgroundColor = "red";
            borderColor = "red";
            break;
        case "Spectre":
            backgroundColor = "indigo";
            borderColor = "indigo";
            break;
        case "Vol":
            backgroundColor = "skyblue";
            borderColor = "skyblue";
            break;
        case "Psy":
            backgroundColor = "pink";
            borderColor = "pink";
            break;
        case "Glace":
            backgroundColor = "lightblue";
            borderColor = "lightblue";
            break;
        case "Dragon":
            backgroundColor = "darkblue";
            borderColor = "darkblue";
            break;
        case "Ténèbres":
            backgroundColor = "black";
            borderColor = "black";
            break;
        case "Acier":
            backgroundColor = "silver";
            borderColor = "silver";
            break;
        case "Fée":
            backgroundColor = "fuchsia";
            borderColor = "fuchsia";
            break;
        default:
            backgroundColor = "gray"; // Couleur par défaut
            borderColor = "gray";     // Couleur par défaut
    }

// Appliquez les couleurs au Pokémon
pokemonarticle.style.backgroundColor = backgroundColor;
pokemonarticle.style.borderColor = borderColor;
            container.insertAdjacentElement("beforeend",pokemonarticle);
    }
    return data;
}

function refreshPage(data){
    container.innerHTML = "";


    for (const pokemon of data) {

            let pokemonarticle = document.createElement("article");
            pokemonarticle.innerHTML = `<figure>
                <picture>
                    <img src="${pokemon.image}" alt="Image Bulbizarre" />
                </picture>
                <figcaption>
                    <span class="types">${pokemon.apiTypes[0].name}</span>
                    <h2>${pokemon.name}</h2>
                    <ol>
                    <li>Points de vie : ${pokemon.stats.HP}</li>
                    <li>Attaque : ${pokemon.stats.attack}</li>
                    <li>Défense : ${pokemon.stats.defense}</li>
                    <li>Attaque spécial : ${pokemon.stats.special_attack}</li>
                    <li>Vitesse : ${pokemon.stats.speed}</li>
                    </ol>
                </figcaption>
                </figure>`;
                var pokemonType = pokemon.apiTypes[0].name;
                // Sélectionnez la couleur en fonction du type du Pokémon
                var backgroundColor;
                var borderColor;
            
                switch (pokemonType) {
                    case "Plante":
                        backgroundColor = "green";
                        borderColor = "green";
                        break;
                    case "Feu":
                        backgroundColor = "orange";
                        borderColor = "orange";
                        break;
                    case "Eau":
                        backgroundColor = "blue";
                        borderColor = "blue";
                        break;
                    case "Électrik":
                        backgroundColor = "yellow";
                        borderColor = "yellow";
                        break;
                    case "Insecte":
                        backgroundColor = "brown";
                        borderColor = "brown";
                        break;
                    case "Poison":
                        backgroundColor = "purple";
                        borderColor = "purple";
                        break;
                    case "Sol":
                        backgroundColor = "sienna";
                        borderColor = "sienna";
                        break;
                    case "Roche":
                        backgroundColor = "gray";
                        borderColor = "gray";
                        break;
                    case "Combat":
                        backgroundColor = "red";
                        borderColor = "red";
                        break;
                    case "Spectre":
                        backgroundColor = "indigo";
                        borderColor = "indigo";
                        break;
                    case "Vol":
                        backgroundColor = "skyblue";
                        borderColor = "skyblue";
                        break;
                    case "Psy":
                        backgroundColor = "pink";
                        borderColor = "pink";
                        break;
                    case "Glace":
                        backgroundColor = "lightblue";
                        borderColor = "lightblue";
                        break;
                    case "Dragon":
                        backgroundColor = "darkblue";
                        borderColor = "darkblue";
                        break;
                    case "Ténèbres":
                        backgroundColor = "black";
                        borderColor = "black";
                        break;
                    case "Acier":
                        backgroundColor = "silver";
                        borderColor = "silver";
                        break;
                    case "Fée":
                        backgroundColor = "fuchsia";
                        borderColor = "fuchsia";
                        break;
                    default:
                        backgroundColor = "gray"; // Couleur par défaut
                        borderColor = "gray";     // Couleur par défaut
                }
// Appliquez les couleurs au Pokémon
pokemonarticle.style.backgroundColor = backgroundColor;
pokemonarticle.style.borderColor = borderColor;

            container.insertAdjacentElement("beforeend",pokemonarticle);
    }
    return data;
}
