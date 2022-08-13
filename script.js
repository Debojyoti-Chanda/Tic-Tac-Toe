console.log("Hello Welcome to Tic-Tac-Toe");
// const music = new Audio("");
const clickAudio = new Audio("click.wav");
const gameoverAudio = new Audio("winner-sound.mp3");

let gameover = false;

let turn = "X";
//function to change the turn 
const changeTurn = () =>{
    turn = turn === "X" ? "O" : "X";
}

//function for check to win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    const wins =[
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ]
    wins.forEach( innerarr =>{ 
        if(boxtext[innerarr[0]].innerText!=="" && boxtext[innerarr[0]].innerText===boxtext[innerarr[1]].innerText &&  boxtext[innerarr[1]].innerText===boxtext[innerarr[2]].innerText){
            document.querySelector(".info").innerText = boxtext[innerarr[0]].innerText + "  WON";
            gameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="300px";
            document.querySelector(".line").style.display="block";
            document.querySelector(".line").style.width="30vh";
            document.querySelector(".line").style.transform =`translate(${innerarr[3]}vh,${innerarr[4]}vh) rotate(${innerarr[5]}deg)`;
            gameoverAudio.play();
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
// console.log(boxes);
for(let element of boxes){
    // console.log(e);
    let boxtext = element.querySelector(".boxtext");
    // console.log(boxtext);
    element.addEventListener('click',()=>{
        clickAudio.play();
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            
            changeTurn();
            checkWin();
            if(!gameover) document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
        }
    })
} 
// Array.from(boxes).forEach(element =>{
//     let boxtext = document.querySelector(".boxtext");
//     console.log(boxtext);
// })

//adding event listener to reset button
const reset = document.getElementById("reset");
reset.addEventListener("click",()=>{
    const boxtext = document.getElementsByClassName("boxtext");
    gameoverAudio.play();
    for(let element of boxtext){
        element.innerText="";
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width=0;
        document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
        document.querySelector(".line").style.display="none";
        document.querySelector(".line").style.width="0";
        gameover=false;
    }
})