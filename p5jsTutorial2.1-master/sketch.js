var button2X;
var button2Y;

function setup()
{
  createCanvas(1000,700);
  button2X = 10;
  button2Y = 450;


}

function draw()
{
	background(125,125,125)


	if (mouseX > 10 && mouseX < 10 + 320 && mouseY > 10 && mouseY < 10+50)
	{
		fill(55,20,100);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,315,50);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(10,10,315,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(18);
	text("Click me for nothing to happen",35,40);


	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,180,50);

	if (mouseX > button2X && mouseX < button2X + 180 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(16);
		text("unmasked me aaaa",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(30,30,30);
		textSize(16);
		text("Clikk mi now",button2X+30,button2Y+30);
	}

}
