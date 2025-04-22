let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    return 5
}

function startGame() {
    // 3. Call renderGame() to render the message
    renderGame()
}



// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function renderGame() {

    sumEl.textContent = "Sum: " + sum
    // render out firstCard and secondCard
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += cards[index] + " "
        
    }
    
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    // 3. Set the messageEl's text content to the message variable
    messageEl.textContent = message
   

    
}

function newCard() {
  
    console.log("Drawing a new card from the deck!")

    let card = getRandomCard()

    sum = sum + card
    // 4. Call startGame() again to re-render the message
    renderGame()


}




