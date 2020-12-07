class box{
    constructor(posx,posy,width1,hight1){

    var options= {restitution:0.03,density:1,friction:2}
    this.body=Bodies.rectangle(posx,posy,width1,hight1,options);
    this.width=width1;
    this.hight=hight1;

    World.add(world,this.body)
    }

    display(){
var position=this.body.position;
push()
fill("brown")
rectMode(CENTER);
rect (position.x,position.y,this.width,this.hight)



pop()
    }
}