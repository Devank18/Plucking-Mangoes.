class Stone{
    constructor(){
        var options = {
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 1.2
        }
        this.image = loadImage("sprites/stone.png")
    }
    display(){
    
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
          var position = [this.body.position.x, this.body.position.y];
          this.trajectory.push(position);
        }

      }
}