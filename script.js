const gameboard = document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')


let playerO = false;
const cells = ["","","","","","","","",""];
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function createBoard() {
    cells.forEach((cell, index) => {
        const box = document.createElement('div');
        box.classList.add('square');
        box.id = index;
        box.addEventListener('click', signs, {once: true});
        gameboard.append(box);
    })
}

createBoard();

function signs(e){
    
    if(playerO === false){
        const signDisplay = document.createElement('div');
        signDisplay.classList.add('cross');
        e.target.append(signDisplay);
    }
    else if(playerO === true){
        const signDisplay = document.createElement('div');
        signDisplay.classList.add('circle');
        e.target.append(signDisplay);
    }
    switchTurns();
    checkScore();
}

function switchTurns(){
        playerO = !playerO;
}

function checkScore(){
    const selected = document.querySelectorAll('.square')
    
    winningCombos.forEach(array => {
        const circleWins = array.every(cell => 
            selected[cell].firstChild?.classList.contains('circle'))
        if(circleWins){
            infoDisplay.textContent = "Circle Wins"
            selected.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }

    })

    winningCombos.forEach(array => {
        const crossWins = array.every(cell => 
            selected[cell].firstChild?.classList.contains('cross'))
        if(crossWins){
            infoDisplay.textContent = "Cross Wins"
            selected.forEach(square => square.replaceWith(square.cloneNode(true)));
            return;
        }

    })
}




