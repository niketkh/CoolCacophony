var sounds = [
	'sounds/bubbles.mp3',
	'sounds/clay.mp3',
	'sounds/confetti.mp3',
	'sounds/corona.mp3',
	'sounds/dotted-spiral.mp3',
	'sounds/flash-1.mp3',
	'sounds/flash-2.mp3',
	'sounds/flash-3.mp3',
	'sounds/glimmer.mp3',
	'sounds/moon.mp3',
	'sounds/pinwheel.mp3',
	'sounds/piston-1.mp3',
	'sounds/piston-2.mp3',
	'sounds/piston-3.mp3',
	'sounds/prism-1.mp3',
	'sounds/prism-2.mp3',
	'sounds/prism-3.mp3',
	'sounds/splits.mp3',
	'sounds/squiggle.mp3',
	'sounds/strike.mp3',
	'sounds/suspension.mp3',
	'sounds/timer.mp3',
	'sounds/ufo.mp3',
	'sounds/veil.mp3',
	'sounds/wipe.mp3',
	'sounds/zig-zag.mp3'
];

var howls = [];
for(var i=0; i<sounds.length; i++){
	var howl = new Howl({src: [sounds[i]]});
	howls.push(howl);
}

var keyData = {
	a: {color: randColor(),	sound: randSound()},
	b: {color: randColor(),	sound: randSound()},
	c: {color: randColor(),	sound: randSound()},
	d: {color: randColor(),	sound: randSound()},
	e: {color: randColor(),	sound: randSound()},
	f: {color: randColor(),	sound: randSound()},
	g: {color: randColor(),	sound: randSound()},
	h: {color: randColor(),	sound: randSound()},
	i: {color: randColor(),	sound: randSound()},
	j: {color: randColor(),	sound: randSound()},
	k: {color: randColor(),	sound: randSound()},
	l: {color: randColor(),	sound: randSound()},
	m: {color: randColor(),	sound: randSound()},
	n: {color: randColor(),	sound: randSound()},
	o: {color: randColor(),	sound: randSound()},
	p: {color: randColor(),	sound: randSound()},
	q: {color: randColor(),	sound: randSound()},
	r: {color: randColor(),	sound: randSound()},
	s: {color: randColor(),	sound: randSound()},
	t: {color: randColor(),	sound: randSound()},
	u: {color: randColor(),	sound: randSound()},
	v: {color: randColor(),	sound: randSound()},
	w: {color: randColor(),	sound: randSound()},
	x: {color: randColor(),	sound: randSound()},
	y: {color: randColor(),	sound: randSound()},
	z: {color: randColor(),	sound: randSound()}
}




function randColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randSound(){
	var soundIndex = Math.floor(Math.random()*sounds.length);
	return howls[soundIndex];
}



			
