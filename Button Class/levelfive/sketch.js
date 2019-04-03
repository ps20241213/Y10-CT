var b1;
var b2;
var b3;
var b4;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,250,300,35);
	b1.setText("$140");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,300,300,35);
	b2.setText("$75");
	b2.setTextOver("GO");
	b2.setButtonOverFill(255,255,50);

	b3 = new Button(10,350,300,35);
	b3.setText("$170");
	b3.setTextOver("GO");
	b3.setButtonOverFill(255,255,50);

	b4 = new Button(10,400,300,35);
	b4.setText("$175");
	b4.setTextOver("GO");
	b4.setButtonOverFill(255,255,50);

}

function draw()
{
	background(175,175,175);
	fill(255,20,60);
	textSize(11);
	text("Answer for Q4: The aortic valve is a valve with three cusps, located between the ",10,20);
	text("the left ventricle and the aorta. This valve is the last structure blood travels through",10,40);
	text("before it enters the general bloodstream. Its movements contribute to the sound of the heartbeat.",10,60);
	textSize(17);
  text("On a 3 day hiking trip, 4 hikers ate $60 of food.",10,90);
	text("For the same costs per person per day, how much money would",10,120);
	text("5 hikers need for food during a 7 day trip?",10,150);
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
		window.open("../wrong/wrong.html","_self");
	}
	if (b3.getButtonState() == 1)
	{
		window.open("../wrong/wrong.html","_self");
	}
	if (b4.getButtonState() == 1)
	{
		window.open("../levelsix/lvsix.html","_self");
	}
}
