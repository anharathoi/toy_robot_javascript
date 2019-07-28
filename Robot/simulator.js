const { Robot } = require("./robot")
const { Table } = require("./table")

class Simulator{
  constructor(){
    this.table = null
    this.robot = null
  }

  createTable(x, y){
    if(x < 0 || y < 0 ){
      console.error("\nInvalid table dimensions\n")
    } else {
      this.table = new Table(x, y)
    }
  }

  placeRobot(x, y, direction){
    if (!this.table) {
      console.error("\nPlease define table first\n")
      return
    }

    if (x < 0 || y < 0) {
      console.error("\nInvalid robot placement!\n")
    }

    this.robot = new Robot()
    x = parseInt(x)
    y = parseInt(y)
    this.robot.place(x, y, direction.trim())
  }

  moveRobot(){
    if (this.tableAndBoardIsNotDefined()) {
      console.error("\nPlease define table and place a robot on the it first\n")
      return
    }

    if(!this.isValidMove()) {
      return console.error("\nInvalid move, please turn\n")
    }

    this.robot.move()
  }

  turnRobot(side){
    if (this.tableAndBoardIsNotDefined()) {
      console.error("\nPlease define table and place a robot on the it first\n")
      return
    }
  
    side === "left" ? this.robot.turnLeft() : this.robot.turnRight() 
  }

  tableAndBoardIsNotDefined() {
    return !this.table || !this.robot
  }

  isValidMove() {
    if (this.robot.direction === "EAST") {
      let newXPosition = this.robot.x + 1
      return newXPosition <= this.table.width
    }

    if (this.robot.direction === "WEST") {
      let newXPosition = this.robot.x - 1
      return newXPosition >= 0
    }

    if (this.robot.direction === "SOUTH") {
      let newYPosition = this.robot.y - 1
      return newYPosition >= 0
    }

    if (this.robot.direction === "NORTH") {
      let newYPosition = this.robot.y + 1
      return newYPosition <= this.table.length
    }
  }
}

module.exports = { Simulator }
