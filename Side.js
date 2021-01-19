class SIDE{
    constructor(x, y, width, height, angle){
        var options3 = {
            isStatic : true,
        }
        this.bodyS = Bodies.rectangle(x, y, width, height, options3);
        this.width = width;
        this.height = height;
        Worlds.add(world, this.bodyS);
    }
    displaySide(){
        var pos = this.bodyS.position;
        var angle = this.bodyS.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}