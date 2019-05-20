var b1;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(80,400,100,25);
	b1.setText("BACK");
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

	textSize(16);
	text("FOR WARMUP QUESTIONS:",10,30);
	textSize(13);
  text("Click the right answer to progress to the next level",10,70);
	text("If some buttons don't work, just use the back button on your browser.",10,100);
	text("If your browser has no such button, please update your browser.",10,130);
	text("This game is a trivia game, meaning that it will include stuff from",10,160);
	text("every subject. Try not to cheat by using outside help.",10,190);
	textSize(16);
	text("FOR THE ACTUAL GAME:",10,250);
	textSize(13);
	text("WASD to move, SPACE to shoot",10,270);

}
