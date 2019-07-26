class Robot {
  constructor(x, y, direction){
    this.x = x
    this.y = y
    this.direction = direction
  }

  move(){
    switch(this.direction) {
      case "NORTH":
          this.y += 1
        break;
      case "SOUTH":
          this.y -= 1
        break;
      case "EAST":
        this.x += 1
        break;
      case "WEST":
        this.x -= 1
        break;
      default:
        return  "INVALID INPUT"
    }
  }

  report(){
    return {
      x: this.x,
      y: this.y,
      direction: this.direction
    }
  }
}
const robot = new Robot(0, 0, "NORTH")
console.log(robot)

module.exports = {
  Robot
}