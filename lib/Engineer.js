const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitUn) {
        super(name, id, email)
        this.github = gitUn
    }
    getGithub() {
        return `<p>GitHub:<a href="${this.github}">${this.github}</a></p>`
    }

    getRole() {
        return "Engineer"
    }

}

module.exports = Engineer