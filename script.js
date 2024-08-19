let startButton = document.getElementById("start");
let boxContainer = document.getElementById("boxContainer");
let winButton = document.getElementById("winButton");
let title = document.getElementById("title");
// let scoreX = document.getElementById("scoreX");
// let scoreO = document.getElementById("scoreO");
// let scoreContainer = document.getElementById("scoreContainer");
// let restart = document.getElementById("restart");

let topLeftBox = document.getElementById("topLeft");
let topMidBox = document.getElementById("topMid");
let topRightBox = document.getElementById("topRight");
let midLeftBox = document.getElementById("midLeft");
let midMidBox = document.getElementById("midMid");
let midRightBox = document.getElementById("midRight");
let botLeftBox = document.getElementById("botLeft");
let botMidBox = document.getElementById("botMid");
let botRightBox = document.getElementById("botRight");

let playerOneContainer = document.getElementById("playerOneContainer");
let playerTwoContainer = document.getElementById("playerTwoContainer");
let playerOneInput = document.getElementById("playerOneInput");
let playerTwoInput = document.getElementById("playerTwoInput"); 
let playerOneNameSubmit = document.getElementById("playerOneNameSubmit");
let playerTwoNameSubmit = document.getElementById("playerTwoNameSubmit");
let playerOneInfo = document.getElementById("playerOneInfo");
let playerTwoInfo = document.getElementById("playerTwoInfo");
let playerOneName;
let playerTwoName;


//true/false values to determine if input
let p1 = false;
let p2 = false;

let boxes = [topLeftBox, topMidBox, topRightBox, midLeftBox, midMidBox, midRightBox, botLeftBox, botMidBox, botRightBox]
let directions = [];

var count = 0;
let token;
let games = [];
// let scoreXValue = 0;
// let scoreOValue = 0;

// scoreX.innerText = scoreXValue;
// scoreO.innerText = scoreOValue;

class Game{
    constructor(playerOne, playerTwo, topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight){
        this._playerOne = playerOne;
        this._playerTwo = playerTwo;
        this._topLeft = topLeft;
        this._topMid = topMid;
        this._topRight = topRight;
        this._midLeft = midLeft;
        this._midMid = midMid;
        this._midRight = midRight;
        this._botLeft = botLeft;
        this._botMid = botMid;
        this._botRight = botRight;
    }

    get playerOne(){
        return this._playerOne;
    }

    set playerOne(playerOne){
        this._playerOne = playerOne;
    }

    get playerTwo(){
        return this._playerTwo;
    }

    set playerTwo(playerTwo){
        this._playerTwo = playerTwo;
    }

    get topLeft(){
        return this._topLeft;
    }

    get topMid(){
        return this._topMid;
    }

    get topRight(){
        return this._topRight;
    }

    get midLeft(){
        return this._midLeft;
    }

    get midMid(){
        return this._midMid;
    }

    get midRight(){
        return this._midRight;
    }

    get botLeft(){
        return this._botLeft;
    }

    get botMid(){
        return this._botMid;
    }

    get botRight(){
        return this._botRight;
    }

    set topLeft(topLeft){
        this._topLeft = topLeft;
    }

    set topMid(topMid){
        this._topMid = topMid;
    }
    
    set topRight(topRight){
        this._topRight = topRight;
    }

    set midLeft(midLeft){
        this._midLeft = midLeft;
    }

    set midMid(midMid){
        this._midMid = midMid;
    }

    set midRight(midRight){
        this._midRight = midRight;
    }

    set botLeft(botLeft){
        this._botLeft = botLeft;
    }

    set botMid(botMid){
        this._botMid = botMid;
    }

    set botRight(botRight){
        this._botRight = botRight;
    }   
}

class Direction{
    constructor(directionName, element, token){
        this._directionName = directionName;
        this._element = element;
        this._token = token;
    }

    get directionName(){
        return this._directionName;
    }

    get element(){
        return this._element;
    }

    get token(){
        return this._token;
    }

    set token(token){
        this._token = token;
    }
}

//creates direction
var topLeft = new Direction("topLeft", topLeftBox, "?");
var topMid = new Direction("topMid", topMidBox, "?");
var topRight = new Direction("topRight", topRightBox, "?");
var midLeft = new Direction("midLeft", midLeftBox, "?");
var midMid = new Direction("midMid", midMidBox, "?");
var midRight = new Direction("midRight", midRightBox, "?");
var botLeft = new Direction("botLeft", botLeftBox, "?");
var botMid = new Direction("botMid", botMidBox, "?");
var botRight = new Direction("botRight", botRightBox, "?");

