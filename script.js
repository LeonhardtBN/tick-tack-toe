let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

//Winnng Pattern Array
let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8], 
    [0,4,8],
    [2,4,6],
];
//Player 'X' plays first
let xTurn = true
let count = 0;

//Dissable All Buttons 
const disableButtons = () => {
    btnRef.forEach((element) =>(element.disabled= true ));
    //enable popup
    popupRef.classList.remove("hide");
};

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
});
//disable popup
popupRef.classList.add("hide");
};

//This function is executed wheb a player wins 
const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTM = "&#x1F389; <br> 'X' Wins";
    } else {
        msgRef.nnerHTML = "&#x1F389; <bt> 'O' Wins";
    }
};
//Function for draw
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//New Game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
let i = 0
// Function to check for a win
const winChecker = () => {
    for (i = 0; i < winningPattern.length; i++) {
        let [a, b, c] = winningPattern[i];
        let element1 = btnRef[a].innerText;
        let element2 = btnRef[b].innerText;
        let element3 = btnRef[c].innerText;
        
        // Check if all elements are filled and equal
        if (element1 && element2 && element3 && element1 === element2 && element2 === element3) {
            disableButtons();
            if (element1 === "X") {
                message.innerHTML = "&#x1F389; <br> Player X Wins!";
            } else if (element1 === "O") {
                message.innerHTML = "&#x1F389; <br> Player O Wins!";
            }
            return;
        }
    }
};

let [element1, element2, element3] = [
    btnRef[winningPattern[i][0]].innerText,
    btnRef[winningPattern[i][1]].innerText,
    btnRef[winningPattern[i][2]].innerText,
];

//Check if elements are filled
//If 3 empty elements are same and would give wun as would
    if (element1 != "" && (element2 != "") &  (element3)) {
        if (element1 == element2 && element2 == element3){
            //If all 3 buttons have same values the pass the value to winFunction
            winFunction(element1);
        }
    }
    //Display X/O on click
    btnRef.forEach((element) => {
        element.addEventListener("click", () => {
            if (xTurn) {
                xTurn = false;
                //Display X
                element.innerText = "X";
                element.disabled = true;
            } else {
                xTurn = true;
                //Display Y 
                element.innerText = "O";
                element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        //Check for win on every click
        winChecker();
    });
//Increment count on each click 
});

//Enable Buttons and disable popup on page load
window.onload = enableButtons;
