
//cards Arrary
let cards = []



let hasBlackJack = false
let isAlive = false

let messageEl = document.getElementById("message-el")
let message = ""

//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")

let player = {

    Name: "Per ",
    Chip: 145
}

let playerEl = document.querySelector("#Player-el") 
playerEl.textContent = player.Name + ": $" + player.Chip

function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }

}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = []
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if(sum < 21){
        message = "You can keep playing"
        
    }
    else if (sum == 21) {
        message = "Well done you won"
        hasBlackJack = true
    
    } 
    else {
        message = "HAHAH YOU LOST"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    for (let i=0; i < cards.length; i++){
        cardsEl.textContent += " " + cards[i] + " "
    }
}

function drawCards(){
    if (isAlive == true && hasBlackJack == false){
        let card = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }

    
   

}

//CASH OUT