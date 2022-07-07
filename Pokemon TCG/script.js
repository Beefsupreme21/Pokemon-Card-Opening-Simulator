const api_url = 'https://api.pokemontcg.io/v2/cards'
const pokeFrontImage = document.querySelector('.poke-front-image');

let i = 0;
let x = 0; 

while (x < 5) {
    createRows()
    x++;
}

async function createRows() {
    const response = await fetch(api_url);
    const data = await response.json();
    let i = Math.floor(Math.random() * 251); 
    const { data: {[i]: { name, types, rarity, images: { small } }}} = data;
    let typeOne = types[0]
    let element = document.createElement('div');
    let imageDiv = document.createElement('div');
    let image = document.createElement('img');
    let list = document.getElementById('list');
    element.classList.add('test')
    element.innerText = name + " " + rarity; 
    image.src = small; 
    imageDiv.appendChild(image);
    element.appendChild(imageDiv);
    list.appendChild(element);
    i++;
}
