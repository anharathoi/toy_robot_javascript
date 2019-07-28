const { Table } = require('../robot/table')
const { Robot } = require('../robot/robot')
const { Simulator } = require('../robot/simulator')

describe("createTable", () => {
  test("creates a table when valid arguments are passed", () => {
    let simulator = new Simulator
    simulator.createTable(3, 4)
    expect(simulator.table).toBeInstanceOf(Table)
  })

  test("raises an error when invalid arguments are passed", () => {
    let simulator = new Simulator
    expect(() => {simulator.createTable(-3, -4)}).toThrow(Error)
  })
})

describe("placeRobot", () => {
  test("places robot on table when valid parameters are passed", () => {
    let simulator = new Simulator
    simulator.placeRobot(3, 4, "NORTH")
    expect(simulator.robot).toBeInstanceOf(Robot)
  })

  test.skip("raises an error when placing robot on table when invalid parameters are passed", () => {
    let simulator = new Simulator
    simulator.placeRobot(3, 4, "NORTH")
    expect(simulator.robot).toBeInstanceOf(Robot)
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

  test.skip("raises an error when robot is falling off the table", () => {
    let simulator = new Simulator
    simulator.createTable(5, 5)
    simulator.placeRobot(5, 3, "EAST")
   
    expect(() => { simulator.moveRobot() }).toThrow(Error)
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