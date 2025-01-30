let options = ["rock", "paper", "scissors"];
let score = 0;
let userPick = "";
let computerPick = "";
let message = "";

function reset() {
    score = 0;
    userPick = "";
    computerPick = "";
    message = "";
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("userSelection").innerHTML = "";
    document.getElementById("computerSelection").innerHTML = "";
    document.getElementById("message").innerHTML = "";
}
function makeSelection(x){
    //updates user pick based on what button is clicked
    userPick = options[x];
    //displays user pick
    document.getElementById("userSelection").innerHTML = `<img src="images/` + userPick + `.png" alt="` + userPick + `" id="` + userPick + `">`;
    //display computer pick
    computerPick = options[Math.floor(Math.random() * 3)];
    document.getElementById("computerSelection").innerHTML = `<img src="images/` + computerPick + `.png" alt="` + computerPick + `" id="` + computerPick + `">`;

    //scoring and message displays
    if (userPick == options[0]) {
        switch (computerPick) {
            case options[0]:
                document.getElementById("message").innerHTML = "Tie!";
                break;
            case options[1]:
                document.getElementById("message").innerHTML = "Computer Wins!";
                break;
            case options[2]:
                document.getElementById("message").innerHTML = "You Win!";
        }
    } else if (userPick == options[1]) {
        switch (computerPick) {
            case options[1]:
                document.getElementById("message").innerHTML = "Tie!";
                break;
            case options[2]:
                document.getElementById("message").innerHTML = "Computer Wins!";
                break;
            case options[0]:
                document.getElementById("message").innerHTML = "You Win!";
        }
    }else {
        switch (computerPick) {
            case options[2]:
                document.getElementById("message").innerHTML = "Tie!";
                break;
            case options[0]:
                document.getElementById("message").innerHTML = "Computer Wins!";
                break;
            case options[1]:
                document.getElementById("message").innerHTML = "You Win!";
        }
    }
    if(document.getElementById("message").innerHTML === "You Win!"){
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }
}