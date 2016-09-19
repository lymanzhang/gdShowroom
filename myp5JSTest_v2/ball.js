function ball(x, y, r){
	this.x = x;
	this.y = y;
	this.r = r;

	this.display = function(){
		ellipse(this.x, this.y, this.r, this.r);
	}
}