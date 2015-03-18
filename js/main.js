
//On scroll call the draw function
$(window).scroll(function() {
	drawLines();
});

//If you have more than one SVG per page this will pick it up
function drawLines(){
	$.each($("path"), function(i, val){
		var line = val;
		drawLine($(this), line);
	});
}

//draw the line
function drawLine(container, line){
	var length = 0;
	var pathLength = line.getTotalLength();
	var distanceFromTop = container.offset().top - $(window).scrollTop();
	var percentDone = 1 - (distanceFromTop / $(window).height());
	length = percentDone * pathLength;
	line.style.strokeDasharray = [length,pathLength].join(' ');
	console.log("strokeDasharray: "+[length,pathLength].join(' '));
}
