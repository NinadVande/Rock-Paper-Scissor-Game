let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".circle");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score"); 
let compScorePara = document.querySelector("#comp-score"); 

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `YoU WiN! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YoU LosE. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    msg.innerText = "GameE WaS DraW.PlaY AgaiN"
    msg.style.backgroundColor = "#FFCC4D";
}
const playGame =(userChoice) =>{
    
    //generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin = compChoice ==="paper"? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice ==="scissors"? false :true;
        }else{
            //rock,paper
            userWin = compChoice ==="rock" ? false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((circle)=>{
    circle.addEventListener("click",() =>{
        const userChoice = circle.getAttribute("id");
       playGame(userChoice);
    })
})