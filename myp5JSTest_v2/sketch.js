var myball = [];
var lineNum = 0;

function setup(){
	createCanvas(600, 600);
	for(var i = 0; i < 10; i ++){
	  myball[i] = new ball(random(width), random(height), random(10,20));
    }
}

function draw(){
	background(51);

	for(var i = 0; i < 10; i ++){
		myball[i].display();

		for(var j = 0; j < 10; j ++){
			if(myball[j] !== myball[i]){
			    line(myball[i].x, myball[i].y, myball[j].x, myball[j].y);
			    lineNum ++;
		    }
		}
	}

	text(lineNum, 50,50);

	lineNum = 0;
}