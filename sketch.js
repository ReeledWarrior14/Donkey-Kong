var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;

var engine, world;

var ground;

var mConstraint, mouse; 

var balls = [];

var gamestate = 'play';

function setup(){
    var canvas = createCanvas(600, 700);

    engine = Engine.create();
    world = engine.world;

    ground = new GROUND(width/2, height, width, 50, 0);

    surface1 = new GROUND(200, 125, 500, 25, 0.0174533);
    surface2 = new GROUND(400, 250, 500, 25, -0.0174533);
    surface3 = new GROUND(200, 375, 500, 25, 0.0174533);
    surface4 = new GROUND(400, 500, 500, 25, -0.0174533);
    surface5 = new GROUND(200, 600, 500, 25, 0.0174533);

    wall1 = new GROUND(-25, 700, 50, 1400, 0);
    wall2 = new GROUND(625, 700, 50, 1400, 0);

    p1 = new BOX(50, 650, 25, 25);

    // var mouse1 = Mouse.create(canvas.clientWidth, canvas.clientHeight);
    // var options = {
    //     mouse : mouse1,
    // }
    // mConstraint = MouseConstraint.create(engine, options);
    // Worlds.add(world, mConstraint);
}

function draw(){
    Engine.update(engine);

    background(150);

    push();
    fill(0);
    ground.displayGround();
    surface1.displayGround();
    surface2.displayGround();
    surface3.displayGround();
    surface4.displayGround(); 
    surface5.displayGround();

    wall1.displayGround();
    wall2.displayGround();
    pop();

    push();
    p1.displayBox();
    pop();

    if (gamestate == 'play'){
        if (frameCount % 150 == 0){
            balls.push(new BALL(20, 70, 15));
        }
    
        eventStuff();
    }

    for (var i = 0; i < balls.length; i++){
        balls[i].displayBall();

        if (balls[i].timer >= 5000){
            balls.splice(i, 1);
            i--;
        }
    }

    // if (gamestate == 'play'){
    //     if (frameCount % 150 == 0){
    //         balls.push(new BALL(20, 70, 15));
    //     }
    // }
    
    // for (var i = 0; i < balls.length; i++){
    //     balls[i].displayBall();

    //     if (balls[i].timer >= 5000){
    //         balls.splice(i, 1);
    //         i--;
    //     }
    // }

    // eventStuff();

    // push();
    // fill("blue");
    // text(mouseX, 10, 15);
    // text(mouseY, 35, 15);
    // pop();
}

function keyPressed(){
    if (keyCode == UP_ARROW && frameCount >= 500 && gamestate == 'play'){
        Matter.Body.applyForce(p1.bodyC, {x: p1.bodyC.position.x, y: p1.bodyC.position.y}, {x: 0, y: -0.009});
    }
    if (keyCode == LEFT_ARROW && frameCount >= 500 && gamestate == 'play'){
        Matter.Body.applyForce(p1.bodyC, {x: p1.bodyC.position.x, y: p1.bodyC.position.y}, {x: -0.009, y: -0.0009});
    }
    if (keyCode == RIGHT_ARROW && frameCount >= 500 && gamestate == 'play'){
        Matter.Body.applyForce(p1.bodyC, {x: p1.bodyC.position.x, y: p1.bodyC.position.y}, {x: 0.009, y: -0.0009});
    }
    if (keyCode == 82 && gamestate == 'not not play not'){
        reset();
    }
}

function eventStuff(){

    Matter.Events.on(engine, 'collisionStart', function(event){
        var pairs = event.pairs;
        // console.log(pairs.bodyA);
        pairs.forEach(function(pair){
            if (pair.bodyA.label == p1.bodyC.label){
                // console.log('yes')
                // if (pair.ball == 'ball'){
                    // console.log("WORKS");
                // }
                gamestate = 'not not play not';
                Matter.Body.setPosition(p1.bodyC, {x: 50, y: 650});
                // Matter.Body.setStatic(p1.bodyC, true);
                // gamestate = 'not not play not';
            }
        })
        // if (pairs.bodyC.label == p1.bodyC.label){
        //     if (pairs.ball == 'ball'){
        //         console.log("WORKS");
        //     }
        // }
    })
}

function reset(){
    if (gamestate == 'not not play not'){
        // p1.bodyC.position.x = 50;
        // p1.bodyC.position.y = 650;
        // Matter.Body.setPosition(p1.bodyC, {x: 50, y: 650});
        // Matter.Body.setStatic(p1.bodyC, false);
        gamestate = 'play';
    }
}

/*

*/