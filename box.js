class BOX{
    constructor(x, y, w, h){
        var options2 = {
            restitution : 0,
            friction : 1,
            isStatic : false,
            label : "Player",
        }
        this.bodyC = Bodies.rectangle(x, y, w, h, options2);
        Worlds.add(world, this.bodyC);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.timer = 0;
        this.ball = 'no';
    }
    displayBox(){
        var pos = this.bodyC.position;
        // var angle = this.bodyC.angle;
        push();
        // translate(pos.x, pos.y);
        // rotate(angle * 4);
        fill('cyan');
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
        pop();

    //     if (keyPressed(UP_ARROW)){
    //         Matter.Body.applyForce(this.bodyC, {x: pos.x, y: pos.y}, {x: 0, y: -0.0025});
    //     }
    //     if (keyIsDown(LEFT_ARROW)){
    //         Matter.Body.applyForce(this.bodyC, {x: pos.x, y: pos.y}, {x: -0.0025, y: -0.00001});
    //     }
    //     if (keyIsDown(RIGHT_ARROW)){
    //         Matter.Body.applyForce(this.bodyC, {x: pos.x, y: pos.y}, {x: 0.0025, y: -0.00001});
    //     }
    }
}
