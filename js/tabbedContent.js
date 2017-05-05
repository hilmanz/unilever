
jQuery(document).ready(function(){
	jQuery(".nav a").click(function(){
		var targetID = jQuery(this).attr('href');
		jQuery(".nav a").removeClass("active");
		jQuery(this).addClass("active");
		jQuery(".theContent").animate({top: "-620px"});
		jQuery(targetID).animate({top: "0px"});
		
		return false;
	});
});