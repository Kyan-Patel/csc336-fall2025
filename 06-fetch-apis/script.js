
async function getSWAPI_character(name){
    let SWAPI_response = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    let SWAPI_character = await SWAPI_response.json();
    console.log(SWAPI_character);
}

async function getSWAPI_id(id){
    let SWAPI_response = await fetch(`https://swapi.dev/api/people/${id}/`);
    let SWAPI_character = await SWAPI_response.json();
    console.log(SWAPI_character);
}

const currentCharacterId = 
// https://akabab.github.io/starwars-api/api/all.json 