class ground{
    constructor(posx,posy,width1,hight1){

    var options= {isStatic: true}
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