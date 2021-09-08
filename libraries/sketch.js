var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);
  leftborder=new Ground(795,400,10,height)
  rightborder=new Ground(5,400,10,height)

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  // create pinkos
  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }



}

function draw() {
  background("black");
  Engine.update(engine);


  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  if (frameCount % 40 === 0) {
    particles.push(new Particle(random(20, 780), 10, 10));
  }

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
    if (particles[j].body.position.y > height / 2 && particles[j].body.position.x < 250) 
    { score = score + 500 }

    if (particles[j].body.position.y > height / 2 && particles[j].body.position.x > 250) 
    { score = score + 100 }
  }
  for (var k = 0; k < divisions.length; k++) {

    leftborder.display();
    rightborder.display();
    divisions[k].display();
  }

}

