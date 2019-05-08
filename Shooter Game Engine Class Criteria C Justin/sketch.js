var score;
var playerImage;
var enemySet1;
var enemySet2;
var enemySet3;
var p1;
var c1 = new Collision();
var pm1 = new ProjectileManager(5);
var healthBar;

function setup()
{
	createCanvas(1000,500);

	// setup Score
	score = new Score();
	score.setScoreXY(50,400);

	// setup player
	p1 = new Character(100,400); // player starting x,y
	playerImage = loadImage('https://i.imgur.com/zJA0ORL.png');
	p1.setCharacterImage(playerImage,100,120);

	// setup health bar
	healthBar = new HealthBar(10,10); // starting health and maximum health
	healthBar.setHealthBarXY(750,400);

	var enemySet1Photos = new Array(5);
	enemySet1Photos[0] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteA.png');
	enemySet1Photos[1] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteB.png');
	enemySet1Photos[2] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteC.png');
	enemySet1Photos[3] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteD.png');
	enemySet1Photos[4] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q1Q.png');
	enemySet1Photos[5] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q1Q.png');

	// setup explosionAnimation
	var deathAnimation = new Array(6);
	deathAnimation[0] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-1.png');
	deathAnimation[1] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-2.png');
	deathAnimation[2] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-3.png');
	deathAnimation[3] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-4.png');
	deathAnimation[4] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-5.png');
	deathAnimation[5] = loadImage('https://bleungwpg.github.io/resourcehosting/Explosion-6.png');

	// set 4 enemies, no images, answer is 1
	enemySet1 = new EnemyManager(4,enemySet1Photos,true,2);  // number of enemies, photos, random, answer
	enemySet1.setQuestion(enemySet1Photos[5],600,0);  // photo, x, y
	enemySet1.setEnemySpeed(0.5);
	enemySet1.setLengthHeight(60,40);
	enemySet1.setEnemySpacing(100);
	enemySet1.setKillOutOfScreen(400);
	enemySet1.setDeathAnimation(deathAnimation);
	enemySet1.startEnemies();

	var enemySet2Photos = new Array(5);
	enemySet2Photos[0] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteA.png');
	enemySet2Photos[1] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteB.png');
	enemySet2Photos[2] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteC.png');
	enemySet2Photos[3] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteD.png');
	enemySet2Photos[4] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q2Q.png');
	enemySet2Photos[5] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q2Q.png');

	// set 5 enemies, no images, answer is 3
	// 0 - A
	// 1 - B
	// 2 - C
	// 3 - D
	enemySet2 = new EnemyManager(4,enemySet2Photos,true,0);
	enemySet2.setQuestion(enemySet2Photos[4],600,0);  // photo, x, y
	enemySet2.setKillOutOfScreen(400);
	enemySet2.setLengthHeight(60,40);
	enemySet2.setEnemySpacing(100);
	enemySet2.setEnemySpeed(0.6);

	var enemySet3Photos = new Array(5);
	enemySet3Photos[0] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteA.png');
	enemySet3Photos[1] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteB.png');
	enemySet3Photos[2] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteC.png');
	enemySet3Photos[3] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteD.png');
	enemySet3Photos[4] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q3Q.png');
	enemySet3Photos[5] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q3Q.png');

	// set 6 enemies, no images, answer is 5
	enemySet3 = new EnemyManager(4,enemySet3Photos,true,0);
	enemySet3.setQuestion(enemySet3Photos[4],600,0);  // photo, x, y
	enemySet3.setKillOutOfScreen(400);
	enemySet3.setLengthHeight(60,40);
	enemySet3.setEnemySpacing(100);
	enemySet3.setEnemySpeed(0.7);

	var enemySet4Photos = new Array(5);
	enemySet4Photos[0] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteA.png');
	enemySet4Photos[1] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteB.png');
	enemySet4Photos[2] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteC.png');
	enemySet4Photos[3] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteD.png');
	enemySet4Photos[4] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q4Q.png');
	enemySet4Photos[5] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q4Q.png');

	// set 6 enemies, no images, answer is 3
	enemySet4 = new EnemyManager(4,enemySet4Photos,true,3);
	enemySet4.setQuestion(enemySet4Photos[4],600,0);  // photo, x, y
	enemySet4.setKillOutOfScreen(400);
	enemySet4.setLengthHeight(60,40);
	enemySet4.setEnemySpacing(100);
	enemySet4.setEnemySpeed(0.7);

	var enemySet5Photos = new Array(5);
	enemySet5Photos[0] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteA.png');
	enemySet5Photos[1] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteB.png');
	enemySet5Photos[2] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteC.png');
	enemySet5Photos[3] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/spriteD.png');
	enemySet5Photos[4] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q5Q.png');
	enemySet5Photos[5] = loadImage('https://ps20241213.github.io/yeehowdy-Y10-CT/Shooter%20Game%20Engine%20Class%20Criteria%20C%20Justin/Resources/Q5Q.png');

	// set 6 enemies, no images, answer is 3
	enemySet5 = new EnemyManager(4,enemySet5Photos,true,3);
	enemySet5.setQuestion(enemySet5Photos[4],600,0);  // photo, x, y
	enemySet5.setKillOutOfScreen(400);
	enemySet5.setLengthHeight(60,40);
	enemySet5.setEnemySpacing(100);
	enemySet5.setEnemySpeed(0.7);

}

