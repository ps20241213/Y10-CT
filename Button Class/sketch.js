var b1;
var b2;

function setup()
{
	createCanvas(500,500);
	//dimensions and size
	b1 = new Button(10,10,110,35);
	b1.setText("MENU"); //default look
	b1.setTextOver("GO");//when you move mouse over it
	b1.setTextPressed("GO");
	b1.setButtonOverFill(50,255,50);

	b2 = new Button(10,50,110,35);
	b2.setText("OPTIONS"); //default look
	b2.setTextOver("GO");//when you move mouse over it
	b2.setTextPressed("GO");
	b2.setButtonOverFill(50,255,50);
}

function draw()
{
	background(25,255,255);
	textSize(13);
	b1.showButton();//must have if the button is visible
	b2.showButton();

	if (b1.getButtonState() == 1)//ihave we clicked on it?
	//0=not Pressed, 1=pressed, 2=press and hold
	{
		window.open("buttonList/buttonList.html","_self");//redirects
		// name/name.html
		// ../name.html = goes back to original folder
		//_self = opens on this tab

	}
	if (b2.getButtonState() == 1)//ihave we clicked on it?
	//0=not Pressed, 1=pressed, 2=press and hold
	{
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_self");//redirects
		// name/name.html
		// ../name.html = goes back to original folder
		//_self = opens on this tab

	}
}
