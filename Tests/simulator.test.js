const { Table } = require('../robot/table')
const { Robot } = require('../robot/robot')
const { Simulator } = require('../robot/simulator')

global.console = {
  error: jest.fn(),
  log: jest.fn()
}

describe("createTable", () => {
  test("creates a table when valid arguments are passed", () => {
    let simulator = new Simulator
    simulator.createTable(3, 4)
    expect(simulator.table).toBeInstanceOf(Table)
  })

  test("prints error message when invalid arguments are passed", () => {
    let simulator = new Simulator
    simulator.createTable(-3, -4)

    expect(global.console.error).toHaveBeenCalledWith("\nInvalid table dimensions\n")
  })
})

describe("placeRobot", () => {
  test("places robot on table when valid arguments are passed", () => {
    let simulator = new Simulator
    simulator.createTable(3, 4)
    simulator.placeRobot(3, 4, "NORTH")
    expect(simulator.robot).toBeInstanceOf(Robot)
  })

  test("prints error message when placing robot on table with invalid arguments", () => {
    let simulator = new Simulator
    simulator.createTable(3, 4)
    simulator.placeRobot(-3, -4, "NORTH")

    expect(global.console.error).toHaveBeenCalledWith("\nInvalid robot placement!\n")
  })
})

describe("moveRobot", () => {
  test("moves robot one step forward in the direction it's facing", () => {
    let simulator = new Simulator
    simulator.createTable(5, 5)
    simulator.placeRobot(1, 3, "EAST")
    simulator.moveRobot()

    expect(simulator.robot.x).toEqual(2)
  })

  test("prints error message when robot is falling off the table", () => {
    let simulator = new Simulator
    simulator.createTable(5, 5)
    simulator.placeRobot(5, 2, "EAST")
    simulator.moveRobot()
   
    expect(global.console.error).toHaveBeenCalledWith("\nInvalid move, please turn\n")
  })

  test("checks valid move on east direction", () => {
    let simulator = new Simulator
    simulator.createTable(5, 5)
    simulator.placeRobot(0, 0, "EAST")
    simulator.moveRobot()

    expect(simulator.robot.x).toEqual(1)
  })

  test("checks valid move on west direction", () => {
    let simulator = new Simulator
    simulator.createTable(5, 5)
    simulator.placeRobot(5, 5, "WEST")
    simulator.moveRobot()

    expect(simulator.robot.x).toEqual(4)
  })

  test("checks valid move on south direction", () => {
    let simulator = new Simulator
    simulator.createTable(5, 5)
    simulator.placeRobot(5, 5, "SOUTH")
    simulator.moveRobot()

    expect(simulator.robot.y).toEqual(4)
  })

  test("checks valid move on north direction", () => {
    let simulator = new Simulator
    simulator.createTable(5, 5)
    simulator.placeRobot(0, 0, "NORTH")
    simulator.moveRobot()

    expect(simulator.robot.y).toEqual(1)
  })
})

describe("turnRobot", () => {
  test("turns robot left", () => {
    let simulator = new Simulator
    simulator.createTable(5, 5)
    simulator.placeRobot(1, 3, "EAST")
    simulator.turnRobot("left")

    expect(simulator.robot.direction).toBe("NORTH")
  })

  test("turns robot right", () => {
    let simulator = new Simulator
    simulator.createTable(5, 5)
    simulator.placeRobot(1, 3, "EAST")
    simulator.turnRobot("right")

    expect(simulator.robot.direction).toBe("SOUTH")
  })
})
