const { Robot }  = require('../Robot/robot')

describe("while facing north", () => {
  const robot = new Robot(0, 0, "NORTH")
  test('moving north', () => {
    robot.move()
    expect(robot.y).toBe(1)
  })
})

describe("while facing south", () => {
  const robot = new Robot(0, 0, "SOUTH")
  test('moving south', () => {
    robot.move()
    expect(robot.y).toBe(-1)
  })
})

describe("while facing east", () => {
  const robot = new Robot(0, 0, "EAST")
  test('moving east', () => {
    robot.move()
    expect(robot.x).toBe(1)
  })
})

describe("while facing west", () => {
  const robot = new Robot(0, 0, "WEST")
  test('moving west', () => {
    robot.move()
    expect(robot.x).toBe(-1)
  })
})
