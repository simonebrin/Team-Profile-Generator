class Employee {
    constructor(passedName, passedId, passedEmail) {
        this.name = passedName,
        this.id = passedId,
        this.email = passedEmail
    }

    getName() {
        return `<h4>${this.name}</h4>`
    }

    getId() {
        return `<p>ID: ${this.id}</p>`
    }

    getEmail() {
        return `<p>Email: <a href="mailto:${this.email}">${this.email}</a></p>`
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee