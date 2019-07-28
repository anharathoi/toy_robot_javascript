const { Simulator } = require("./robot/simulator")
const readlineSync = require("readline-sync")

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
    default: 
      console.error("\nEnter a valid command or try help.\n")
      break;
  }
}

while(response !== "quit"){
  response = readlineSync.question("\nType your command here:\n")
  runCommand(response)
}
