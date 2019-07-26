const { Robot }  = require('../Robot/robot')

// robot instance
describe("new Robot", () => {
  const robot = new Robot

  test("is instance of Robot", () => {
    expect(robot).toBeInstanceOf(Robot)
  })
})

// place method
describe("placing robot on the board", () => {
  let robot = new Robot
  robot.place(0, 0, "SOUTH")
  test("robot has an x position", () => {
    expect(robot.x).toBe(0)
  })

  test("robot has an y position", () => {
    expect(robot.y).toBe(0)
  })

  test("robot has a direction property", () => {
    expect(robot.direction).toBe("SOUTH")
  })
})

// move method
describe(".move()", () => {
  describe("while facing north", () => {
    let robot
    beforeEach( () => {
      robot = new Robot
      robot.place(0, 0, "NORTH")
    })
    test('moves north one space', () => {
      robot.move()
      expect(robot.y).toBe(1)
    })

    test('moves north by 4 spaces', () => {
      robot.move().move().move().move()
      expect(robot.y).toBe(4)
    })
  })

  describe("while facing south", () => {
    let robot
    beforeEach( () => {
      robot = new Robot
      robot.place(0, 0, "SOUTH")
    })
  
    test('moves south one space', () => {
      robot.move()
      expect(robot.y).toBe(-1)
    })

    test('moves south by 4 spaces', () => {
      robot.move().move().move().move()
      expect(robot.y).toBe(-4)
    })
  })

  describe("while facing east", () => {
    let robot
    beforeEach( () => {
      robot = new Robot
      robot.place(0, 0, "EAST")
    })
    
    test("moves east one space", () => {
      robot.move()
      expect(robot.x).toBe(1)
    })

    test("moves east four spaces", () => {
      robot.move().move().move().move()
      expect(robot.x).toBe(4)
    })
  })

  describe("while facing west", () => {
    let robot
    beforeEach( () => {
      robot = new Robot
      robot.place(0, 0, "WEST")
    })

    test('moves west one space', () => {
      robot.move()
      expect(robot.x).toBe(-1)
    })
    
    test('moves west four spaces', () => {
      robot.move().move().move().move()
      expect(robot.x).toBe(-4)
    })
  })
})

