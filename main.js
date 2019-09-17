const { Simulator } = require("./robot/simulator")
const readlineSync = require("readline-sync")

const help = `
Robot Commands:
board           This will ask for table dimensions
place           This command will ask for robot placement
                e.g. 2, 3, NORTH
move            This command will move the robot one unit forward
turn            Rotate robot face left or right
report          Print out robot's current position
help            To see help message
quit            Exit from this simulator
`

console.log(help)

let response
const simulator = new Simulator

const runCommand = (command) => {
  switch(command){
    case "board":
      let length = readlineSync.question("length?: ")
      let width = readlineSync.question("width?: ")
      simulator.createTable(width, length)
      break;
    case "place":
      let placement = readlineSync.question("please define x, y coordinates and direction for robot:\n")
      simulator.placeRobot(...placement.split(","))
      break;
    case "move":
      simulator.moveRobot()
      break
    case "turn":
      let side = readlineSync.question("type 'left' to turn left, 'right' to turn right\n")
      simulator.turnRobot(side)
      break;
    case "report":
      console.log(simulator.robot.report())
    break;
    case "help":
      console.log(help)
      break;
    case "quit":
      break;
    default:
      console.error("\nEnter a valid command or try help.\n")
      break;
  }
}

while(response !== "quit"){
  response = readlineSync.question("\nType your command here:\n")
  runCommand(response)
}
