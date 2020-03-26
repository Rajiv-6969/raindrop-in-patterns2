class Raindropblue{
    constructor(x,y,width,height){
        var Raindropblue_options ={
            'restitution':0.9,
            'friction':0.3,
            'density':2
        }
        this.body = Bodies.rectangle(random , 1000,10,Raindropblue_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    

display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x , pos.y ,this.width , this.height );
}
    };  