init();
var arr1: string[] = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
var arr2: string[] = ['3', '4', '5', '6', '7', '8', '9', 'D', 'J', 'Q', 'K', 'A'];
var arrCards: string[] = [];
var result = 0
var resultPlayer = 0
var resultPC = 0
var activePlayer = 0;
var totalPlayer = 0
var totalPC = 0

function getCard(): string {

    let randSuit: string = arr1[Math.floor(Math.random() * 4)];
    let randCard: string = arr2[Math.floor(Math.random() * 12)];
    let randomCard: string = randCard + randSuit;

    console.log(randomCard)
    if (arrCards.includes(randomCard)) {
        getCard();
    } else {
        sumCards(randomCard)
        refreshSum()

        // console.log(randomCard)
        //console.log(arrCards.length)
        arrCards.push(randomCard);
        createCardPlace(randomCard);
    }
    return randomCard;
}

function getCardPC() {
    activePlayer = 1;
    result = 0
    while (resultPC < 14) {
        getCard()
    }

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
    refreshTotal()
}

function createCardPlace(card: string): void {
    let placeDiv = document.getElementById('main')
    let place = window.document.createElement('img')
    place.src = '/img/kor.jpg'
    place.id = 'card'
    place.style.marginRight = '10px'
    place.style.width = '75px'
    place.style.height = '150px'
    placeDiv.appendChild(place)

}
//createCardPlace(getCard());
function sumCards(card: string): void {
    switch (card[0]) {
        case '4':
            result += 4
            break;
        case '3':
            result += 3
            break;
        case '5':
            result += 5
            break;
        case '6':
            result += 6
            break;
        case '7':
            result += 7
            break;
        case '8':
            result += 8
            break;
        case '9':
            result += 9
            break;
        case 'D':
        case 'J':
        case 'Q':
        case 'K':
            result += 10
            break;
        case 'A':
            result += 11
            break;
        default:
            break;
    }

}

let cardButton = document.querySelector('#btnCard');
cardButton.addEventListener('click', getCard);

let btnStand = document.querySelector('#btnStand');
btnStand.addEventListener('click', getCardPC)

let btnNewGame = document.querySelector('#btnNewGame');
btnNewGame.addEventListener('click', init)

function refreshSum() {
    if (activePlayer === 0) {
        resultPlayer = result
        window.document.getElementById('sumPlayer').innerHTML = `${resultPlayer}`
    } else {
        resultPC = result
        window.document.getElementById('sumPC').innerHTML = `${resultPC}`
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
