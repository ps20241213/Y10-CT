var b1;
var b2;
var b3;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,200,150,35);
	b1.setText("1072");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,250,150,35);
	b2.setText("1100");
	b2.setTextOver("GO");
	b2.setButtonOverFill(255,255,50);

	b3 = new Button(10,300,150,35);
	b3.setText("1102");
	b3.setTextOver("GO");
	b3.setButtonOverFill(255,255,50);

}

function draw()
{
	background(175,175,175);
	fill(255,20,60);
	textSize(12);
	text("Answer for Q1: Using the quadratic equation, one could graph it",10,30);
	text("on a GDC. Press G-SOLV to find the X-roots.",10,60);
	textSize(20);
  text("This rectangle has sides of 38cm and ",10,90);
	text("29cm respectively. What is its area?",10,120);
	fill(225,220,160);
	rect(200,140,250,200);
	fill(0,0,0);
	textSize(14);
	b1.showButton();
	b2.showButton();
	b3.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../wrong/wrong.html","_self");
	}
	if (b2.getButtonState() == 1)
	{
		window.open("../wrong/wrong.html","_self");
	}
	if (b3.getButtonState() == 1)
	{
		window.open("../levelthree/lvthree.html","_self");
	}
}
