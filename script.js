$(document).ready(function() {

	// #links smooth scroll
	$('a').click(function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1500);
		return false;
	});
	// End of smooth scroll

	console.log($('html').scrollTop());

	window.onscroll = changePos;

	function changePos() {
		var header = document.getElementById("topnav");
		var sectionMargin = document.getElementById("section2");
		if ($('html').scrollTop() > 800) {
			console.log($('html').scrollTop());
			header.style.position = "fixed";
			header.style.top = "0px";
			sectionMargin.style.paddingTop = "58px";

		}else{
			header.style.position = "relative";
			header.style.top = "0";
			sectionMargin.style.paddingTop = "10px";
		}
	}

});


