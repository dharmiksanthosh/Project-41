class Umbrella{

    constructor(){

        var options = {

            isStatic: true,
            friction: 0.01
        }

        this.body = Bodies.circle(521,413,100,options);
        World.add(world,this.body);
        this.body1 = Bodies.circle(509,414,100,options);
        World.add(world,this.body1);

        this.posx = 500;
        this.posy = 300;
        this.posx1 = 500;
        this.posy1 = 300;
    }
    display(){

        imageMode(CENTER);
        image(walk,500,450,400,350);
    }
    thunder(){

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
        imageMode(CENTER);
        image(im,500,150,300,300);
    }
};