class Umbrella{
    constructor(x,y,r){
        var options = {
            isStatic: true
        }
        this.r=r;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world, this.body);
        this.image = loadImage("boy.png");
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,255,260);
        pop();
    } 
}