//select container div 
const getContainer = document.getElementById("container");

//make initial 16*16 grid
function makeGrid(num) {
let gridSize = num*num
let oneDiv = (1/num)
for (i=0;i<gridSize;i++) {
    //creates grid div
const makeDiv = document.createElement("div");
makeDiv.classList.add('divClass');

//create grid div border 
makeDiv.style.border = '2px solid black';
//append grid div to container
getContainer.appendChild(makeDiv);
}
console.log(oneDiv)
}

//make 16*16 grid appear on load of webpage

document.addEventListener("DOMContentLoaded", makeGrid(16))






