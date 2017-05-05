
$(window).load(function(){
	
	function moveAmplopBiru(){
		$('#slide1').delay(200).animate({'top':'-=400'},100).delay(0)
		.animate({'left':'-=450','top':'-=50',rotate: '-=90deg', opacity:1},0,function(){
			setTimeout(moveAmplopBiru,1000);
		});
	}
	// Run the functions when the document and all images have been loaded. 
	moveAmplopBiru();
});
