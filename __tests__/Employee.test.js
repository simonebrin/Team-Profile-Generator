const Employee = require("../lib/Employee")

test("get employees name", () => {
    const employee = new Employee("Simone", "2", "simonebrin@gmail.com")
    expect(employee.name).toBe("Simone")
} )

test("get employees getName", () => {
    const employee = new Employee("Simone", "2", "simonebrin@gmail.com")
    expect(employee.getName()).toBe("<h4>Simone</h4>")
} )

test("get employees id", () => {
    const employee = new Employee("Simone", "2", "simonebrin@gmail.com")
    expect(employee.id).toBe("2")
} )

test("get employees getId", () => {
    const employee = new Employee("Simone", "2", "simonebrin@gmail.com")
    expect(employee.getId()).toBe("<p>ID: 2</p>")
} )

test("get employees email", () => {
    const employee = new Employee("Simone", "2", "simonebrin@gmail.com")
    expect(employee.email).toBe("simonebrin@gmail.com")
} )

test("get employees getEmail", () => {
    const employee = new Employee("Simone", "2", "simonebrin@gmail.com")
    expect(employee.getEmail()).toBe('<p>Email: <a href=\"mailto:simonebrin@gmail.com\">simonebrin@gmail.com</a></p>')
} )