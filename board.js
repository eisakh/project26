class Board{
    constructor(x, y, width, height) {
        var options = {
          isStatic: true,
          density: 0.1
        };
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("./assets/board.png");
       
        this.velocity = 0;
        World.add(world, this.body);
      }


display(){
var pos=this.body.position
push()
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.width,this.height)
pop()
}
}