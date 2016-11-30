var colors = ['#3ED81F','#962E30']; // Defining the colors here, can be html name of color, hex, rgb or anything what we can use in CSS
var colorss = ['#962E30','#3ED81F'];
var active = 0;
setInterval(function(){ 
	document.querySelector('.header').style.background = colors[active];
	document.querySelector('.rightpannel').style.background = colorss[active];
    active++;
    if (active == colors.length && active == colorss.length) active = 0;
}, 3000); 	
