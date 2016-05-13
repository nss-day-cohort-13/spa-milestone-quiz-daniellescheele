var CarLot = (function(origcarlot) {

var cards = document.getElementsByClassName("card")

	origcarlot.reset = function(color) {
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("thickBorder", color);
		}
	};

	origcarlot.changeBorder = function(car, color) {
		origcarlot.reset(color);
		car.classList.add("thickBorder", color);
	}






	return origcarlot;

})(CarLot || {});

