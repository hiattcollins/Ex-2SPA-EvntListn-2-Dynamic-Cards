console.log("cards.js");

// let cardText = document.getElementById("inputText").value;


let cardCreateButton = document.getElementById("cardCreateButton");

let cardHolder = document.getElementById("cardHolder");

cardCreateButton.addEventListener("click", createCard);

let cardID = 0;

function createCard () {


	let cardText = document.getElementById("inputText").value;
	console.log(cardText);

	console.log("Card Create button clicked!");
	console.log("cardID going into function:", cardID);
	let cardName = "Card No. " + cardID;
	console.log("cardName when card created:", cardName);
	cardHolder.innerHTML += `<div class="card">
								<p>${cardName}</p>
								<p>${cardText}</p>
								<br>
								<button class="deleteButton">Delete Card</button>
								<p></p>
							</div>`

	document.getElementById("inputText").value = "";

// onclick="getCardInfo(event)"

// 
	// document.getElementById()
	

	cardID += 1;
	console.log("cardID after card creation:", cardID);
	// cardToAppend = cardID - 1;
	// appendEventListener(cardToAppend);
}


// function getCardInfo(event) {
// 	console.log("getCardInfo triggered")
// 	// console.log("event.target.id", event.target.id);
// 	console.log("incoming info:", event);
// 	// document.getElementById(event).classList.add("turnred");
// 	someThing = event.target.parentElement.id;
// 	console.log("target something:", someThing);

// 	document.getElementById(someThing).classList.add("turnred");
	// cardToDelete = "card" + Number(event);
	// console.log("cardToDelete", cardToDelete);
	// var toCut = document.getElementById(cardToDelete);
	// console.log(toCut);
	// toCut.classList.add("turnred");

// }

// div#0.card

// let theCards = document.getElementsByClassName("card");

// function appendEventListener(input) { 

// 	// let numberofCardID = Number(input);
// 	let cardDeleteButton = document.getElementById(input);

// 	cardDeleteButton.addEventListener("click", function(event) {
// 			console.log("delete button on card clicked");
// 			// console.log("theCards.item(i)", theCards.item(i));
// 			someThing = event.target.parentElement.id;
// 			console.log("target something:", someThing);
// 			document.getElementById(someThing).classList.add("turnred");
// 			testFunction(someThing);
// 	});

	// let counterLength = theCards.length;

	// console.log("counterLength", counterLength);

	// for (let i = 0; i < counterLength; i++) {
	// 	console.log("i", i);

	// 	console.log("document.getElementById(i)", document.getElementById(i));

	// 	console.log("theCards.item(i)", theCards.item(i));

	// 	let cardDeleteButton = document.getElementById(i);

	// 	cardDeleteButton.addEventListener("click", function(event) {
	// 		console.log("delete button on card clicked");
	// 		// console.log("theCards.item(i)", theCards.item(i));
	// 		someThing = event.target.parentElement.id;
	// 		console.log("target something:", someThing);
	// 		document.getElementById(someThing).classList.add("turnred");
	// 		testFunction(someThing);
	// 	});
	// }
// }

document.querySelector("body").addEventListener("click", function(event) {
  console.log("event", event);
  // console.log("event.target.id", event.target.id);
  // console.log("event.target.getElementId('deleteButton')", event.target.getElementById("deleteButton"));
  someThing = event.target.parentElement;
  	console.log("event.target.tagName", event.target.tagName);
  	console.log("event.target.classList.value", event.target.classList.value);
	console.log("target something:", someThing);
	// let nodeToDelete = document.getElementById(someThing);
	let nodeToDelete = event.target.parentElement
	console.log("nodeToDelete", nodeToDelete);

	if (event.target.classList.value === "deleteButton"){
	cardHolder.removeChild(nodeToDelete);
		console.log("deleteButton triggered");
	}
});



// function testFunction (input) {
// 	console.log("testFunction also triggered");
// 	console.log("someThing sent from the event listener", input);
// 	console.log("document.getElementById(input)", document.getElementById(input));
// 	let nodeToDelete = document.getElementById(input);
	// console.log("nodeToDelete", nodeToDelete);
	// cardHolder.removeChild(nodeToDelete);
	// console.log("event.target.id", event.target.id);
	// document.getElementById
// }