directions = [topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight];

playerOneNameSubmit.disabled = true;
playerTwoNameSubmit.disabled = true;

function matchTarget(id, token){
    for (let i = 0; i < directions.length; i++){
        if (directions[i]._directionName == id){
            directions[i]._token = token;
            break;
        }
    }
}

function printWinner(token){
    if (token == "X"){
        winButton.innerText = `${playerOneName} wins!`;
    } else {
        winButton.innerText = `${playerTwoName} wins!`;
    }
}

function printResultToConsole(){
console.log(`${topLeft._token} ${topMid._token} ${topRight._token}`);
console.log(`${midLeft._token} ${midMid._token} ${midRight._token}`);
console.log(`${botLeft._token} ${botMid._token} ${botRight._token}`);

}

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    boxContainer.style.display = "flex";
})

playerOneInput.addEventListener("input", () =>{
    if ((playerOneInput.value != "") && (p1 == false)){
        playerOneNameSubmit.disabled = false;
    } else {
        playerOneNameSubmit.disabled = true;
    }
})

playerTwoInput.addEventListener("input", () =>{
    if ((playerTwoInput.value != "") && (p2 == false)){
        playerTwoNameSubmit.disabled = false;
    } else {
        playerTwoNameSubmit.disabled = true;
    }
})

playerOneNameSubmit.addEventListener("click", () =>{
    playerOneName = playerOneInput.value;

    var nameOne = document.createElement("p");

    nameOne.innerText = `Player One (X): ${playerOneName}`;

    playerOneInfo.style.display = "block";

    playerOneInfo.appendChild(nameOne);

    playerOneNameSubmit.disabled = true;

    playerOneContainer.style.display = "none";

    p1 = true;

    if (p1 == true && p2 == true){
        startButton.style.display = "block";
        playerOneContainer.style.display = "none";
        playerTwoContainer.style.display = "none";
    }
})

playerTwoNameSubmit.addEventListener("click", () =>{
    playerTwoName = playerTwoInput.value;

    var nameTwo = document.createElement("p");

    nameTwo.innerText = `Player Two (O): ${playerTwoName}`;

    playerTwoInfo.style.display = "block";

    playerTwoInfo.appendChild(nameTwo);

    playerTwoNameSubmit.disabled = true;

    playerTwoContainer.style.display = "none";

    p2 = true;

    if (p1 == true && p2 == true){
        startButton.style.display = "block";
        playerOneContainer.style.display = "none";
        playerTwoContainer.style.display = "none";
    }
})

// creates new game and adds it to the array
var game = new Game(playerOneName, playerTwoName, topLeft, topMid, topRight, midLeft, midMid, midRight, botLeft, botMid, botRight);
games.push(game);

