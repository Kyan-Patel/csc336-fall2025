const plantBTN = document.getElementById("plant-button")
const weatherBTN = document.getElementById("weather-button")
plantBTN.addEventListener('click', plantFlower);
weatherBTN.addEventListener('click', changeWeather)


function plantFlower(){
    const flowers = 
    [
    '🌸','🌻','🌼','🌹','💮','🌺','🥀','🌷','🪷','🪻',
    '🍀','🍃','🍂','🍁','🌿','🪴','🌱','🌵','🎍','🎋',
    '☘️','🌾','🪹','🪵','🌳','🌲','🌴','🪨','🏵️','🌰',
     '🪻','🌼','🌺','💐','🪷','🌹','🥀','🌸','🌻','🌷',
    '🌱','🪴','🍀','☘️','🍃','🌿','🎍','🎋','🌾','🌵'
    ];

    const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
    const flower = document.createElement('span');
    flower.textContent = randomFlower;
    flower.style.position = 'absolute';
    flower.style.left = Math.random() * 90 + '%';
    flower.style.top  = Math.random() * 90 + '%';
    garden.appendChild(flower);
}

function changeWeather(){
    pass;
}
