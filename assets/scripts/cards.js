var cards = [];

const Card = (title, description, expandedDescription, type, dice, agressive, image) => {
    return {
        title,
        description,
        expandedDescription,
        type,
        dice,
        agressive,
        image
    }
}

const trial = Card(
    "Test Card", 
    "this is an example description", 
    "this is an expanded description for the back of the card", 
    "vsp", 
    ["twenty", "twenty", "twenty", "chinese"], 
    "agressive", 
    "./assets/images/card_images/0054.png");

/* 
 * Helper functions used to set the appropriate parameters for the cards
 */
function setCardType(type){
    let cardType = "";
    let ballSource = "";
    switch (type) {
        case "vsp":
            cardType = "Very Special"
            ballSource = "./assets/images/card_components/balls/ball_vsp.png"
            break;
        case "sp":
            cardType = "Special"
            ballSource = "./assets/images/card_components/balls/ball_sp.png"
            break;
        case "pi":
            cardType = "Play Immediately"
            ballSource = "./assets/images/card_components/balls/ball_pi.png"
            break;
        case "run":
            cardType = "Run"
            ballSource = "./assets/images/card_components/balls/ball_run.png"
            break;
        case "kd":
            cardType = "Kaballa Dolla"
            ballSource = "./assets/images/card_components/balls/ball_gold.png"
            break;
/* => FUTURE EXPANSION once the base game is working
       case "metal": 
            cardType = "Metal"
            ballSource = setMetalBall()
            break;
        case "zodiac":
            cardType = "Zodiac"
            break;
        case "mp":
            cardType = "Mysterious Place"
            break;
        case "sen":
            cardType = "Senator"
            break;
*/
        case "str":
            cardType = "Starter"
            break;
        case "car":
            cardType = "Carrot Supply"
            break;
        default:
            cardType = "No Card Type"
    }
    return [cardType, ballSource];
}

function setCardDice(color) {
    let hexColor = "";
    let text = "";
    switch (color) {
        case "red":
            hexColor = "#ff0000";
            break;
        case "violet":
            hexColor = "#8c26ff";
            break;
        case "orange":
            hexColor = "#ff8000";
            break;
        case "green":
            hexColor = "#00ff00";
            break;
        case "yellow":
            hexColor = "#ffff00";
            break;
        case "blue":
            hexColor = "#26ffff";
            break;
        case "pink":
            hexColor = "#ff80ff";
            break;
        case "brown":
            hexColor = "#a37736";
            break;
        case "twenty":
            hexColor = "#fff";
            text = "T"
            break;
        case "zodiac":
            hexColor = "#fff";
            text = "Z"
            break;
        case "chinese":
            hexColor = "#fff";
            text = "C"
            break;
        default:
            hexColor = "";
            text = ""
    }

    return [hexColor, text];
}

function setAgressiveBox(agressive) {
    let setAgressive = "";
    switch (agressive) {
        case "agressive":
            setAgressive = "./assets/images/card_components/agressive/pinkbox.jpg"
            break;
        case "non-agressive":
            setAgressive = "./assets/images/card_components/agressive/white.jpg"
            break;
        case "pink-ball":
            setAgressive = "./assets/images/card_components/agressive/pinkbox-circle.png"
            break;
    }
    return setAgressive;
}
/*
 * Sets the cards in the hand
 */
function setCard(card, location) {
    const dice1 = setCardDice(card.dice[0]);
    const dice2 = setCardDice(card.dice[1]);
    const dice3 = setCardDice(card.dice[2]);
    const dice4 = setCardDice(card.dice[3]);
    const dice5 = setCardDice(card.dice[4]);
    const dice6 = setCardDice(card.dice[5]);
    const dice7 = setCardDice(card.dice[6]);
    const dice8 = setCardDice(card.dice[7]);
    const cardType = setCardType(card.type);

    // Card Title
    document.getElementById(`${location}-title`).innerHTML = card.title;
    // Card Description
    document.getElementById(`${location}-description`).innerHTML = card.description;
    document.getElementById(`${location}-expandedDescription`).innerHTML = card.expandedDescription;
    // Card Type
    document.getElementById(`${location}-type`).innerHTML = cardType[0];
    document.getElementById(`${location}-ball`).src = cardType[1];
    // Dice Boxes
    document.getElementById(`${location}-dieColor1`).style.background = dice1[0];
    document.getElementById(`${location}-diceText1`).innerHTML = dice1[1];
    document.getElementById(`${location}-dieColor2`).style.background = dice2[0];
    document.getElementById(`${location}-diceText2`).innerHTML = dice2[1];
    document.getElementById(`${location}-dieColor3`).style.background = dice3[0];
    document.getElementById(`${location}-diceText3`).innerHTML = dice3[1];
    document.getElementById(`${location}-dieColor4`).style.background = dice4[0];
    document.getElementById(`${location}-diceText4`).innerHTML = dice4[1];
    document.getElementById(`${location}-dieColor5`).style.background = dice5[0];
    document.getElementById(`${location}-diceText5`).innerHTML = dice5[1];
    document.getElementById(`${location}-dieColor6`).style.background = dice6[0];
    document.getElementById(`${location}-diceText6`).innerHTML = dice6[1];
    document.getElementById(`${location}-dieColor7`).style.background = dice7[0];
    document.getElementById(`${location}-diceText7`).innerHTML = dice7[1];
    document.getElementById(`${location}-dieColor8`).style.background = dice8[0];
    document.getElementById(`${location}-diceText8`).innerHTML = dice8[1];
    // Agressive Box
    document.getElementById(`${location}-agressiveBox`).src = setAgressiveBox(card.agressive);
    // Card Image
    document.getElementById(`${location}-cardImage`).src = card.image;

}

function setHand() {
    setCard(trial, "hand1");
}

setHand();