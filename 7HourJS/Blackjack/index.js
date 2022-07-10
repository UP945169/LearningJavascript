let firstCard = 8
let secondCard = 5

let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true



function startGame() {
    if(sum < 21){
        console.log("You can keep playing")
        
    }
    else if (sum == 21) {
        console.log("Well done you won")
        hasBlackJack = true
    
    } 
    else {
        console.log("HAHAH YOU LOST")
        isAlive = false
    }
}

//CASH OUT