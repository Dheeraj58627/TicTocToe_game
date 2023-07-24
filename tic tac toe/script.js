console.log("welcome to Tic tac toe");
let Music = new Audio("music.wav");
let audioturn = new Audio("ting.wav");
let gameover = new Audio("gameover.wav");
let turn = "❌";
let isgameover = false;

//function to change the turn
const changeturn = () => {

    return turn === "❌" ? "⭕" : "❌"
}

//function to check for a win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName("box-text");
    let wins = [
        [0, 1, 2, 5, 5, 0, 1, 10, 0],
        [3, 4, 5, 5, 15, 0, 1, 30, 0],
        [6, 7, 8, 5, 25, 0, 1, 50, 0],
        [0, 3, 6, -5, 15, 90, -20, 30, 90],
        [1, 4, 7, 5, 15, 90, 0, 30, 90],
        [2, 5, 8, 15, 15, 90, 20, 30, 90],
        [0, 4, 8, 5, 15, 45, 1, 30, 45],
        [2, 4, 6, 5, 15, 135, 1, 30, 135]
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            gameover.play();
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "100px";
            document.querySelector(".line").style.width = '20vw';
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;

           

        }
    })
}

//Gamelogic
gameover.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.box-text');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})

//add on click listener to reset button
reset.addEventListener('click', (e) => {
    let boxtexts = document.querySelectorAll('.box-text');
    Array.from(boxtexts).forEach((element) => {
        element.innerText = ""
    });
    turn = "❌";
    isgameover = false;
    document.querySelector(".line").style.width = '0vw';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px";

})