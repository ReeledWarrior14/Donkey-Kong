// class GROUND {
//     constructor(x, y, width, height){
//         this.body = Bodies.rectangle(x, y, width, height);
//         Worlds.add(world, this.body);
//         this.width = width
//         this.height = height;
//     }

//     displayGround(){
//         var x = this.body.position.x;
//         var y = this.body.position.y;
//         rect(x, y, this.width, this.height);
//     }
// }

class GROUND {
    constructor(x, y, width, height, angle){
        var options1 = {
            isStatic : true,
            angle : angle,
        }
        this.bodyC = Bodies.rectangle(x, y, width, height, options1);
        Worlds.add(world, this.bodyC);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.bodyC, angle * 4);
        this.ball = 'no';
    }        
    displayGround(){
        var x = this.bodyC.position.x;
        var y = this.bodyC.position.y;
        var angle = this.bodyC.angle/4;
        push();
        fill(0);
        translate(x, y);
        rotate(angle * 4);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}