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
		blob += word;
		reset();
	} else {
		word += String.fromCharCode(event.charCode+1);
	}

	// display text on the webpage.
	input.innerText = blob;

});

function decode() {
	var newStr = "";
	for (var i = 0; i <= blob.length - 1; i++) {
		if (blob[i] == " ") {
			newStr += " ";
		} else {
			newStr += String.fromCharCode(blob.charCodeAt(i)-1);
		}
	}
	output.innerText = newStr;
}

function hideText() {
	output.hidden = true;
}

// sets the variables, 'word' to the empty string.
function reset() {
	word = " ";
}