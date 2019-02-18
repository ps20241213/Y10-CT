var b1;

function setup()
{
	createCanvas(500,500);
	//dimensions and size
	b1 = new Button(10,10,100,25);
	b1.setText("Button Menu"); //default look
	b1.setTextOver("GO");//when you move mouse over it
	b1.setButtonOverFill(50,255,50);
}

function draw()
{
	background(255,255,255);

	b1.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("buttonList/buttonList.html","_self");
	}
}
