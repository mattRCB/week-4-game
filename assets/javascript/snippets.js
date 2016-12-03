/* ON CLICK BUTTON */
$(".btn").on("click", function() {
	/* .val() METHOD FETCHES value FROM VALUE ATTRIBUTE */
    var btnVal = $(this).val();
});


/* hasClass METHOD CHECKS IF AN ELEMENT HAS THE GIVEN class */
if ($(this).hasClass("equal")) {
	$("#result").text(result);
}

/*RETURN RANDOM ELEMENT OF AN ARRAY */
function getRandomElement(arr) {
	var ind = Math.floor(Math.random()*arr.length);
	return arr[ind];
}