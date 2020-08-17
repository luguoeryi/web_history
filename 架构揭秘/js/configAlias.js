seajs.config({
	alias : {
		'jQuery' : './js/jquery-1.11.3.min.js',
		'seatext' : 'seajs-text.js',
		'main' : './js/main.js',
		'homeIn' : './homeIn.js',
		'homeOut' : './homeOut.js',
		'studentIn' : './studentIn.js',
		'studentOut' : './studentOut.js',
		'messageIn' : './messageIn.js',
		'messageOut' : './messageOut.js',
		'handlebars' : '../handlebars/handlebars-v4.0.5.js'
	},
	preload : ['jQuery','seatext']
});