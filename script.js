//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height;
	}
	get height(){
		return this._height;
	}
	get width(){
		return this._width;
	}
	getArea(){
		return this.width
	}
}

class Square extends Animal {}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
