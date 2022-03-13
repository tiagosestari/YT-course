let card1 = 7;
let card2 = 8;
let hand = [card1, card2]
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
//using query selector
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");

const handSum = () => {
    return hand.reduce(function (x,y) {return x + y},0);
}

const returnHand = () => {
    //Add to the cards string all cards in hand
    let handStr = "";
    hand.forEach(element => {
        handStr += `${element} -- `
    });
    handStr = handStr.slice(0, handStr.length - 4);
    cardsEl.textContent = `Cards: ${handStr}`
}

const startGame = () => {
    //NEEDS TO REFRESH THE SUM WHEN STARTING NEW GAME
    renderGame();
    returnHand();
}

const renderGame = () => {
    let cardSum = handSum();
    sumEl.textContent = `Sum: ${cardSum}`;

    //Checks hand state
    if (cardSum < 21) {
        message = "Do you want to draw a new card?"
    } else if (cardSum === 21) {
        message = "Blackjack! You've won!"
        hasBlackJack = true;
    } else {
        message = "You've lost. Start a new game?";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

const draw = () => {
    //Check if able to draw a new card
    let cardSum = handSum();
    if (cardSum >= 21) {
        messageEl.textContent = "You cannot draw new cards";
    } else {
        newCard = 3;
        hand.push(newCard);
        cardSum += newCard;
        returnHand();
        renderGame();
    }
}