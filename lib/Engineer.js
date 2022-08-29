const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitUn) {
        super(name, id, email)
        this.github = gitUn
    }
    getGithub() {
        return `GitHub: <a href="${this.github}@github.com">${this.github}@github.com</a>`
    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer