class rope{
	constructor(body1,body2,pointA,pointB)
	{

	this.pointA=pointA//create rope constraint here
	this.pointB=pointB
	var options={
	bodyA:body1,
	bodyB:body2,
    pointB:{x:this.pointA,y:this.pointB}}
	
	this.rope=Constraint.create(options);
    World.add(world,this.rope);
	}
    display(){
	var pointA=this.rope.bodyA.position;
	var bodyB=this.rope.bodyA.position;
	strokeWeight(2);
	line(pointA.x,pointA.y,pointB.x,pointB.y);
	}//create display() here 

}
