const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerbase,player,computerbase,computerplayer



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerbase= new playerBase(300, random(450,height-300),180,150);
  player = new Player(285,playerbase.body.position.y-153,50,180)
  computerbase= new ComputerBase(800, random(450,height-300),180,150);
  computerplayer = new ComputerPlayer(785,computerbase.body.position.y-145,50,180)
  

  
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerbase.display()
   player.display()
   computerbase.display()
   computerplayer.display()

   //display Player and computerplayer


}
