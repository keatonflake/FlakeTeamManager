const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Whats the Employee's role?",
            choices: ['Engineer', new inquirer.Separator(), 'Intern', new inquirer.Separator(), 'Manager', new inquirer.Separator(),]
        }
    ])
    .then(answer => {
        console.log(answer);
        if (answer.role === "Engineer") {
            addEngineer();
        }
        else if (answer.role === "Intern") {
            addIntern();
        }
        else if (answer.role === "Manager") {
            addManager();
        }
        else {
            console.log("Please pick one")
            promptUser();
        }
    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is the Engineer's name?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email"
        },
        {
            type: 'input',
            name: 'github',
            message: "what is the Engineer's github userName?"
        }
    ])
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is the Intern's name?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Intern's email"
        },
        {
            type: 'input',
            name: 'github',
            message: "what is the Intern's school name?"
        }
    ])
}

const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is the Manager's name?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email"
        },
        {
            type: 'input',
            name: 'github',
            message: "what is the Manager's officeNumber?"
        }
    ])
}

promptUser()
.then(workerData => {
    return generateData(workerData);
})
.then
