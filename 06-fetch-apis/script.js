
let currentID;
let SWAPI_character;

async function getSWAPI_character() {
    const name = document.getElementById('sw-name').value;
    const response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    const data = await response.json();

    SWAPI_character = data;
    currentID = data.results[0].url.split('/')[5];
}

function displayCharacter() {
  const resultDiv = document.getElementById('sw-character');

    resultDiv.textContent = "";

    const nameP = document.createElement("p");
    nameP.textContent = `Name: ${SWAPI_character.results[0].name}`;
    resultDiv.appendChild(nameP);

    const idP = document.createElement("p");
    idP.textContent = `ID: ${currentID}`;
    resultDiv.appendChild(idP);
}
// https://akabab.github.io/starwars-api/api/all.json 