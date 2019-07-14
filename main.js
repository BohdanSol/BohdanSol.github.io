var items = 50;
var colors = [ 'red', 'green', 'blue' ];
for (var i = 0; i <= items; i++) {
	var color = colors[Math.ceil(Math.random() * 3 - 1)];
	var moveVal = Math.ceil(Math.random() * 50);
	var posVal = Math.ceil(Math.random() * 50);
	var scaleVal = Math.ceil(Math.random() * 10 + 2);
	var shakeVal = Math.ceil(Math.random() * 5);
	var stretch = Math.ceil(Math.random() * 5);
	$('.field').append(
		'<div class="move' +
			moveVal +
			' pos' +
			posVal +
			'"><div class="scale' +
			scaleVal +
			'"><div class="item shake' +
			shakeVal +
			' color-' +
			color +
			'"><span class="item stretch' +
			stretch +
			'"></span></div></div>'
	);
}
