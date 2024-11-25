const playingTable = document.querySelector('.playing_table');
const playerLivesCount = document.querySelector('span');

let playerLives = 10;

playerLivesCount.textContent = playerLives;

const getData = () => [
    {imgSrc: "./img/babblarna.jpg", name: "babblarna"},
    {imgSrc: "./img/bamse.jpg", name: "bamse"},
    {imgSrc: "./img/bolibompadraken.jpg", name: "bolibompa"},
    {imgSrc: "./img/Greta-Gris.jpeg", name: "greta gris"},
    {imgSrc: "./img/humlan.jpg", name: "humlan"},
    {imgSrc: "./img/moana.jpg", name: "moana"},
    {imgSrc: "./img/nalle-puh.jpg", name: "nalle puh"},
    {imgSrc: "./img/pippi-langstrump.jpg", name: "pippi langstrump"},
    {imgSrc: "./img/babblarna.jpg", name: "babblarna"},
    {imgSrc: "./img/bamse.jpg", name: "bamse"},
    {imgSrc: "./img/bolibompadraken.jpg", name: "bolibompa"},
    {imgSrc: "./img/Greta-Gris.jpeg", name: "greta gris"},
    {imgSrc: "./img/humlan.jpg", name: "humlan"},
    {imgSrc: "./img/moana.jpg", name: "moana"},
    {imgSrc: "./img/nalle-puh.jpg", name: "nalle puh"},
    {imgSrc: "./img/pippi-langstrump.jpg", name: "pippi langstrump"}
];

//Blandar arrayen
const randomize = () => {
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
}

//
const cardGeneratior = () =>{
    const cardData = randomize();

    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        face.src = item.imgSrc;
        card.setAttribute('name', item.name);

        playingTable.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e)
        });
    }); 
};

//Kontrollera korten
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');
    
    console.log(clickedCard)
    if (flippedCards.length === 2){
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.style.pointerEvents = "none";
            });
        }
        else{
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 2000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
        };
    }
}

cardGeneratior()