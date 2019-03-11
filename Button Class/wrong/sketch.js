var b1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(15,15,100,30);
	b1.setText("RETRY");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);
}

function draw()
{
	background(225,225,225);

	b1.showButton();

	if (b1.getButtonState() == 1)//ihave we clicked on it?
	//0=not Pressed, 1=pressed, 2=press and hold
	{
		window.open("../buttonList/buttonList.html","_self");//redirects
		// name/name.html
		// ../name.html = goes back to original folder
		//_self = opens on this tab
	}
	stroke(0,0,0);

	textSize(13);
  text("You're Wrong!",30,70);
	text("Try Again!",30,100);

}
