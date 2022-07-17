let firstCard = 8
let secondCard = 5
//cards Arrary
let cards = [firstCard,secondCard]

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let messageEl = document.getElementById("message-el")
let message = ""

//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

let cardsEl = document.querySelector("#cards-el")


function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1

}

function startGame(){
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
    console.log("Draw new cards from deck")
    //create new card vars
    newCard = 10

    
    sum += newCard
    cards.push(newCard)
    renderGame()

}

//CASH OUT