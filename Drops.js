class Drops{
    constructor(x, y){
        var options = {
            isStatic: false,
            friction: 0.1
        }
        World.add(world, this.body);
        this.trajectory = [];
    }
    display(){
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
        }
        for(var i=0; i<maxDrops; i++){
            Drops.push(new createDrop(random(0,400), random(0,400)));
        }
    }
}