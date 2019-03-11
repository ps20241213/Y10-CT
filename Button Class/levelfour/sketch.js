var b1;
var b2;
var b3;
var b4;

function setup()
{
	createCanvas(500,500);
	b1 = new Button(10,250,300,35);
	b1.setText("Between the left ventricle and the aorta");
	b1.setTextOver("GO");
	b1.setButtonOverFill(255,255,50);

	b2 = new Button(10,300,300,35);
	b2.setText("Between the right ventricle and the aorta");
	b2.setTextOver("GO");
	b2.setButtonOverFill(255,255,50);

	b3 = new Button(10,350,300,35);
	b3.setText("Between the left atrium and the L ventricle");
	b3.setTextOver("GO");
	b3.setButtonOverFill(255,255,50);

	b4 = new Button(10,400,300,35);
	b4.setText("Between the left and right chambers of the heart");
	b4.setTextOver("GO");
	b4.setButtonOverFill(255,255,50);

}

function draw()
{
	background(175,175,175);
	fill(255,20,60);
	textSize(11);
	text("Answer for Q3: A pickaxe's sharp end applies more pressure on a smaller area compared",10,20);
	text("to a hammer. A sphere's naturally concentric shape makes it shock resistant, so throwing",10,40);
	text("it down won't do much. Hence, the pickaxe itself would be able to do more damage.",10,60);
	textSize(17);
  text("Henry has a heart disease which affects the aortic valves.",10,90);
	text("Where is this valve located at?",10,120);
	fill(0,0,0);
	textSize(14);
	b1.showButton();
	b2.showButton();
	b3.showButton();

	if (b1.getButtonState() == 1)
	{
		window.open("../levelfive/lvfive.html","_self");
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
		window.open("../wrong/wrong.html","_self");
	}
}
