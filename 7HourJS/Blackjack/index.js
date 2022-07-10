let firstCard = 8
let secondCard = 5

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true

let messageEl = document.getElementById("message-el")
let message = ""

//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")

function startGame() {
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
}

//CASH OUT