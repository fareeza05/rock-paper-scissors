let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score'); // dom variable
const computerScore_span = document.getElementById('computer-score'); // dom variable
const scoreBoard_div = document.querySelector('.scoreboard'); //dom variable
const result_p = document.querySelector('.announcement > p'); // dom variable
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

// ^ cashing the dom -> storing for future use.

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    let i = Math.floor(Math.random() * 3);
    return choices[i];
}

function convertToWord(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return 'Paper';
    else return "Scissors";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`
    userChoice_div.classList.add('green');
    setTimeout(function() {userChoice_div.classList.remove('green')}, 300);


}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost...!`
    userChoice_div.classList.add('red');
    setTimeout(function() {userChoice_div.classList.remove('red')}, 300);

}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`
    userChoice_div.classList.add('gray');
    setTimeout(function() {userChoice_div.classList.remove('gray')}, 300);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
            }
    }




function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();