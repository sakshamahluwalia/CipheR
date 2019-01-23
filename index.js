// variables for creating a string.
var blob = " ";
var word = " ";

var input = document.querySelector("#input");

// Listen to any, "keypress" event.
addEventListener('keypress', function(event) {

	word += event.key + 1;


	// if the key pressed is a, "space character" start a new word.
	if (event.code == "Space") {
		blob = word + " ";
	}

	// input.text = word;
	console.log(blob);

});

// sets the variables, 'word' to the empty string.
function reset() {
	word = " ";
}


function decode(str) {
	var newStr = "";
	for (var i = 0; i <= str.length - 1; i++) {
		newStr += parseInt(str[i]) - 1;
	}
}