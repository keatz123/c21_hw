class Ground{
    constructor(x,y,w,h){
        
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }
    display(){
        rect(this.x,this.y,this.w,this.h)
    }
}
