// variables for creating a string.
var blob = "";
var word = "";

// display the encrypted text.
var input = document.querySelector("#input");
// display the decrypted text.
var output = document.querySelector("#decoded");
// button to display decrypted text.
var decoder = document.querySelector("#decoder");
// button to hide the text after.
var hide = document.querySelector("#hide");

// Event Listeners.

hide.addEventListener("click", hideText);

decoder.addEventListener("click", decode);

// Listen to any, "keypress" event in the window.
addEventListener('keypress', function(event) {

	// if the key pressed is a, "space character" start a new word.
	if (event.code == "Space") {
		word += " ";
	} else {
		word += String.fromCharCode(event.charCode+1);
	}

	// display text on the webpage.
	input.innerText = word;

});

function decode() {
	var newStr = "";
	output.hidden = false;
	for (var i = 0; i <= word.length - 1; i++) {
		if (word[i] == " ") {
			newStr += " ";
		} else {
			newStr += String.fromCharCode(word.charCodeAt(i)-1);
		}
	}
	output.innerText = newStr;
}

function hideText() {
	output.hidden = true;
}
