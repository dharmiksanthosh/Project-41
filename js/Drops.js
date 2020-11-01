class Drop{

    constructor(x,y){

        var op = {

            friction: 0.001
        }
        this.body = Bodies.circle(x,y,2.5,op);
        this.radius = 5;
        this.pos = this.body.position;
        World.add(world,this.body);
    }
    update(){

        if (this.pos.y>600) {
            
            this.pos.y = -20;
        }
    }
    display(){

        var pos = this.body.position;

        fill(3, 119, 252);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,5);
    }

};