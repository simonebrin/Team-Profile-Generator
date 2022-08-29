const Manager = require("../lib/Manager")

test("get managers name", () => {
    const manager = new Manager("Simone", "2", "simonebrin@gmail.com", "5")
    expect(manager.name).toBe("Simone")
} )

test("get managers getName", () => {
    const manager = new Manager("Simone", "2", "simonebrin@gmail.com", "5")
    expect(manager.getName()).toBe("Simone")
} )

test("get managers id", () => {
    const manager = new Manager("Simone", "2", "simonebrin@gmail.com", "5")
    expect(manager.id).toBe("2")
} )

test("get managers getId", () => {
    const manager = new Manager("Simone", "2", "simonebrin@gmail.com", "5")
    expect(manager.getId()).toBe("ID: 2")
} )

test("get managers email", () => {
    const manager = new Manager("Simone", "2", "simonebrin@gmail.com", "5")
    expect(manager.email).toBe("simonebrin@gmail.com")
} )

test("get managers getEmail", () => {
    const manager = new Manager("Simone", "2", "simonebrin@gmail.com", "5")
    expect(manager.getEmail()).toBe('Email: <a href="mailto:simonebrin@gmail.com">simonebrin@gmail.com</a>')
} )

test("get managers office", () => {
    const manager = new Manager("Simone", "2", "simonebrin@gmail.com", "5")
    expect(manager.officeNumber).toBe("5")
} )

test("get managers getOffice", () => {
    const manager = new Manager("Simone", "2", "simonebrin@gmail.com", "5")
    expect(manager.getOffice()).toBe("Office #: 5")
} )