const winCheck = setInterval(function win(){
 //top horizontal
    if ((topLeft._token == topMid._token) && (topLeft._token == topRight._token) && (topMid._token == topRight._token)){
        if ((topLeft._token == "X" || topLeft._token == "O") && (topMid._token == "X" || topMid._token == "O") && (topRight._token == "X" || topRight._token =="O")){
            winButton.style.display = "block";
            boxContainer.style.display = "none";
            printWinner(topLeft._token);
            console.log("top horizontal");
            clearInterval(winCheck);
        }
    } 
    
    //left vertical
    if ((topLeft._token == midLeft._token) && (topLeft._token == botLeft._token) && (midLeft._token == botLeft._token)){
        if ((topLeft._token == "X" || topLeft._token == "O") && (midLeft._token == "X" || midLeft._token == "O") && (botLeft._token == "X" || botLeft._token =="O")){
            winButton.style.display = "block";
            boxContainer.style.display = "none";
            printWinner(topleft._token);
            console.log("left vertical");
            clearInterval(winCheck);
        }
    }

    //left upper corner to lower right corner diagonal
    if ((topLeft._token == midMid._token) && (topLeft._token == botRight._token) && (midMid._token == botRight._token)){
        if ((topLeft._token == "X" || topLeft._token == "O") && (midMid._token == "X" || midMid._token == "O") && (botRight._token == "X" || botRight._token =="O")){
            winButton.style.display = "block";
            boxContainer.style.display = "none";
            printWinner(topLeft._token);
            console.log("left upper corner to lower right corner");
            clearInterval(winCheck);
        }
    }
    
    //mid vertical
    if ((topMid._token == midMid._token) && (topMid._token == botMid._token) && (midMid._token == botMid._token)){
        if ((topMid._token == "X" || topMid._token == "O") && (midMid._token == "X" || midMid._token == "O") && (botMid._token == "X" || botMid._token =="O")){
            winButton.style.display = "block";
            boxContainer.style.display = "none";
            printWinner(topMid._token);
            console.log("mid vertical");
            clearInterval(winCheck);
        }
    } 
    
    //upper right corner to lower left corner
    if ((topRight._token == midMid._token) && (topRight._token == botLeft._token) && (midMid._token == botLeft._token)){
        if ((topRight._token == "X" || topRight._token == "O") && (midMid._token == "X" || midMid._token == "O") && (botLeft._token == "X" || botLeft._token =="O")){
            winButton.style.display = "block";
            boxContainer.style.display = "none";
            printWinner(topRight._token);
            console.log("upper right corner to lower left corner");
            clearInterval(winCheck);
        }

    } 

    //mid horizontal
    if ((midLeft._token === midMid._token) && (midLeft._token === midRight._token) && (midMid._token === midRight._token)){
        if ((midLeft._token === "X" || midLeft._token === "O") && (midMid._token === "X" || midMid._token === "O") && (midRight._token === "X" || midRight._token ==="O")){
            winButton.style.display = "block";
            boxContainer.style.display = "none";
            printWinner(midLeft._token);
            console.log("mid horizontal");
            clearInterval(winCheck);
        }

    } 

    //low horizontal
    if ((botLeft._token == botMid._token) && (botLeft._token == botRight._token) && (botMid._token == botRight._token)){
        if ((botLeft._token == "X" || botLeft._token == "O") && (botMid._token == "X" || botMid._token == "O") && (botRight._token == "X" || botRight._token =="O")){
            winButton.style.display = "block";
            boxContainer.style.display = "none";
            printWinner(botLeft._token);
            console.log("low horizontal");
            clearInterval(winCheck);
        }

    } 

    //right vertical
    if ((topRight._token == midRight._token) && (topRight._token == botRight._token) && (midRight._token == botRight._token)){
        if ((topRight._token == "X" || topRight._token == "O") && (midRight._token == "X" || midRight._token == "O") && (botRight._token == "X" || botRight._token =="O")){
            winButton.style.display = "block";
            boxContainer.style.display = "none";
            printWinner(topRight._token);
            console.log("right vertical");
            clearInterval(winCheck);
        }
    }
}, 100);

boxes.forEach((box) => {
    box.addEventListener("click", event =>{
        if (count % 2 == 0){
            token = "X";
        } else if (count % 2 == 1){
            token = "O";
        }

        //for every click, increment
        count++;
        console.log(count);

        let target = event.target;
            
        //changes token
        target.innerText = token;
            
        //match target to direction
        matchTarget(target.id, token);

        //prints current outlook
        printResultToConsole();
    });
})

//every 3 seconds, the right token appears
setInterval(function(){
    for (let i = 0; i < boxes.length; i++){
        boxes[i].innerText = directions[i]._token;
    }
}, 2000);

//every second, the token ? appears
setInterval(function(){
    boxes.forEach((box) =>{
        box.innerText = "?";
    })
}, 1500);


/*

algorithm:
    1. diagonal: topLeft, midMid, botRight OR topRight, midMid, botLeft
    2. horizontal: topLeft, topMid, topRight OR midLeft, midMid, midRight OR botLeft, botMid, botRight
    3. vertical: topLeft, midLeft, botLeft OR topMid, midMid, botMid OR topRight, midRight, botRight

    to keep track of this, we have the 9 directions in a token class

    direction token can either have X or O or none if it is a corner piece

    0: topLeft 1: topMid 2: topRight
    3: midLeft 4: midMid 5: midRight
    6: botLeft 7: botMid 8: botRight

    for every click, an alternating token gets placedd down and the game gets updated
    then check these positions if it fulfills a win!

    for every position, see if these positions have the same tokens

    (0,1,2), (0,3,6), (0,4,8)
    (1,4,7)
    (2,5,8), (2,4,6)
    (3,4,5)
    (6,7,8)

*/

