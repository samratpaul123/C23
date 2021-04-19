class Ground
{
    constructor()
    {
        var ground_options ={
            isStatic: true
        }
   this.ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,this.ground);
    }
    display()
    {
        var pos=this.ground.position;
        fill("blue");
        rectMode(CENTER);
     rect(pos.x,pos.y,400,20);   
    
    }
};