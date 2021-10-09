// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
       {
            type: 'input',
            message:'What is the Title of your project?',
            name:'title',
       },

        {
            type: 'input',
            message:'Can you please give description of your project?',
            name:'description',
        },

        {
            type: 'input',
            message:'What installations need to be made for your project?',
            name:'installs',
        },

        {
            type: 'list',
            message:'What license do you have?',
            name:'license',
            choices: [
                'MIT (Free use with preservation of copyright/license notices)',
                'GNU (Free use but contributors must waive right to patents. Copyright/license notices must be preserved)',
                'The Unlicense (No conditions, dedicates works to public domain)',     
                ],
            default: 'MIT'
        },

        {
            type: 'input',
            message: 'What is the use for this project?',
            name: 'usage',
        },

        {
            type: 'input',
            message: 'How can someone contribute to your project?',
            name: 'contribute',
        },
         
        {
            type: 'input',
            message: 'What test can I make to ensure this code works?',
            name: 'test',
        },

        {
            type: 'input',
            message:'What is your Github Username?',
            name:'gitUser',
        },

        {
            type: 'input',
            message:'What is your Email address?',
            name:'email',
        }


    ]);

// TODO: Create a function to write README file
function writeToFile(README, data) {
    let data = 
    
    fs.writeFile(README.md,

    `
    # ${res.title}
    ${license}

    ## Description
    ${res.Description}

    ## Table Of Contents
    [Install](#installs)
    [Usage](#usage)
    [license](#license)
    [Contributing](#contributing)
    [Test](#test)
    [Questions](#questions)

    ## Installation
    ${res.installs}

    ## Usage
    ${res.usage}

    ## License 
    ${currents}

    ## Contributing
    ${res.contribute}

    ## Tests 
    ${res.test}

    ## Questions 
    [GitHub: ${res.gitUser}](https://github.com/${res.gitUser}) <br> 
    [Email](mailto:${res.email})
    `
    ,
    // .catch(err => console.error(err)) 
    )
// }

// TODO: Create a function to initialize app
function init() {

}

// // Function call to initialize app
init();
