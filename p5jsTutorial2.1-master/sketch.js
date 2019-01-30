var button2X;
var button2Y;

function setup()
{
  createCanvas(1000,700);
  button2X = 1;
  button2Y = 647;
  button2Z = 385
}
function draw()
{
	background(25,15,175)


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
  		text("Click me now aaaaaaaaah",button2X+30,button2Y+30);
  	}

	if (mouseX > 10 && mouseX < 10 + 315 && mouseY > 10 && mouseY < 10+300)
	{
		fill(55,20,100);
		stroke(0,0,0);
		strokeWeight(3);
		rect(300,300,315,50);
	}
	else
	{
		fill(200,200,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(300,300,315,50);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(18);
	text("Click me for nothing to happen",312,334);

    if (mouseIsPressed == true)
    {
      fill(147,247,14);
      stroke(220,90,50);
      textSize(20);
      text("Absolutely. Ever since I started bathing in essential",80,100);
      text("Woils I have gained the ability to partially teleport",80,130);
      text("and also I levitate eighteen inches above the ground ",80,160);
      text("whenever I sit still and focus my non-bloated vital life-force energies.",80,190);
      text("I can bench my body weight x2 and my arms are stronger every day I check on it.",80,220)
      text("I also can speak eight languages now and finally",80,250)
      text("have others in my life who love me. They don't call these oils essential for nothing, kid",80,280)
    }

}
