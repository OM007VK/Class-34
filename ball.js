class ball{
    constructor(posx,posy,radius1){

    var options= {restitution:0.5,density:2,friction:2}
    this.body=Bodies.circle(posx,posy,radius1/2,options);
    this.radius=radius1;
   

    World.add(world,this.body)
    }

    display(){
var position=this.body.position;
push()
fill("white")
ellipseMode(RADIUS);
ellipse(position.x,position.y,this.radius,this.radius)
pop()
    }
}