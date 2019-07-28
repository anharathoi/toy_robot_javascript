## Toy Robot
- A simulation of a toy robot moving on a user defined tabletop

## App configuration
- clone the repository https://github.com/anharathoi/toy_robot_javascript.git
- install node and npm on your computer
- run `npm install` to install all dependencies
- from the root folder of the project, run `node main.js`

## Running tests
- to run tests run `npm test`

## Demo
```bash
Robot Commands:
board           This will ask for table dimensions
place           This command will ask for robot placement
                e.g. 2, 3, NORTH
move            This command will move the robot one unit forward
turn            Rotate robot face left or right
report          Print out robot's current position
help            To see help message
quit            Exit from this simulator


Type your command here:
board
length?: 5
width?: 5

Type your command here:
place
please define x, y coordinates and direction for robot:
2,3,NORTH

Type your command here:
report
{ x: 2, y: 3, direction: 'NORTH' }

Type your command here:
move

Type your command here:
report
{ x: 2, y: 4, direction: 'NORTH' }

Type your command here:
turn
type 'left' to turn left, 'right' to turn right
left

Type your command here:
report
{ x: 2, y: 4, direction: 'WEST' }

Type your command here:
move

Type your command here:
report
{ x: 1, y: 4, direction: 'WEST' }

Type your command here:
quit
```
