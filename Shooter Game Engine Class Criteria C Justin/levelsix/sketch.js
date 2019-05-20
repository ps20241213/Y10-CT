var b1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,200,300,35);
	b1.setText("RETURN TO HOME");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

}

function draw()
{
	background(175,175,175);
	fill(255,20,60);
	textSize(17);
	text("Answer for Q5: Divide $60 by 4 to get the cost per person,",10,20);
	text("then divide it by 3 to get the cost per person per day",10,40);
	text(", which should be $5. Then, multiply the $5 by 5 for the 5 hikers',",10,60);
	text("per person cost, then by 7 to get the total cost for 7 days.",10,80);
	text("This value (5x5x7) should be $175.", 10,100);

	fill(105,100,80);
	textSize(17);
	text("WELL DONE! YOU HAVE COMPLETED THE WARM-UP!", 10,160);

	textSize(14);
	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../buttonList/buttonList.html","_self");
	}
}
