class Drops{
    constructor(x,y,r){
        var options = {
            restitution:0.7,
            friction: 50
        }
        this.r=r;

        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,600),y:random(0,20)});
        }
    }
}