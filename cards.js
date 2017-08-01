console.log("cards.js");

let cardCreateButton = document.getElementById("cardCreateButton");
cardCreateButton.addEventListener("click", createCard);

let cardHolder = document.getElementById("cardHolder");

function createCard () {

	let cardText = document.getElementById("inputText").value;

	cardHolder.innerHTML += `<div class="card">
								<p>${cardText}</p>
								<br>
								<button class="deleteButton">Delete Card</button>
								<p></p>
							</div>`

	document.getElementById("inputText").value = "";
}



document.querySelector("body").addEventListener("click", function(event) {
	let nodeToDelete = event.target.parentElement;
	if (event.target.classList.value === "deleteButton"){
	cardHolder.removeChild(nodeToDelete);
	}
});
