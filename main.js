const { Robot } = require('./robot/robot')
const { Table } = require('./robot/table')

let robot = new Robot

let table = new Table(5, 5)

class Simulator{
  constructor(table){
    this.table = table
  }

  placeRobotOnTable(x, y, F){
    if(x < this.table.width && y < this.table.length){
      throw "Robot cannot be placed here"
    }
  }
}
robot.place(4,5,"NORTH")

robot.move()

console.log(robot.report())