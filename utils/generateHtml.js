function generateHtml(team) {
console.log(team)
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <title>Team Profile Generator</title>
</head>
<body>
    <h1>Your Team</h1>
    ${team.map(teamMember => {
        let specialAttribute
        if(teamMember.getRole() === "Manager") specialAttribute = teamMember.getOffice()
        if(teamMember.getRole() === "Engineer") specialAttribute = teamMember.getGithub()
        if(teamMember.getRole() === "Intern") specialAttribute = teamMember.getGithub()
        return`
        <div class="member-card"
        <h3>${teamMember.getRole()}</h3>
        ${teamMember.getName()}
        ${teamMember.getEmail()}
        ${teamMember.getId()}
        ${specialAttribute}
        </div>
        `
    }) .join("")}
    
</body>
</html>`
}

module.exports = generateHtml