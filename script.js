let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

    // the above are the boxes 

let turn = 1;
let player = "X";

let changeTurn = () => {   // function to change the turn
    if (player === "X") {
        player = "O";
    } else if (player === "O") {
        player = "X";
    }
}

box1.addEventListener("click", () => {
    if (box1.innerHTML == "") {
        box1.innerHTML = player;
        changeTurn();
    }
});
box2.addEventListener("click", () => {
    if (box2.innerHTML == "") {
        box2.innerHTML = player;
        changeTurn();
    }
});
box3.addEventListener("click", () => {
    if (box3.innerHTML == "") {
        box3.innerHTML = player;
        changeTurn();
        winCheck(box1, box2, box3);
        winCheck(box4, box5, box6);
    }
});
box4.addEventListener("click", () => {  
    if (box4.innerHTML == "") {
        box4.innerHTML = player;
        changeTurn();
    }
});
box5.addEventListener("click", () => {
    if (box5.innerHTML == "") {
        box5.innerHTML = player;
        changeTurn();
    }
});
box6.addEventListener("click", () => {  
    if (box6.innerHTML == "") {
        box6.innerHTML = player;
        changeTurn();
    }
});
box7.addEventListener("click", () => {
    if (box7.innerHTML == "") {
        box7.innerHTML = player;
        changeTurn();
    }
});
box8.addEventListener("click", () => {
    if (box8.innerHTML == "") {
        box8.innerHTML = player;
        changeTurn();
    }
});
box9.addEventListener("click", () => {
    if (box9.innerHTML == "") {
        box9.innerHTML = player;
        changeTurn();
    }
});


//  for (let i = 0; i < win.length; i++) {
//     let winCombination = win[i];
//     let box1 = document.getElementById("box" + winCombination[0]);
//     let box2 = document.getElementById("box" + winCombination[1]);
//     let box3 = document.getElementById("box" + winCombination[2]);
    
// }

let newGame = () => {    // function to reset the game
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    turn = 0;
    player = "X";
    // player1.innerHTML = "Player 1: X";
    // player2.innerHTML = "Player 2: O";
    // drawCount = 0;
}

if (box1.innerHTML === "X" && box2.innerHTML === "X" && box3.innerHTML === "X") {
    alert("Player 1 wins!");
    newGame();
} else if (box1.innerHTML === "O" && box2.innerHTML === "O" && box3.innerHTML === "O") {
    alert("Player 2 wins!");
    newGame();
}

let winCheck = (parem1, parem2, parem3) => {    // function to check for a win
    if (parem1.innerHTML === parem2.innerHTML && parem2.innerHTML === parem3.innerHTML && parem1.innerHTML !== "") {
        alert("Player " + player + " wins!");
        newGame();
    }
}
winCheck();