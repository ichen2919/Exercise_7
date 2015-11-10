//exercise 7: parsing data and then representing it visually
//representing the weather of a city visually

//Learning Processing by Daniel Shiffman, Daniel Shiffman's YouTube p5.js series

var city;
var x  = 75;
var y = 400;
var topWall = 75;
var bottomWall = 325;
var leftWall = 75;
var rightWall = 325;
//var speed = city.wind.speed;
//var speedLines=0;

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

	//lines in background that represent wind speed
	for(var i = 10; i < width; i += 10) { 
    	/*speedLines=speedLines+10;
    	if(speedLines>600){
   		speedLines=0;
   		}*/
   		y -= (city.wind.speed / 4);

    	stroke(75);
      	line(i, y + 200, i, y);

      	if(y < 0){
   			y = 400;
   		}
      	//line(i + 5, y + 300, i + 5, y + 100);
    	 
    }

	if(city){
		//ball represents the stats of the city
  	

		//constrain example on processing.org and p5js.org
		//rectangle that contains the ball
		noStroke();
		fill(125);
		rectMode(CORNERS);
		rect(leftWall - city.main.temp / 4, topWall - city.main.temp / 4, rightWall + city.main.temp / 4, bottomWall + city.main.temp / 4);
		var cityX = constrain(x, leftWall, rightWall);
  		var cityY = constrain(mouseY, topWall, bottomWall);

		//ball moves at wind speed
		//var wind = city.wind.speed;
		move();
		bounce();
		
		//draw of ball
  		noStroke();
		fill(255);
		ellipse(cityX, cityY, city.main.temp /2, city.main.temp /2);
	}

} //function draw()

function move(){
	x = x + city.wind.speed;
	
} //function move(speed)

function bounce(){
    if ((x > rightWall) || (x < leftWall)){
        city.wind.speed = city.wind.speed * -1;
    }
} //function bounce(speed)