function draw()
{
	background(125,125,125);

	if (p1.isAlive() == true)
	{
		// draw player character
		// wait to move player character based on controls
		p1.drawCharacter();
		p1.moveCharacter();
	}
	// --------------------------------- MODIFY CODE START ----------------------------------
	// ------------------ setup logic to transition between questions -----------------------

	// START QUESTION 1 --------------------------------------------------------
	if (enemySet1.isQuestionFinished() == false)
	{
		// show the question
		enemySet1.drawQuestion();

		var gameState = enemySet1.drawEnemies(pm1);
		if (gameState == -1)
		{
			// if enemies have reach the base
			console.log('enemies have reached base, subtract health');
			healthBar.deductHealth(3);
			enemySet1.endQuestion();
			enemySet2.startEnemies();

		}
		if (enemySet1.isAnswerAlive() == false)
		{
			// if answer has been shot
			console.log('answer has been shot!');
			enemySet1.endQuestion();
			enemySet2.startEnemies();
		}
	}
	// END QUESTION 1 ----------------------------------------------------------

	// START QUESTION 2 --------------------------------------------------------
	if (enemySet2.isQuestionFinished() == false)
	{
		// show the question
		enemySet2.drawQuestion();

		var gameState = enemySet2.drawEnemies(pm1);
		if (gameState == -1)
		{
			// if enemies have reach the base
			console.log('enemies have reached base, subtract health');
			healthBar.deductHealth(3);
			enemySet2.endQuestion();
			enemySet3.startEnemies();
		}

		if (enemySet2.isAnswerAlive() == false)
		{
			// if answer has been shot
			console.log('answer has been shot!');
			enemySet2.endQuestion();
			enemySet3.startEnemies();
		}
	}
	// END QUESTION 2 ----------------------------------------------------------

	// START QUESTION 3 --------------------------------------------------------
	if (enemySet3.isQuestionFinished() == false)
	{
		// show the question
		enemySet3.drawQuestion();

		var gameState = enemySet3.drawEnemies(pm1);
		if (gameState == -1)
		{
			// if enemies have reach the base
			console.log('enemies have reached base, subtract health');
			healthBar.deductHealth(3);
			enemySet3.endQuestion();
			enemySet4.startEnemies();
		}

		if (enemySet3.isAnswerAlive() == false)
		{
			// if answer has been shot
			console.log('answer has been shot!');
			enemySet3.endQuestion();
			enemySet4.startEnemies();
		}
	}
	// END QUESTION 3 ----------------------------------------------------------

	if (enemySet3.isQuestionFinished() == false)
	{
		enemySet3.drawEnemies(pm1);
		if (enemySet3.isAnswerAlive() == false)
		{
			// add things like sound effects / increase or decrease score
			console.log('answer has been shot!');
			// ------- CUSTOM THE CODE BELOW ------ WHERE TO GO AFTER LAST QUESTION
			window.open("mainmenu/mainmenu.html","_self");
		}
	}

	// --------------------------------- MODIFY CODE END ----------------------------------



	// manage projectiles - do not touch
	pm1.manageProjectile();


	// show health bar
	healthBar.showHealthBar();

	// show Score
	score.showScore();

}


function keyPressed()
{
	p1.charKeyPressed();
	pm1.myKeyPressed(p1);
}

function keyReleased()
{
	p1.charKeyReleased();
	pm1.myKeyReleased();
}
