var arr1: string[] = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var arr2: string[] = ['3', '4', '5', '6', '7', '8', '9', 'D', 'J', 'Q', 'K', 'A'];
var arrCards: string[] = [];
var result = 0;
var activePlayer = 0;
var resultPlayer = 0;
var resultPC = 0;
var totalPC = 0;
var totalPlayer = 0;

class Cards {
    private suit = arr1[Math.floor(Math.random() * 4)];
    private card = arr2[Math.floor(Math.random() * 12)];
    cardSuit: string;
    constructor() {
        this.cardSuit = this.card + this.suit;
    }

    push(card: Cards) {
        if (arrCards.includes(card.cardSuit)) {
            play();
        } else {
            arrCards.push(card.cardSuit);
            this.includesCardPlace(this);
            if (+this.card > 2 && +this.card < 10) {
                result += +this.card;
            } else if (this.card === 'D' || this.card === 'J' || this.card === 'Q' || this.card === 'K') {
                result += 10;
            } else {
                result += 11;
            }
        }
    }
    includesCardPlace(card: Cards): void {
        let placeDiv = document.getElementById('main')
        let place = window.document.createElement('img')
        place.src = 'img/kor.jpg'
        place.id = 'card'
        place.style.marginRight = '10px'
        place.style.width = '75px'
        place.style.height = '150px'
        placeDiv.appendChild(place)
    }


}

function play(): void {
    let c = new Cards();
    c.push(c);
    if (activePlayer === 0) {
        resultPlayer = result
        window.document.getElementById('sumPlayer').innerHTML = `${resultPlayer}`
    } else {
        resultPC = result
        window.document.getElementById('sumPC').innerHTML = `${resultPC}`
    }
}

function playPC(): void {
    activePlayer = 1;
    result = 0
    while (resultPC < 14) {
        play();
    }
    getWinner();
    refreshTotal();
}

function getWinner() {
    if (resultPlayer > resultPC && resultPlayer < 22 || resultPlayer < 22 && resultPC > 21) {
        totalPlayer++;
        window.document.getElementById('winner').innerHTML = 'PLayer WIN!'
    } else if (resultPlayer < resultPC && resultPC < 22 || resultPlayer > 21 && resultPC < 22) {
        totalPC++
        window.document.getElementById('winner').innerHTML = 'PC WIN!'
    } else if (resultPC === resultPlayer) {
        window.document.getElementById('winner').innerHTML = 'DRAW'
    } else {

    }

}
function refreshTotal() {
    window.document.getElementById('sumPlayerAll').innerHTML = `${totalPlayer}`
    window.document.getElementById('sumPCAll').innerHTML = `${totalPC}`
}
function init(): void {
    document.getElementById('main').innerText = ``
    arrCards = [];
    result = 0
    resultPC = 0
    resultPlayer = 0
    activePlayer = 0
    window.document.getElementById('sumPlayer').innerHTML = `0`
    window.document.getElementById('sumPC').innerHTML = `0`
    window.document.getElementById('winner').innerHTML = ``

}

let cardButton = document.querySelector('#btnCard');
cardButton.addEventListener('click', play);

let btnStand = document.querySelector('#btnStand');
btnStand.addEventListener('click', playPC)

let btnNewGame = document.querySelector('#btnNewGame');
btnNewGame.addEventListener('click', init)