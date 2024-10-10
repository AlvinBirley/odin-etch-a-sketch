function btnPush() {
    let boardPrompt;

    // Loop until a valid number between 1 and 100 is provided
    while (true) {
        const input = prompt("Choose board size (1-100):");
        boardPrompt = parseInt(input, 10);

        // Check if the input is a valid number between 1 and 100
        if (!isNaN(boardPrompt) && boardPrompt >= 1 && boardPrompt <= 100) {
            break; // Valid input, exit the loop
        } else {
            alert("Please enter a valid number between 1 and 100.");
        }
    }

    makeNewGrid(boardPrompt);
}

function makeNewGrid(boardPrompt) {
    // Clear board-div div
    getBoardDiv.innerHTML = "";

    // Make new div to replace board-div div
    const makeNewBoard = document.createElement("div");
    makeNewBoard.classList.add('new-board-div');

    getBoardDiv.appendChild(makeNewBoard);

    const gridSize = boardPrompt * boardPrompt;

    // Change the grid-template-rows and grid-template-columns
    makeNewBoard.style.gridTemplateRows = `repeat(${boardPrompt}, 1fr)`;
    makeNewBoard.style.gridTemplateColumns = `repeat(${boardPrompt}, 1fr)`;

    for (let i = 0; i < gridSize; i++) {
        const makeNewDiv = document.createElement("div");

        // Create grid div border
        //makeNewDiv.style.border = '2px solid black';

        // Append grid div to container
        makeNewBoard.appendChild(makeNewDiv);

        // Set up event listener for the new div
        makeNewDiv.addEventListener("mouseover", function () {
            makeNewDiv.style.background = 'black'; // Make sure to use quotes around 'black'
        });
    }
}

// Select container div
const getContainer = document.getElementById("container");
const getBoardDiv = document.getElementById("board-div");

// Make initial 16*16 grid
function makeGrid(num) {

    let gridSize = num * num;
    for (let i = 0; i < gridSize; i++) {
        // Create grid div
        const makeDiv = document.createElement("div");
        makeDiv.classList.add('divClass');

        // Create grid div border
        //makeDiv.style.border = '2px solid black';

        // Append grid div to container
        getContainer.appendChild(makeDiv);

        makeDiv.addEventListener("mouseover", function () {
            makeDiv.style.background = 'black'; // Make sure to use quotes around 'black'
        });
    }
}
makeGrid(16);

function reset (){
    getBoardDiv.innerHTML=""
    const makeResetDiv = document.createElement("div");
    makeResetDiv.setAttribute('id', 'container');
    getBoardDiv.appendChild(makeResetDiv);
    for (let i = 0; i < 256; i++) {
        const makeSmallDiv = document.createElement("div");
        //makeSmallDiv.style.border = '2px solid black';
        makeResetDiv.appendChild(makeSmallDiv);
        makeSmallDiv.addEventListener("mouseover", function () {
            makeSmallDiv.style.background = 'black'; // Make sure to use quotes around 'black'
        });
    }
}
document.getElementById("reset-btn").addEventListener("click", reset);
document.getElementById('btn').addEventListener('click', btnPush);





