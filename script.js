const playOptions = ['rock', 'paper', 'scissors'];

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

function getPlayerChoice() {
	let choice;

	do {
		choice = prompt("Please enter choice: Rock, Paper, Scissors").toLowerCase();
		if (!playOptions.includes(choice)) {
			alert('Value is not a valid choice')
		}
	} while (! playOptions.includes(choice));
	return choice;
}

function game() {
	// Play five rounds and keep score
	let computerScore = 0;
	let playerScore = 0;

	for (let i = 0; i< 5; i++) {
		// console.log(playRound(getPlayerChoice(), computerPlay()));
		let result = playRound(getPlayerChoice(), computerPlay());
		console.log(result);
		if (result.includes('win')) {
			playerScore++;
		} else if (result.includes('lose')) {
			computerScore++;
		}
	}

	if (playerScore > computerScore) {
		console.log('Player Wins');
	} else if (computerScore > playerScore) {
		console.log('Computer wins');
	} else {
		console.log("Game tie");
	}

	console.log(`Computer score: ${computerScore}`);
	console.log(`Player Score: ${playerScore}`);

}

game();

// getPlayerChoice();