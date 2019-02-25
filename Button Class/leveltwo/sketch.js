var b1;
var b2;
var b3;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,100,150,35);
	b1.setText("1072");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,150,150,35);
	b2.setText("1100");
	b2.setTextOver("GO");
	b2.setButtonOverFill(255,255,50);

	b3 = new Button(10,200,150,35);
	b3.setText("1102");
	b3.setTextOver("GO");
	b3.setButtonOverFill(255,255,50);

}

function draw()
{
	background(175,175,175);
	fill(255,20,60);
	textSize(28);
  text("This rectangle has sides of 38cm and ",10,30);
	text("29cm respectively. What is its area?",10,60);
	fill(225,220,160);
	rect(180,100,290,199);
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
		window.open("../index.html","_self");
	}
}
