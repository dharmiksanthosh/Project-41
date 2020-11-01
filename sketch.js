const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [],walk,umb,bolt1,bolt2,bolt3,bolt4;

function preload(){
    
    walk = loadImage("images/walking_1.png");
    bolt1 = loadImage("images/bolt/1.png");
    bolt2 = loadImage("images/bolt/2.png");
    bolt3 = loadImage("images/bolt/3.png");
    bolt4 = loadImage("images/bolt/4.png");
    bg = loadImage("images/bg.png");
}

function setup(){

    createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    umb = new Umbrella();
}

function draw(){

    background(bg);
    Engine.update(engine);

    if (frameCount % 1 === 0){
  
        drops.push(new Drop(random(0,1000),-20));
    }
    for (let i = 0; i < drops.length; i++){

        drops[i].display();
    }
    for (let i = 0; i < drops.length; i++){

        drops[i].update();
    }

    umb.display();

    var rand = round(random(1,4)),im;

    switch (rand) {

        case 1:
            im = bolt1;
            break;
        case 2:
            im = bolt2;
            break;
        case 3:
            im = bolt3;
            break;
        case 4:
            im = bolt4;
            break;
    
        default:
            break;
    }

    if(frameCount%60===0){

        var thunder = createSprite(500,50,20,20);
            thunder.addImage(im);
            thunder.scale = 0.5;
            thunder.lifetime = 30
    }
    
    drawSprites();
}

