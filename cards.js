console.log("cards.js")


let inputText = document.getElementById("inputText").value;
console.log(inputText);

let cardButton = document.getElementById("cardButton");

let cardHolder = document.getElementById("cardHolder");

cardButton.addEventListener("click", createCard);

let cardID = 0;

function createCard () {
	console.log("Card Create button clicked!");
	console.log("cardID going into function:", cardID);
	let cardName = "card" + cardID;
	console.log("cardName when card created:", cardName);
	cardHolder.innerHTML += `<div class="card" id="${cardName}">
								<p>cardName: ${cardName}</p>
								<p>${inputText}</p>
								<br>
								<button id="${cardID}">Delete Card</button>
								<p>${cardID}</p>
							</div>`

	

// onclick="getCardInfo(event)"

// 
	// document.getElementById()

	cardID += 1;
	console.log("cardID after card creation:", cardID);

	appendEventListener();
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

let theCards = document.getElementsByClassName("card");

function appendEventListener() { 

	let counterLength = theCards.length;

	console.log("counterLength", counterLength);

	for (let i = 0; i < counterLength; i++) {
		console.log("i", i);
		theCards.item(i).addEventListener("click", function(event) {
			console.log("delete button on card clicked");
			someThing = event.target.parentElement.id;
			console.log("target something:", someThing);
			document.getElementById(someThing).classList.add("turnred");
			// testFunction();
		});
	}
}

// function testFunction (event) {
// 	console.log("testFunction also triggered");
// 	console.log("event.target.id", event.target.id);
// 	// document.getElementById
// }