var CarLot = (function(oldCarLot) {

	oldCarLot.activateEvents = function() {
		var card = document.getElementsByClassName("card");
		var userInput = document.getElementById("userInput");
		var currentCard = "";



		console.log(card);
		for (var i = 0; i < card.length; i++) {
			card[i].addEventListener("click", function(event){
				console.log("event",event.currentTarget);
				currentCard = event.currentTarget;
				userInput.focus();
				userInput.value = "";
				console.log("called");
				CarLot.changeBorder(currentCard, "blue");
				console.log("also called");
			})
		};
			userInput.addEventListener("keyup", function(event){
				oldCarLot.editDescription(currentCard);
				console.log("currentCard", currentCard);
			});


		oldCarLot.editDescription = function(currentCard) {
	 		console.log("hey there", currentCard)
			var description = currentCard.getElementsByTagName("span")
			console.log("description",description);
			description[0].innerHTML = "<h4>" + "Description " + "</h4>" + userInput.value;
		};

			var soldButton = document.getElementById("sold");
			soldButton.addEventListener("click", function(event){
				oldCarLot.isCarSold(currentCard);
				console.log("button yo");

			});

		oldCarLot.isCarSold = function(currentCard) {
			console.log("currentCard", currentCard);
			var purchaseHolder = currentCard.getElementsByTagName("article")
				console.log("look here", purchaseHolder);
				purchaseHolder[0].innerHTML = "<h2>"+ "SOLD" + "</h2>";

		};
 };

	return oldCarLot;
}(CarLot || {}));
