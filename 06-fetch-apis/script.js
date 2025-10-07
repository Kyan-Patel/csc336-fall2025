let currentID;
let SWAPI_character;

// serach and fetchg character data from SWAPI
async function getSWAPI_character() {
  let name = document.getElementById('sw-name').value;
  let response = await fetch('https://swapi.dev/api/people/?search=' + name);
  let data = await response.json();

  if (data.results.length === 0) {
    document.getElementById('sw-character').textContent = 'No character found.';
    return;
  }

  SWAPI_character = data;
  currentID = data.results[0].url.split('/')[5];
  await displayCharacter();
}

// show info about the character
async function displayCharacter() {
  let resultDiv = document.getElementById('sw-character');
  resultDiv.textContent = '';

  let character = SWAPI_character.results[0];

  // basic info 
  let infoBox = document.createElement('div');
  infoBox.className = 'info-box';

  let nameP = document.createElement('p');
  nameP.textContent = 'Name: ' + character.name;
  infoBox.appendChild(nameP);

  // homeworld
  let homeRes = await fetch(character.homeworld);
  let homeData = await homeRes.json();
  let homeP = document.createElement('p');
  homeP.textContent = 'Homeworld: ' + homeData.name;
  infoBox.appendChild(homeP);

  // species
  let speciesP = document.createElement('p');
  if (character.species.length > 0) {
    let response = await fetch(character.species[0]);
    let data = await response.json();
    speciesP.textContent = 'Species: ' + data.name;
  } else {
    speciesP.textContent = 'Species: Human';
  }
  infoBox.appendChild(speciesP);
  resultDiv.appendChild(infoBox);

  // image box (Akabab API)
  let allResponse = await fetch('https://akabab.github.io/starwars-api/api/all.json');
  let allChars = await allResponse.json();
  let found = allChars.find(function (c) { return c.id == currentID; });

  if (found) {
    let imgBox = document.createElement('div');
    imgBox.className = 'info-box';
    let img = document.createElement('img');
    img.src = found.image;
    img.alt = character.name;
    img.style.width = '200px';
    img.style.borderRadius = '8px';
    imgBox.appendChild(img);
    resultDiv.appendChild(imgBox);
  }

  // movies box
  let filmBox = document.createElement('div');
  filmBox.className = 'info-box';
  let filmHeader = document.createElement('h3');
  filmHeader.textContent = 'Movies';
  filmBox.appendChild(filmHeader);

  let filmList = document.createElement('ul');
  for (let i = 0; i < character.films.length; i++) {
    let filmRes = await fetch(character.films[i]);
    let filmData = await filmRes.json();
    let li = document.createElement('li');
    li.textContent = filmData.title;
    filmList.appendChild(li);
  }
  filmBox.appendChild(filmList);
  resultDiv.appendChild(filmBox);

  // vehicles and starships box
  let groupBox = document.createElement('div');
  groupBox.className = 'info-box';
  let groupHead = document.createElement('h3');
  groupHead.textContent = 'Vehicles & Starships';
  groupBox.appendChild(groupHead);

  // starships
  if (character.starships.length > 0) {
    for (let s = 0; s < character.starships.length; s++) {
      let shipRes = await fetch(character.starships[s]);
      let shipData = await shipRes.json();
      let p = document.createElement('p');
      p.textContent = 'Starship: ' + shipData.name;
      groupBox.appendChild(p);
    }
  } else {
    let p = document.createElement('p');
    p.textContent = 'Starship: None';
    groupBox.appendChild(p);
  }

  // vehicles
  if (character.vehicles.length > 0) {
    for (let v = 0; v < character.vehicles.length; v++) {
      let vehicleRes = await fetch(character.vehicles[v]);
      let vehicleData = await vehicleRes.json();
      let p2 = document.createElement('p');
      p2.textContent = 'Vehicle: ' + vehicleData.name;
      groupBox.appendChild(p2);
    }
  } else {
    let p2 = document.createElement('p');
    p2.textContent = 'Vehicle: None';
    groupBox.appendChild(p2);
  }

  resultDiv.appendChild(groupBox);
}
