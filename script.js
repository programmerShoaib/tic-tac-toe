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

    // the below are the players

let player1 = document.getElementById("player1");   
let player2 = document.getElementById("player2");
let draw = document.getElementById("draw");

let turn = 1;
let player = "X";

    // player wons and draw count

let player1Wons = 0;
let player2Wons = 0;
let drawCount = 0;

let changeTurn = () => {   // function to change the turn
    if (player === "X") {
        player = "O";
    } else if (player === "O") {
        player = "X";
    }
}

let newBoard = () => {    // function to reset the board
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    player = "X";
    player1.innerHTML = 0;
    player2.innerHTML = 0;
    draw.innerHTML = 0;
    drawCount = 0;
}

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
    player = "O";
}

let winCheck = (parem1, parem2, parem3) => {    // function to check for a win
    if (parem1.innerHTML === parem2.innerHTML && parem2.innerHTML === parem3.innerHTML && parem1.innerHTML !== "") {
        alert("Player " + player + " wins!");
        if (player === "X") {
            player1.innerHTML = player1Wons += 1;
        } else if (player === "O") {
            player2.innerHTML = player2Wons += 1;
        }
        newGame();
    }
}

let drawCheck = () => {    // function to check for a draw
    if (
        box1.innerHTML !== "" &&
        box2.innerHTML !== "" &&
        box3.innerHTML !== "" &&
        box4.innerHTML !== "" &&
        box5.innerHTML !== "" &&
        box6.innerHTML !== "" &&
        box7.innerHTML !== "" &&    
        box8.innerHTML !== "" &&
        box9.innerHTML !== ""
    ) {
        alert("Draw!");
        draw.innerHTML = drawCount += 1;
        newGame();
    }
}

box1.addEventListener("click", () => {
    if (box1.innerHTML == "") {
        box1.innerHTML = player;
        winCheck(box1, box2, box3); // win possibilities 
        winCheck(box1, box4, box7);
        winCheck(box1, box5, box9);
        drawCheck();    // draw check
        changeTurn();   // change turn
    }
});
box2.addEventListener("click", () => {
    if (box2.innerHTML == "") {
        box2.innerHTML = player;
        winCheck(box2, box1, box3); // win possibilities
        winCheck(box2, box5, box8);
        drawCheck();    // draw check
        changeTurn();   // change turn
    }
});
box3.addEventListener("click", () => {
    if (box3.innerHTML == "") {
        box3.innerHTML = player;
        winCheck(box3, box2, box1); // win possibilities
        winCheck(box3, box5, box7);
        winCheck(box3, box6, box9);
        drawCheck();    // draw check
        changeTurn();   // change turn
    }
});
box4.addEventListener("click", () => {  
    if (box4.innerHTML == "") {
        box4.innerHTML = player;
        winCheck(box4, box1, box7); // win possibilities
        winCheck(box4, box5, box6);
        drawCheck();    // draw check
        changeTurn();   // change turn
    }
});
box5.addEventListener("click", () => {
    if (box5.innerHTML == "") {
        box5.innerHTML = player;
        winCheck(box5, box2, box8); // win possibilities
        winCheck(box5, box4, box6);
        winCheck(box5, box3, box7);
        winCheck(box5, box1, box9);
        drawCheck();    // draw check
        changeTurn();   // change turn
    }
});
box6.addEventListener("click", () => {  
    if (box6.innerHTML == "") {
        box6.innerHTML = player;
        winCheck(box6, box3, box9); // win possibilities
        winCheck(box6, box5, box4);
        drawCheck();    // draw check
        changeTurn();   // change turn
    }
});
box7.addEventListener("click", () => {
    if (box7.innerHTML == "") {
        box7.innerHTML = player;
        winCheck(box7, box4, box1); // win possibilities
        winCheck(box7, box8, box9);
        winCheck(box7, box5, box3);
        drawCheck();    // draw check
        changeTurn();   // change turn
    }
});
box8.addEventListener("click", () => {
    if (box8.innerHTML == "") {
        box8.innerHTML = player;
        winCheck(box8, box5, box2); // win possibilities
        winCheck(box8, box7, box9);
        drawCheck();    // draw check
        changeTurn();   // change turn
    }
});
box9.addEventListener("click", () => {
    if (box9.innerHTML == "") {
        box9.innerHTML = player;
        winCheck(box9, box6, box3); // win possibilities
        winCheck(box9, box8, box7);
        winCheck(box9, box1, box5);
        drawCheck();    // draw check
        changeTurn();   // change turn
    }
});


