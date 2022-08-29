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
    <div class="container-fluid text-bg-danger p-3 text-center">
        <h1>My Team</h1>
    </div>
    ${team.map(teamMember => {
        let specialAttribute
        if(teamMember.getRole() === "Manager") specialAttribute = teamMember.getOffice()
        if(teamMember.getRole() === "Engineer") specialAttribute = teamMember.getGithub()
        if(teamMember.getRole() === "Intern") specialAttribute = teamMember.getSchool()
        return`
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card h-100">
        <div class="card-body text-bg-primary text-center">
          <h4 class="card-title">${teamMember.getName()}</h4>
          <h5 class="card-text">${teamMember.getRole()}</h5>
        </div>
        <ul class="list-group list-group-flush text-center">
          <li class="list-group-item">${teamMember.getEmail()}</li>
          <li class="list-group-item">${teamMember.getId()}</li>
          <li class="list-group-item">${specialAttribute}</li>
        </ul>
        </div>
        </div>
        `
    }) }


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>`
}

module.exports = generateHtml