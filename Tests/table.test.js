const { Table } = require('../robot/table')

describe("new table", () => {
  const table = new Table(5, 5)

  test("is an instance of Table", () => {
    expect(table).toBeInstanceOf(Table)
  })

  test("length is an integer", () => {
    expect(typeof table.length).toBe('number')
  })

  test("width is an integer", () => {
    expect(typeof table.width).toBe('number')
  })
})
