

var CarLot = (function () {
	var inventory = [];

	return {

	getInventory: function () {
			console.log("go");
			//return inventory;
		},

	loadInventory: function (someLaterFunction) {
		var inventoryLoader = new XMLHttpRequest();
		inventoryLoader.addEventListener("load", function(){
			// this.reponseText is a string
			inventory = JSON.parse(this.responseText).cars;
			console.log(inventory);
			// now this is the same as the function populatePage
			someLaterFunction(inventory)
		});
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();
	}

	}

}());

CarLot.getInventory();
