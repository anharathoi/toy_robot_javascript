class Robot {

  place(x, y, direction) {
    this.x = x
    this.y = y
    this.direction = direction
  }

  move() {
    switch(this.direction) {
      case "NORTH":
          this.y += 1
          return this
      case "SOUTH":
          this.y -= 1
          return this
      case "EAST":
        this.x += 1
        return this
      case "WEST":
        this.x -= 1
        return this
      default:
        return  "INVALID INPUT"
    }
  }

  report() {
    return {
      x: this.x,
      y: this.y,
      direction: this.direction
    }
  }

  turnLeft() {
    switch(this.direction) {
      case "NORTH":
          this.direction = "WEST"
        break;
      case "SOUTH":
          this.direction = "EAST"
        break;
      case "EAST":
          this.direction = "NORTH"
        break;
      case "WEST":
          this.direction = "SOUTH"
        break;
      default:
        return  "INVALID INPUT"
    }
  }

  turnRight() {
    switch(this.direction) {
      case "NORTH":
          this.direction = "EAST"
        break;
      case "SOUTH":
          this.direction = "WEST"
        break;
      case "EAST":
          this.direction = "SOUTH"
        break;
      case "WEST":
          this.direction = "NORTH"
        break;
      default:
        return  "INVALID INPUT"
    }
  }
}

module.exports = {
  Robot
}
