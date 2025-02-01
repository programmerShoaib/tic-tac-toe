let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let turn = 1;
let player = "X";

let drawCount = 0;

let newGame = () => {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    turn = 1;
    // player1.innerHTML = "Player 1: X";
    // player2.innerHTML = "Player 2: O";
    // player = "X";
    // drawCount = 0;
}

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// player1.addEventListener("click", () => {
//     player1.innerHTML = "X";
//     player2.innerHTML = "O";
//     player = "X";
// });

// player2.addEventListener("click", () => {   
//     player1.innerHTML = "O";
//     player2.innerHTML = "X";
//     player = "O";
// });

box1.addEventListener("click", () => {
    if (box1.innerHTML == "") {
        box1.innerHTML = player;
        turn += 1;
        if (turn % 2 == 0) {
            player = "O";
        } else {
            player = "X";
        }
    }
});
box2.addEventListener("click", () => {
    if (box2.innerHTML == "") {
        box2.innerHTML = player;
        turn += 1;
        if (turn % 2 == 0) {
            player = "O";
        } else {
            player = "X";
        }
    }
});
box3.addEventListener("click", () => {
    if (box3.innerHTML == "") {
        box3.innerHTML = player;
        turn += 1;
        if (turn % 2 == 0) {
            player = "O";
        } else {
            player = "X";
        }
    }
});
box4.addEventListener("click", () => {  
    if (box4.innerHTML == "") {
        box4.innerHTML = player;
        turn += 1;
        if (turn % 2 == 0) {
            player = "O";
        } else {
            player = "X";
        }
    }
});
box5.addEventListener("click", () => {
    if (box5.innerHTML == "") {
        box5.innerHTML = player;
        turn += 1;
        if (turn % 2 == 0) {
            player = "O";
        } else {
            player = "X";
        }
    }
});
box6.addEventListener("click", () => {  
    if (box6.innerHTML == "") {
        box6.innerHTML = player;
        turn += 1;
        if (turn % 2 == 0) {
            player = "O";
        } else {
            player = "X";
        }
    }
});
box7.addEventListener("click", () => {
    if (box7.innerHTML == "") {
        box7.innerHTML = player;
        turn += 1;
        if (turn % 2 == 0) {
            player = "O";
        } else {
            player = "X";
        }
    }
});
box8.addEventListener("click", () => {
    if (box8.innerHTML == "") {
        box8.innerHTML = player;
        turn += 1;
        if (turn % 2 == 0) {
            player = "O";
        } else {
            player = "X";
        }
    }
});
box9.addEventListener("click", () => {
    if (box9.innerHTML == "") {
        box9.innerHTML = player;
        turn += 1;
        if (turn % 2 == 1) {
            player = "O";
        } else {
            player = "X";
        }
    }
});





function compareNestedArrays(array1, array2) {  
    for (let nestedArray of array1) {  
        // Check if nestedArray is an actual array  
        if (Array.isArray(nestedArray)) {  
            // Check if lengths are equal  
            if (nestedArray.length === array2.length) {  
                // Compare each element  
                let isEqual = true;  
                for (let i = 0; i < nestedArray.length; i++) {  
                    if (nestedArray[i] !== array2[i]) {  
                        isEqual = false;  
                        break; // No need to continue if we found a difference  
                    }  
                }  
                // If arrays are equal, return true  
                if (isEqual) return true;  
            }  
        }  
    }  
    // Return null if no nested array matches  
    return null;  
}  

// Example usage:  
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];  
const array2 = [4, 5, 7];  

const result = compareNestedArrays(array1, array2);  
console.log(result);