$(document).ready(function(){


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

	/*$('.list').on('click', 'li', function(){

		$(this).remove()

	});*/

});