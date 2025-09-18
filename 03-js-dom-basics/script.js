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

function changeWeather() {
  const weatherOptions = [
    {icon:'☀️ Sunny', bg:'linear-gradient(to bottom, rgba(255,255,0,0.4), rgba(255,165,0,0.4))'},
    {icon:'🌧️ Rainy', bg:'rgba(0,0,50,0.4)'},
    {icon:'❄️ Snowy', bg:'rgba(200,200,255,0.5)'},
    {icon:'🌪️ Windy', bg:'rgba(100,100,100,0.5)'},
  ];

  const random = weatherOptions[Math.floor(Math.random()*weatherOptions.length)];

  const weatherDisplay = document.getElementById('weather-display');
  weatherDisplay.textContent = random.icon;


  const overlay = document.getElementById('weather-overlay');
  overlay.style.background = random.bg;

  weatherDisplay.classList.add('pop');
  setTimeout(() => weatherDisplay.classList.remove('pop'), 300);
}


