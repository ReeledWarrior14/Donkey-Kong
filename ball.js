class BALL{
    constructor(x, y, r){
        var options2 = {
            restitution : 0.75,
            friction : 0,
            density : 1.2,
        }
        this.bodyC = Bodies.circle(x, y, r, options2);
        Worlds.add(world, this.bodyC);
        this.r = r;
        this.timer = 0;
        this.score = 0;
        this.ball = 'ball';
    }
    displayBall(){
        var pos = this.bodyC.position;
        var angle = this.bodyC.angle;
        this.timer++
        if(this.timer <= 1800){
            push();
            translate(pos.x, pos.y);
            rotate(angle * 4);
            ellipseMode(CENTER);
            ellipse(0, 0, this.r * 2);
            pop();
        }
        else{
            Worlds.remove(world, this.bodyC);
        }
    }
}