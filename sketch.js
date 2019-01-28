var button2X;
var button2Y;
var button2Z;

function setup()
{
  createCanvas(1000,700);
  button2X = 10;
  button2Y = 450;
  button2Z = 385


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
    if (mouseIsPressed == true)
    {
      fill(147,247,14);
      stroke(220,90,50);
      textSize(20);
      text("To be, or not to be, that is the question:",80,400);
      text("Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune,",85,450);
      text("Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep No more; and by a sleep,",90,480);
      text("to say we end No more; and by a sleep, to say we end The heart-ache, and the thousand natural shocks That Flesh is heir to?",95,510);
    }

	fill(200,200,255);
	stroke(0,0,0);
	rect(button2X,button2Y,290,50);

	if (mouseX > button2X && mouseX < button2X + 180 && mouseY > button2Y && mouseY < button2Y+50)
	{
		fill(248,89,255);
		stroke(51,70,190);
		textSize(16);
		text("this is a very very long box",button2X+30-5,button2Y+30+2);
	}
	else
	{
		fill(255,255,255);
		stroke(30,30,30);
    strokeWeight(2);
		textSize(16);
		text("Clikk mi now",button2X+30,button2Y+30);
	}

}
