class Box{
    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.5,
            friction:1,
        }
        this.body = Bodies.rectangle(x,y,30,40,options);
        this.image=loadImage("sprites/Box.png");
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
        this.visibility=255;
    }
       
    display(){
        if(this.body.speed < 3){
            push();
            World.remove(world,this.body);
             this.visibility=this.visibility-3;
               tint(255,this.visibility)
               image(this.image, this.body.position.x,this.body.position.y, 50,50);
               pop();
          }
       
      }
}