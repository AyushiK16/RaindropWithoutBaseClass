const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var rain1;
var variable = 0;

var raindropArray = [];
var x = 1
function setup() {

  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;


  //testDrop = new Raindrop(200,200,100,100, 255,255, 255);
  

  console.log(variable);
  
  //rain1 = new Raindrop(200, 200, 10, 90);
  //rain1.velocityX = 4;
/*
  while (x<10){
    var rain = new Raindrop(random(1,400), 1, random(10,50), random(10,50));
    raindropArray.push(rain);
    console.log(raindropArray);

    
  }
*/
}


function draw() {
  background("black");
  Engine.update(engine);
  //rain1.display();
  //rain.display();
 
  //testDrop.display();

  variable = variable + 1;
//YELLOW DROPS
  if (variable % 2 === 0){
    raindropArray.push(new Raindrop(random(0,400), 1, 4, random(5,25),253, 253, 151));
    //for(var i = 2 ; i>1 ; i++){
  }

//ORANGE DROPS
  if (variable % 3 === 0){
    raindropArray.push(new Raindrop(random(0,400), 1, 4, random(5, 25),255, 102, 99));
  }

  //RED DROPS
  if (variable % 4 === 0){
    raindropArray.push(new Raindrop(random(0,400), 1, 4, random(5, 25),254, 177, 68));
  }

  //PURPLE DROPS
  if (variable % 4 === 0){
    raindropArray.push(new Raindrop(random(0,400), 1, 4, random(5, 25),204, 153, 201));
  }

  for(var i = 0;i < raindropArray.length; i++){
    raindropArray[i].display();
}
}