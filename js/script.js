$( document ).ready(function() {
 

	$( "a" ).click(function( event ) {
	  event.preventDefault();
	  
	});

	$( ".readmore a" ).click(function() {
	  $(".hide").slideDown();
	  $(".readmore").hide();
	  
	});



	$( ".hide a" ).click(function( event ) {
	  event.preventDefault();
	  
	});

	$( ".hide a" ).click(function() {
	  $(".hide").hide();
	  $(".readmore").show();
	
	});


	$(".learnmore").click(function(){
		$("#learnmoretext").slideDown();
		$(".learnmore").hide();
		
	});


});