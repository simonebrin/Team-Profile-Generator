const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitUn) {
        super(name, id, email)
        this.github = gitUn
    }
    getGithub() {
        return `GitHub: <a href="https://github.com/${this.github}" target="_blank">github.com/${this.github}</a>`
    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer