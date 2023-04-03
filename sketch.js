var elonmusk, elonmuskImg;
var twitter, twitterImg;
var tesla, telsaImg;
var road, roadImg;
var gameover, gameoverImg;
var gameState = "play";

function preload() {
  elonmuskImg = loadImage("Elon Musk for game.jpeg");
  twitterImg = loadImage("Twitter Image for game.png");
  roadImg = loadImage("Road Image for game.webp");
  gameoverImg = loadImage("Game Over Image for game.png");
}

function setup() {
  createCanvas(600, 600);

  //set up the sprites
  road = createSprite(300, 300);
  road.addImage("road", roadImg);
  road.velocityY = -4;
  road.scale = 3;

  elonmusk = createSprite(300, 300);
  elonmusk.addImage(elonmuskImg);
  elonmusk.scale = 0.2;

  spawnTwitter();
}
function draw() {
  background(200);

  if (road.y < 195) {
    road.y = 300;
  }

  if (keyDown("right_arrow")) {
    elonmusk.x = elonmusk.x + 5;
  }

  if (keyDown("left_arrow")) {
    elonmusk.x = elonmusk.x - 5;
  }

  if (keyDown("up_arrow")) {
    elonmusk.y = elonmusk.y - 5;
  }

  if (keyDown("down_arrow")) {
    elonmusk.y = elonmusk.y + 5;
  }

  if (elonmusk.isTouching(twitter)) {
    twitter.destroy();
    spawnTwitter();
  }

  if (twitter.y > 600) {
    twitter.destroy();
    elonmusk.destroy();
    road.velocityY = 0;
  }

  drawSprites();
}

function spawnTwitter() {
  twitter = createSprite(20, 20);
  twitter.addImage(twitterImg);
  twitter.y = Math.round(random(0, 300));
  twitter.x = Math.round(random(0, 600));
  twitter.scale = 0.1;
  twitter.velocityY = 4;
}
