var b1;
var b2;
var b3;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("BACK");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,50,130,25);
	b2.setText("HOW TO PLAY");
	b2.setTextOver("GO");
	b2.setButtonOverFill(255,255,50);

	b3 = new Button(10,100,100,25);
	b3.setText("PLAY");
	b3.setTextOver("GO");
	b3.setButtonOverFill(255,255,50);

}

function draw()
{
	background(125,125,125);

	b1.showButton();
	b2.showButton();
	b3.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../index.html","_self");
	}
	if (b2.getButtonState() == 1)
	{
		window.open("../htP/htP.html","_self");
	}
	if (b3.getButtonState() == 1)
	{
		window.open("../levelone/lvone.html","_self");
	}
}
