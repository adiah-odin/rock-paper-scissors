const playOptions = ['Rock', 'Paper', 'Scisors'];

function computerPlay() {
	// Should choose randomly from rock, paper, scissors.
	return choose(playOptions);
}

function choose(choices) {
	let index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

console.log(computerPlay());