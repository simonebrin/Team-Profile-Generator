const Engineer = require("../lib/Engineer")

test("get engineers name", () => {
    const engineer = new Engineer("Simone", "2", "simonebrin@gmail.com", "simonebrin")
    expect(engineer.name).toBe("Simone")
} )

test("get engineers getName", () => {
    const engineer = new Engineer("Simone", "2", "simonebrin@gmail.com", "simonebrin")
    expect(engineer.getName()).toBe("Simone")
} )

test("get engineers id", () => {
    const engineer = new Engineer("Simone", "2", "simonebrin@gmail.com", "simonebrin")
    expect(engineer.id).toBe("2")
} )

test("get engineers getId", () => {
    const engineer = new Engineer("Simone", "2", "simonebrin@gmail.com", "simonebrin")
    expect(engineer.getId()).toBe("ID: 2")
} )

test("get engineers email", () => {
    const engineer = new Engineer("Simone", "2", "simonebrin@gmail.com", "simonebrin")
    expect(engineer.email).toBe("simonebrin@gmail.com")
} )

test("get engineers getEmail", () => {
    const engineer = new Engineer("Simone", "2", "simonebrin@gmail.com", "simonebrin")
    expect(engineer.getEmail()).toBe('Email: <a href=\"mailto:simonebrin@gmail.com\">simonebrin@gmail.com</a>')
} )

test("get engineers gitUn", () => {
    const engineer = new Engineer("Simone", "2", "simonebrin@gmail.com", "simonebrin")
    expect(engineer.github).toBe("simonebrin")
} )

test("get engineers getGithub", () => {
    const engineer = new Engineer("Simone", "2", "simonebrin@gmail.com", "simonebrin")
    expect(engineer.getGithub()).toBe('GitHub: <a href=\"https://github.com/simonebrin\" target=\"_blank\">github.com/simonebrin</a>')
} )