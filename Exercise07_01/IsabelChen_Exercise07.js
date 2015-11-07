//exercise 7: parsing data and then representing it visually
//representing the weather of a city visually

//Learning Processing by Daniel Shiffman, Daniel Shiffman's YouTube p5.js series
//using rats.js from GitHub as reference

var city;
var x  = 0;
//var speed = 1;

function setup(){
	createCanvas(400, 400);
	//get data from city's open data
	loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Portland,OR&appid=2de143494c0b295cca9337e1e96b00e0&units=imperial', gotData);

} //function setup()

function gotData(data){
	//println(data);
	city = data;
} //function gotData(data)

function draw(){
	background(0);
	noCursor();


	if(city){
		move(city.wind.speed);
		bounce(city.wind.speed);
		fill(255);
		ellipse(x, mouseY, city.main.temp /2, city.main.temp /2);

	}

} //function draw()

function move(speed){
    x = x + speed;
}

function bounce(speed){
    if ((x > width) || (x < 0)){
        speed = speed * -1;
    }
}