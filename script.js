const playOptions = ['rock', 'paper', 'scissors'];
const choiceBtns = document.querySelectorAll('.choices__button');
const replayBtn = document.getElementById('replay');

const gameScreen = document.getElementById('game');
const resultScreen = document.getElementById('winner-screen');

const resultDisplay = document.getElementById('round-results');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

const overallScoreDisplay = document.getElementById('scores');
const endMessage = document.getElementById('display');

let playerScore = 0;
let computerScore = 0;

choiceBtns.forEach(btn => {
	btn.onclick = () => {
		handleClick(btn.dataset.value);
	}
});

function computerPlay() {
	// Should choose randomly from rock, paper, scissors.
	return choose(playOptions);
}

function choose(choices) {
	// chooses a random option from a list of options
	let index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

function playRound(playerSelection, computerSelection){
	// Declares a winner based on playerSelection and computerSelection
	switch (playerSelection.toLowerCase()) {
		case 'rock':
			switch (computerSelection) {
				case 'rock':
					return "It's a tie!";
				case 'paper': 
					return "You lose! Paper beats Rock";
				case 'scissors':
					return "You win! Rock beats Scissors";
				default:
					return "Something went wrong";
			};
		case 'paper':
			switch (computerSelection) {
				case 'rock':
					return "You win! Paper beats Rock";
				case 'paper': 
					return "It's a tie!";
				case 'scissors':
					return "You lose! Scissors beats Paper";
				default:
					return "Something went wrong";
			};
		case 'scissors':
			switch (computerSelection) {
				case 'rock':
					return "You lose! Rock beats Scissors";
				case 'paper': 
					return "You win! Scissors beats Paper";
				case 'scissors':
					return "It's a tie!";
				default:
					return "Something went wrong";
			};
	}
}


function handleClick(choice) {
	// Use the button as user's input for playRound
	let computerChoice = computerPlay();
	let result = playRound(choice, computerChoice);

	resultDisplay.innerHTML	= result;

	// Check for winners of the round
	if (result.includes('win')) {
		playerScore++;
	} else if (result.includes('lose')) {
		computerScore++;
	}

	updateBoard();


	// Check for overall winners
	if (playerScore >= 5 || computerScore >= 5) {
		declareWinner()
	}

}

function declareWinner() {
	// hide current scores and round results
	overallScoreDisplay.innerHTML = `Score: ${playerScore} : ${computerScore}`;
	endMessage.innerHTML = playerScore > computerScore ? 'You win' : 'You lose';
	// playerScore = 0;
	// computerScore = 0;

	gameScreen.dataset.visible = 'false';
	resultScreen.dataset.visible = 'true';
}

replayBtn.onclick = resetBoard;

function resetBoard() {
	playerScore = 0;
	computerScore = 0;
	resultDisplay.innerHTML = '';
	updateBoard();
	resultScreen.dataset.visible = 'false';
	gameScreen.dataset.visible = 'true';
}

function showResults() {

}


function updateBoard() {
	playerScoreDisplay.innerHTML = playerScore;
	computerScoreDisplay.innerHTML = computerScore;
}