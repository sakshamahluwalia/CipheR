// variables for creating a string.
const blob = "";
const word = "";

// display the encrypted text.
const input = document.querySelector("#input");
// display the decrypted text.
const output = document.querySelector("#decoded");
// button to display decrypted text.
const decoder = document.querySelector("#decoder");
// button to hide the text after.
const hide = document.querySelector("#hide");


const decode = document.querySelector("#decode");

const decodeTextArea = document.querySelector("#decodeTextArea");

const decodedText = document.querySelector("#decodedText");

// Event Listeners.

hide.addEventListener("click", hideText);

decoder.addEventListener("click", decode);

decode.addEventListener("click", decodeText);

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
	let newStr = "";
	output.hidden = false;
	for (let i = 0; i <= word.length - 1; i++) {
		if (word[i] == " ") {
			newStr += " ";
		} else {
			newStr += String.fromCharCode(word.charCodeAt(i)-1);
		}
	}
	output.innerText = newStr;
}

// Given a word decode it and display it somewhere use (text area for input) add (event listener) display to (output div)
function decodeText() {
	let str = decodeTextArea.value
	let newStr = "";
	output.hidden = false;
	for (let i = 0; i <= str.length - 1; i++) {
		if (str[i] == " ") {
			newStr += " ";
		} else {
			newStr += String.fromCharCode(str.charCodeAt(i)-1);
		}
	}
	decodedText.innerText = newStr;

}

function hideText() {
	output.hidden = true;
	decodeText.hidden = true;
}
