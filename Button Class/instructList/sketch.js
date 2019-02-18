var b1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,10,100,25);
	b1.setText("BACK");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

}

function draw()
{
	background(125,125,125);

	b1.showButton();

	if (b1.getButtonState() == 1)//ihave we clicked on it?
	//0=not Pressed, 1=pressed, 2=press and hold
	{
		window.open("buttonList/buttonList.html","_self");//redirects
		// name/name.html
		// ../name.html = goes back to original folder
		//_self = opens on this tab

	}

}
