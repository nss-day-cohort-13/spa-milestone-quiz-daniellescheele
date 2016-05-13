


function populatePage (inventory) {
	console.log("populate page called", inventory );

  var HTMLString = "";
  // CarLot.setBorderColor = function(color);

  for (var i = 0; i < inventory.length; i++) {
	  // HTMLString += "<div>" + inventory[i] + "</div>"
	  HTMLString += `<div id="${inventory[i].id}" class="col-lg-3 col-md-5 col-sm-5 col-xs-12 card" style="border-color:${inventory[i].color}">
			<h2>${inventory[i].make} ${inventory[i].model}</h2>
			<p><h4>Year</h4>${inventory[i].year}</p>
			<p><h4>Price</h4>${inventory[i].price}</p>
			<p id="borderColor"><h4>Color</h4>${inventory[i].color}</p>
			<span id="description"><h4>Description</h4> ${inventory[i].description}</span>
			<article id="availabilty"><h2>Availabile</h2></article></div>
			<div class="col-xs-1"></div>`

			 // inventory[i].style.border-color = inventory[i].color
	}


  // add the HTMLString to the DOM
  var cardHolder = document.getElementById("cards")
  cardHolder.innerHTML = HTMLString;
  // var borderColor = document.getElementById("borderColor");
  // CarLot.setBorderColor = function(inventory)
  // 	for (var i = 0; i < inventory.length; i++) {
  // 		borderColor += inventory[i].color
  // 		console.log(borderColor)
  // 	}


	CarLot.activateEvents();
}

CarLot.loadInventory(populatePage);
