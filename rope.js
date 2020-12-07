class rope{
constructor(body1,point2){
var options = {bodyA:body1,pointB:point2,stiffness:1,length:400}

this.chain = Constraint.create(options);
World.add(world,this.chain)
}

display(){
var firstpos = this.chain.bodyA.position;
var secpos = this.chain.pointB;

push()
stroke("white")
line(firstpos.x,firstpos.y,secpos.x,secpos.y)
pop()
}
}