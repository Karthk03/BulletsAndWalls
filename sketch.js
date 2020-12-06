var wall,car,speed,mass,deformation,wallThickness,carImg,wallImg;
var ent = false;
var imp1,imp2,imp3;
var flag = false;
var button;

var val1,val2;

function preload()
{
  carImg = loadImage("Bullet.png");
  wallImg = loadImage("Wall.png");
}

function setup() 
{
  createCanvas(800,400);

  button = createButton('Enter');
  button.position(600, 350);
  button.mousePressed(enter);

  inp1 = createInput('');
  inp1.position(10,350);

  inp2 = createInput('');
  inp2.position(180,350);

  inp3 = createInput('');
  inp3.position(340,350);

  car = createSprite(100,200,50,20);
  car.addImage(carImg); 
  car.scale = 0.1;
  car.visible = false;

  wall = createSprite(500,200,20,200);
  wall.addImage(wallImg);
  wall.scale = 0.75;
  wall.visible = false;
}  
function draw() 
{
  background(255,255,255);

  if(flag == false)
  {
    text("speed",100,320);
    text("mass",250,320);
    text("thickness",390,320);
  }

  if(ent == true)
  {
    inp1.hide();
    inp2.hide();
    inp3.hide();
    button.hide();

    val1 = inp1.value();
    val2 = inp2.value();
    wallThickness = inp3.value();
    
    mass = val2;
    speed = val1;

    car.visible = true;
    wall.visible = true;

    car.velocityX = speed;

    ent = false;
  }

  if(wall != null && car!=null)
  {
    // if(wall.x-car.x<=wall.width/2+car.width/2 &&
    // car.x-wall.x<=wall.width/2+car.width/2 &&
    // wall.y-car.y<=wall.height/2+car.height/2 &&
    // car.y-wall.y<=wall.height/2+car.height/2)
    if(car.x<= 600 &&
    car.x>=400 &&
    car.y<= 300 &&
    car.y>= 100)
    {
      //console.log(true);
      car.velocityX = 0;
      wall.velocityX = 0;
        
      deformation = (0.5*mass*speed*speed)/(wallThickness*wallThickness*wallThickness)

      if(deformation>=10)
      {
        text(deformation + " Not Safe",400,50);
      }
      else if(deformation<10)
      {
        text(deformation + " Good!",400,50);
      }
    }
  }

  drawSprites();
}

function enter()
{
  ent = true;
  flag = true;
  console.log(ent);
}