const { Simulator } = require('./robot/simulator')
const readlineSync = require('readline-sync')

const help = `
Robot Commands:
board 5, 5      This will generate a board with 5x and 5y unit
place X, Y, F   This command will place the robot on a table
                where X, Y should be in between 0 and x/y axis unit
                and F could be north, south, east or west
move            This command will move the robot one unit forward
left or right   Rotate robot face left or right
report          Print out robot's current position
help            To see help message
quit            Exit from this simulator
`
let response
const simulator = new Simulator

const runCommand = (command) => {
  switch(command){
    case "board":
      console.log("INSIDE board")
      let length = readlineSync.question('length? ')
      let width = readlineSync.question('width? ')
      simulator.createTable(width, length)
      console.log(simulator.table)
      break;
    case "place":
    // cannot play unless table is defined
      console.log("INSIDE place")
      if(!simulator.table) {
        console.log("Please define table first")
        break;
      }
      let placement = readlineSync.question('please define x, y coordinates and direction for robot:\n ')
      simulator.placeRobot(...placement.split(','))
      break;
    case "move":
      console.log("INSIDE move")
      // move robot
      // cannot play unless table is defined
      // cannot play unless robot is defined
      if(!simulator.table || !simulator.robot) {
        console.log("Please define table first")
        break
      }
      if(simulator.table.x <= simulator.robot.x || simulator.table.y <= simulator.robot.y ){
        console.log("Invalid move")
        break
      }
      simulator.moveRobot()
      break
    case "turn":
      console.log("INSIDE turn")
      // cannot play unless table is defined
      if(!simulator.table || !simulator.robot) {
        console.log("Please define table first")
      }
      let side = readlineSync.question("type 'left' to turn left, 'right' to turn right")
      simulator.turnRobot(side)
      break;
    case "report":
    // report position
      console.log("INSIDE report")
      console.log(simulator.robot.report())
    break;
    case "quit":
    // quit simulation
    console.log("INSIDE quit")
    break;
    case "help":
      // show help message
      console.log("INSIDE help")
      break;
    default: 
      console.log("Enter a valid command")
      break;
  }

}

while(response !== "quit"){
  console.log(help)
  response = readlineSync.question('Type your command here:\n')
  runCommand(response)
}
