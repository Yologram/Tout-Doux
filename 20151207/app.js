$(document).ready(function(){
	/*
		Si tu penses être payé à la ligne, c'est raté.
		En sauter autant, n'augmentera pas ta paye ;).

		Du coup, ca diminue le code visible sur une fenêtre
		et diminue sa lisiblité.
	*/

	$('ul').on('click','[type="checkbox"]',function(){

		$(this).parent('li').toggleClass('done');

	});

	$('form').on('submit', function(event){

		event.preventDefault();

		var toAdd = $("input[name=toutdoux]").val();

		$(".list").append('<li class="item"><INPUT type="checkbox">' + toAdd + '</li>');

	$("#button").click(function(){

		var toAdd = $("input[name=toutdoux]").val();

		$(".list").append('<li class="item"><INPUT type="checkbox">' + toAdd + '</li>');

	});

});

	$('#All').click(function(){

		$('.item').show();

		$('.done').show();

	});

	$('#Completed').click(function(){

		$('.item').hide();

		$('.done').show();

	});

	$('#Active').click(function(){

		$('.item').show();

		$('.done').hide();
		
	});

	$('#ClearCompleted').click(function(){

		$('.item').show();

		$('.done').remove();

	});

	$('#ClearAll').click(function(){

		$('.item').remove();

		$('.done').remove();

	});

	function compteur() {

		var compte=$('.item:not(.done)').length;

		$('#list').text(compteur+" "+"Taches Restantes");

	};

	// Utile ou inutie à garder ?

	/*$('.list').on('click', 'li', function(){

		$(this).remove()

	});*/

});