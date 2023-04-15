let message = document.querySelector('#message')
let card = document.querySelector('#card')
let sum = document.querySelector('#sum');
let user = document.querySelector('#user')


let somme = 0
let cards = []
let messages = ""
let isALive = false
let hasBlackjack = false

let player = {
    name: "kimo",
    chips: 145
}

user.textContent = `${player.name}: ${player.chips}$`

function getrandomNum() {
    let random = Math.floor(Math.random() * 13) + 1
    if(random === 1) {
      return 11 
    } else if(random > 10) {
      return 10
    } else {
        return random
    }
}

function startGame() {
    isALive = true
    let first = getrandomNum()
    let second = getrandomNum()
    cards = [first, second]
    somme = first + second
    renderGame()
}

function renderGame() {
    card.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++) {
        card.textContent += ` ${cards[i]}`
    }

    sum.textContent = `Sum: ${somme}`

    if(somme <= 20) {
       messages = "Do you want to draw a new card?"
    } else if(somme === 21) {
       messages = "You've got Blackjacket!"
       hasBlackjack = true
    } else {
        messages = "you're out of the game!"
        isALive = false
    }

    message.textContent = messages
}

function newGame() {
    if(isALive && hasBlackjack === false) {
        let newCard = getrandomNum()
        somme += newCard
        cards.push(newCard)
        renderGame()
    }
}


