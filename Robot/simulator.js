const { Robot } = require('./robot')
const { Table } = require('./table')
const csv = require('csv-parser')
const fs = require('fs')


class Simulator{
  constructor(table, robot){
    this.table = table
    this.robot = robot
    this.commands = []
  }

  placeRobotOnTable(x, y, F){
    if(x > this.table.width || y > this.table.length){
      throw "Robot cannot be placed here"
    } else {
      return this.robot.place(x, y, F)
    }
  }

  move(){
    this.robot.move()
  }

  readFromCSV(path){
    const commands = [];
    fs.createReadStream(path)
      .pipe(csv({ separator: '\n', headers: false } ))
      .on('data', (data) => commands.push(data))
      .on('end', () => {
        commands.forEach(async command => {
          await this.commands.push(command['0'])
        })
      });
  }

  // runCommands(commands){
  //   commands.forEach( command => {
  //     command['0'].toLowerCase()
  //   })
  // }

  // runSimulation(path){
  //   this.readFromCSV(path)
  // }

}

let robot = new Robot
let table = new Table(5, 5)
let simulator = new Simulator(table, robot)

// simulator.placeRobotOnTable(5, 6, "EAST")

simulator.readFromCSV('../data.csv')
console.log(simulator.commands)

// console.log(robot)
// module.exports = { Simulator }