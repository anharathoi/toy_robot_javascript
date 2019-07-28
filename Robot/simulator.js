const { Robot } = require('./robot')
const { Table } = require('./table')

class Simulator{
  constructor(){
    this.table = null
    this.robot = null
  }

  createTable(x, y){
    if(x < 0 || y < 0 ){
      throw new Error("Invalid table dimensions")
    } else {
      this.table = new Table(x, y)
    }
  }

  placeRobot(x, y, direction){
    this.robot = new Robot()
    x = parseInt(x)
    y = parseInt(y)
    this.robot.place(x, y, direction)
  }

  moveRobot(){
    this.robot.move()
  }

  turnRobot(side){
    side === "left" ? this.robot.turnLeft() : this.robot.turnRight() 
  }
}

module.exports = { Simulator }
