$(document).ready(function(){


	var player = "";
	var opponent = "";
	var opponentHealth;
	var playerHealth;
	var playerAttack;


	$('.card').on("click", function() {
		if (player == "") {
			player = $(this);
			playerHealth = player.attr('value');
			console.log("playerHealth = " + playerHealth);
			playerAttack = player.data('attack');

			$(this).detach();
			$("#player").append(this);
			var en = $('#chooser');
			en.detach()
			$('#enemies').append(en);
		} else if ((opponent == "") && ($(this).attr('name') != player.attr('name'))) {
			opponent = $(this);
			opponentHealth = opponent.attr('value');
			console.log("opponentHealth = " + opponentHealth);
			$(this).detach();
			$("#opponent").append(this);
			$('#display').html("");

		}
	});

	$('#attack').on("click", function() {
		if ((player != "") && (opponent != "")) {
			console.log("attack");
			opponentHealth -= playerAttack;
			$('#display').html("<p>You have inflicted " + playerAttack + " points damage to " + opponent.attr('name') + ".</p>");
			console.log("opponentHealth = " + opponentHealth);
			$('#opponent .health').text(opponentHealth);
			if (opponentHealth <= 0) {
				$('#display').html("<p>You have defeated " + opponent.attr('name') + ". Select another enemy to attack.</p>");
				$(opponent).remove();
				opponent = "";
				if (document.querySelector('#chooser').innerHTML.trim() === "") {
					$('#display').html("<p>CONGRATULATIONS! You have vanquished all adversaries.</p>")
					console.log("winner");
					var restart = $('<button>').text('restart').attr('id', 'restart');
					$('#container').append(restart);
				}
			} else {
				playerHealth -= opponent.data('attack');
				$('#display').append("<p>You have incurred " + opponent.data('attack') + " points damage.</p>");
				console.log("playerHealth = " + playerHealth);
				$('#player .health').text(playerHealth);
			}

			console.log(playerAttack);
			playerAttack += player.data('addend');

			if (playerHealth <= 0) {
				$('#display').html("<p>" + opponent.attr('name') + " has defeated you. GAME OVER!!!</p>");
				console.log('You lose');
				player = "";
				var restart = $('<button>').text('reset').attr('id', 'restart');
				$('#container').append(restart);
			}

		}


		$('#restart').on("click", function() {
			location.reload();
		});

	});

}); // document.ready