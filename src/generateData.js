
module.exports = workerData => {
    const { role, name, email, github, officeNumber} = workerData;
    return `
    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">

    <title>Flakes Team Manager</title>
</head>

<body>
    <header> My Team </header>
    <div class="card">
        <div class="card-header">Night</div>
        <div class="card-main">
            <i class="material-icons">account_box</i>
            <div class="main-description">name</div>
        </div>
    </div>
</body>

</html>`
}