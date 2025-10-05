
let currentID;

async function getSWAPI_character(name){
    let SWAPI_response = await fetch(`https://swapi.dev/api/people/?search=${document.getElementById('sw-name').value.trim()}`);
    let SWAPI_character = await SWAPI_response.json();
    currentID = SWAPI_response.results[0].url.split('/')[5];
    console.log(SWAPI_character);
}

async function getSWAPI_id(id){
    let SWAPI_response = await fetch(`https://swapi.dev/api/people/${id}/`);
    let SWAPI_character = await SWAPI_response.json();
    console.log(SWAPI_character);
}


// https://akabab.github.io/starwars-api/api/all.json 