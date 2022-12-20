
canvas = document.getElementById("canvas")

class componentRect    {
    

    constructor(ctx,color,width,height,CenterX,CenterY,x,y){
        this.ctx = ctx;
        this.color = color;
        this.width = width;
        this.height = height;
        this.centerX = CenterX;
        this.centerY = CenterY;
        this.x = x ;
        this.y = y ;
    }

    start () {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x,this.y,this.width,this.height)
        
        
    }
    
}
class Area {
    constructor (canvas){
        this.canvas = canvas 
        this.centerX = this.canvas.width / 2 
        this.centerY = canvas.height / 2;
        this.ctx = this.canvas.getContext("2d");
    }

    start(){
        
    }

    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }

    getCenterX(){
        return this.centerX
    }
    getCenterY(){
        return this.centerY
    }

    getContext(){
        return this.ctx
    }
}


defaultArea = new Area(canvas)
Rect1 = new  componentRect(defaultArea.getContext(),"red",50,5,defaultArea.getCenterX(),defaultArea.getCenterY(),0,0)
Rect2 = new  componentRect(defaultArea.getContext(),"black",50,5,defaultArea.getCenterX(),defaultArea.getCenterY(),0,0)
Rect1.start()
Rect2.start()
var rotation = 45* Math.PI / 400;
var r = 50;
var reverse = false;


loadingAnimation = ( ) => {
    defaultArea.ctx.setTransform(1, 0, 0, 1, 0, 0);
    defaultArea.ctx.clearRect(0, 0, canvas.width, canvas.height);
    defaultArea.ctx.translate(canvas.width/2, canvas.height/2);
    
    

    (!reverse)?defaultArea.ctx.arc(0, 0, r--, 0, 2 * Math.PI) : "" ;
    (reverse)?defaultArea.ctx.arc(0, 0, r++, 0, 2 * Math.PI) : "" ;
    
    
    
    
    defaultArea.ctx.rotate(rotation++);
    
    Rect2.start()
    defaultArea.ctx.stroke();
    
    
   
    
}

setInterval(loadingAnimation,200)

