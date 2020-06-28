var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500); 

  car = createSprite(50, 200, 70, 50);
  car.velocityX = speed;
  wall = createSprite(500, 200, 40,200); 

  car.shapeColor = "yellow";
 
  wall.shapeColor = "brown";  

  
  
}

function draw() {
  background("black");  
  
  if(wall.x - car.x < (car.width + wall.width)/2)
  { 
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180)
    {
      car.shapeColor = "red";
      text("Speed is:"+speed, 200,100);
      text("Weight is:"+weight, 200,300);
      text("Deformation is:"+deformation, 200,200);
    }  

    if(deformation > 100 && deformation < 180)
    {
      car.shapeColor = "green";
      text("Speed is:"+speed, 200,100);
      text("Weight is:"+weight, 200,300);
      text("Deformation is:"+deformation, 200,200);
    } 
    
    if(deformation <100 )
    {
      car.shapeColor = "blue";
      text("Speed is:"+speed, 200,100);
      text("Weight is:"+weight, 200,300);
      text("Deformation is:"+deformation, 200,200);
    }
  }
drawSprites();
}