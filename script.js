const choices = ['Rock', 'Paper', 'Scisors'];

function computerPlay() {
	// Should choose randomly from rock, paper, scissors.

}

function choose(choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

console.log(choose([1, 2, 3]));