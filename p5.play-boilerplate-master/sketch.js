var car;
var wall;
var speed;
var weight;
var deformation;



function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  car = createSprite(0,200,50,50);
  wall = createSprite(1100,200,30,100);
  wall.shapeColor=("grey");
  

}

function draw() {
  background("lightblue");  
  car.velocityX=speed;
  deformation = (0.5*weight*speed*speed)/22500;
  
  if(car.isTouching(wall))
  {
    car.velocityX=0;

  if(deformation<100)
  {

    car.shapeColor=("Green");


  }
  else if(deformation<180 && deformation>=100)
  {

    car.shapeColor=("Yellow");
    

  }
  else if(deformation>=180)
  {

    car.shapeColor=("Red");
    

  }
}
  drawSprites();
}