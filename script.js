const playOptions = ['rock', 'paper', 'scissors'];
const choiceBtns = document.querySelectorAll('.choices__button');
const nextRoundBtn = document.getElementById('next-round');
const replayBtn = document.getElementById('replay');

// Screen sections visible at different points during gameplay.
const gameScreen = document.getElementById('game');
const playScreen = document.getElementById('choices-wrapper');
const roundResultScreen = document.getElementById('round-results');
const resultScreen = document.getElementById('winner-screen');

const resultWrapper = document.getElementById('results');
const resultDisplay = document.getElementById('result-text');
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
					return "It's a tie";
				case 'paper': 
					return "You lose";
				case 'scissors':
					return "You win";
				default:
					return "Something went wrong";
			};
		case 'paper':
			switch (computerSelection) {
				case 'rock':
					return "You win";
				case 'paper': 
					return "It's a tie";
				case 'scissors':
					return "You lose";
				default:
					return "Something went wrong";
			};
		case 'scissors':
			switch (computerSelection) {
				case 'rock':
					return "You lose";
				case 'paper': 
					return "You win";
				case 'scissors':
					return "It's a tie";
				default:
					return "Something went wrong";
			};
	}
}


function handleClick(choice) {
	// Use the button as user's input for playRound
	let computerChoice = computerPlay();
	let result = playRound(choice, computerChoice);

	playScreen.dataset.visible = 'false';

	resultDisplay.innerHTML	= result;

	// create the divs to show the choices 
	const playerMove = document.createElement('div');
	playerMove.classList.add('moves__display', `moves__display--${choice}`);
	document.querySelector('#player-move').prepend(playerMove);

	const computerMove = document.createElement('div');
	computerMove.classList.add('moves__display', `moves__display--${computerChoice}`, 'moves__display--computer');
	document.querySelector('#computer-move').prepend(computerMove);

	// Set a timeout to bring in the opacity
	setTimeout(() => {
		playerMove.classList.add('appear');
	})

	setTimeout(() => {
		computerMove.classList.add('appear');
	}, 400)

	setTimeout(() => {
		resultWrapper.classList.add('appear');
	}, 800)

	roundResultScreen.dataset.visible = 'true';

	// Check for winners of the round
	if (result.includes('win')) {
		playerScore++;
	} else if (result.includes('lose')) {
		computerScore++;
	}

	setTimeout(updateBoard, 1400)
	// updateBoard();


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
// create the divs in here?
}

// maybe a toggle results function
function hideResults() {
	roundResultScreen.dataset.visible = 'false';
	playScreen.dataset.visible = 'true';

	const moves = document.querySelectorAll('.moves__display');

	moves.forEach(move => {
		move.remove();
	})
}

nextRoundBtn.onclick = hideResults;


function updateBoard() {
	playerScoreDisplay.innerHTML = playerScore;
	computerScoreDisplay.innerHTML = computerScore;
}