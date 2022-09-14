function generateTeam(team) {
    function generateEmployeeCard(employee) {
       return `
         <div class="card employee-card">
                            <div class="card-header bg-primary text-white">
                                <h2 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${employee.getRole()}</h2>
                                <h3 class="card-title">${employee.getName()}</h3>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">ID:${employee.getID()}</li>
                                    <li class="list-group-item">Email:${employee.getEmail()}<a href="mailto:example@yahoo.com"></a></li>
                                    
                                    ${
                                        employee.getRole() === "Manager" ? ` 
                                        
                                        <li class="list-group-item">Office Number:${employee.getOfficeNumber()}</li>
                                        
                                        ` : employee.getRole() === "Engineer" ? `
                                        
                                        <li class="list-group-item">github:${employee.getGithub()}</li>

                                        ` : `

                                        <li class="list-group-item">School:${employee.getSchool()}</li>
                                        
                                        `
                                    }
                                    
                                </ul>
                            </div>
                        </div>
        
        
        `
    }

    team.map((employee) => generateEmployeeCard(employee));
    return team.map((employee) => generateEmployeeCard(employee)).join("");

}



module.exports = (team) => {
    return `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>This is Your Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawsome.com/0eb3eb6634timberhead.js"></script>
</head>


<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">This is your Team</h1>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">

            ${generateTeam(team)}
        
            </div>
        </div>
    </div>
</body>

</html>
    
    
    
    `;
}