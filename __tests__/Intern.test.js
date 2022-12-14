const Intern = require("../lib/Intern")

test("get interns name", () => {
    const intern = new Intern("Simone", "2", "simonebrin@gmail.com", "NYU")
    expect(intern.name).toBe("Simone")
} )

test("get interns getName", () => {
    const intern = new Intern("Simone", "2", "simonebrin@gmail.com", "NYU")
    expect(intern.getName()).toBe("Simone")
} )

test("get interns id", () => {
    const intern = new Intern("Simone", "2", "simonebrin@gmail.com", "NYU")
    expect(intern.id).toBe("2")
} )

test("get interns getId", () => {
    const intern = new Intern("Simone", "2", "simonebrin@gmail.com", "NYU")
    expect(intern.getId()).toBe("ID: 2")
} )

test("get interns email", () => {
    const intern = new Intern("Simone", "2", "simonebrin@gmail.com", "NYU")
    expect(intern.email).toBe("simonebrin@gmail.com")
} )

test("get interns getEmail", () => {
    const intern = new Intern("Simone", "2", "simonebrin@gmail.com", "NYU")
    expect(intern.getEmail()).toBe('Email: <a href=\"mailto:simonebrin@gmail.com\">simonebrin@gmail.com</a>')
} )

test("get interns school", () => {
    const intern = new Intern("Simone", "2", "simonebrin@gmail.com", "NYU")
    expect(intern.school).toBe("NYU")
} )

test("get interns getSchool", () => {
    const intern = new Intern("Simone", "2", "simonebrin@gmail.com", "NYU")
    expect(intern.getSchool()).toBe("School: NYU")
} )