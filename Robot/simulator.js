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
    this.robot.place(x, y, direction)
  }

  moveRobot(){
    if (this.tableAndBoardIsNotDefined()) {
      console.error("\nPlease define table and place a robot on the it first\n")
      return
    }

    let facingNorthOrSouth = this.robot.direction === "NORTH" || this.robot.direction === "SOUTH"
    let onTheEdgeOfNorthOrSouth = this.table.length === this.robot.y || this.robot.y === 0

    if(facingNorthOrSouth && onTheEdgeOfNorthOrSouth){
      return console.error("\nInvalid move, please turn\n")
    }

    let facingEastOrWest = this.robot.direction === "EAST" || this.robot.direction === "WEST"
    let onTheEdgeOfEathOrWest = this.table.width === this.robot.x || this.robot.x === 0

    if(facingEastOrWest && onTheEdgeOfEathOrWest) {
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
}

module.exports = { Simulator }
