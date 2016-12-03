$(document).ready(function(){

	var object = {
		luke : {
			name : "Luke Skywalker",
			health : 120,
			attack : 25,
			attackAddend : 10,
			counter : 25,
			side : "light"
		},

		vader : {
			name : "Darth Vader",
			health : 120,
			attack : 25,
			attackAddend : 10,
			counter : 25,
			side : "dark"
		}
	}

	var player = "";
	var opponent = "";


	function drawDiv() {
		var newDiv = $("<div id='modal'>");
		$('#container').append(newDiv);
	}

	drawDiv();


}); // document.ready