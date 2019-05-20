var b1;
var b2;
var b3;
var b4;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,250,300,35);
	b1.setText("Throw it from the fifth floor to the ground.");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,300,300,35);
	b2.setText("Use a pickaxe instead of a hammer.");
	b2.setTextOver("GO");
	b2.setButtonOverFill(255,255,50);

	b3 = new Button(10,350,300,35);
	b3.setText("Run it over with a car.");
	b3.setTextOver("GO");
	b3.setButtonOverFill(255,255,50);

	b4 = new Button(10,400,300,35);
	b4.setText("Keep using the hammer.");
	b4.setTextOver("GO");
	b4.setButtonOverFill(255,255,50);

}

function draw()
{
	background(175,175,175);
	fill(255,20,60);
	textSize(12);
	text("Answer for Q2: Multiply one side by another to gain the area of a rectangle.",10,30);
	textSize(17);
  text("Bob is trying to break a sphere with a hammer to no avail.",10,90);
	text("What is something he should do to ensure that it breaks?",10,120);
	fill(0,0,0);
	textSize(14);
	b1.showButton();
	b2.showButton();
	b3.showButton();
	b4.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../wrong/wrong.html","_self");
	}
	if (b2.getButtonState() == 1)
	{
		window.open("../levelfour/lvfour.html","_self");
	}
	if (b3.getButtonState() == 1)
	{
		window.open("../wrong/wrong.html","_self");
	}
	if (b4.getButtonState() == 1)
	{
		window.open("../wrong/wrong.html","_self");
	}
}
