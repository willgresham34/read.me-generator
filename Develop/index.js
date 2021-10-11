// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// Array of questions for user input
const questions = () =>
 inquirer.prompt([
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
                'MIT',
                'GNU',
                'The Unlicense',
                'Apache',
                'Mozilla Public License',     
                ],
            default: 'MIT'
        },

        {
            type: 'input',
            message: 'Please add a photo to show usage of your application using name and saving it too images folder:',
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

// Function to write README file
function writeToFile(res) {

    const MIT = '[![License](https://https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT)';
    const GNU = '[![License](https://img.shields.io/badge/License-GNU-red)](https://www.gnu.org/licenses/licenses.html)';
    const Unlicense = '[![License](https://img.shields.io/badge/License-Unlicense-blue)](https://unlicense.org/)';
    const Apache ='[![License](https://img.shields.io/badge/License-Apache-blueviolet)](http://www.apache.org/licenses/)';
    const MZP = '[![License](https://img.shields.io/badge/License-Mozilla%20Public-yellow)](https://www.mozilla.org/en-US/MPL/)';
    let pickedLicense = res.license
    if (pickedLicense === 'MIT') {
        var displayLicense = MIT;
    } else if (pickedLicense === 'GNU') {
        var displayLicense = GNU;
    } else if (pickedLicense === 'The Unlicense') {
        var displayLicense = Unlicense
    } else if (pickedLicense === 'Apache') {
        var displayLicense = Apache;
    } else {
        var displayLicense = MZP;
    }

    fs.writeFile('../README.md',

    `
# ${res.title}
${displayLicense}

## Description
${res.description}

## Table Of Contents
* [Install](#installs)
* [Usage](#usage)
* [license](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
${res.installs}

## Usage
![header image](./images/${res.usage})

## License 
${displayLicense}

## Contributing
${res.contribute}

## Tests 
${res.test}

## Questions 
[GitHub: ${res.gitUser}](https://github.com/${res.gitUser}) <br> 
[Email: ${res.email}](mailto:${res.email})
    
` ,
    (err) => err ? console.error(err) : console.log('Success, your README.md has been made!')
    
    )
}

//Function to initialize app
function init() {
    questions()
        .then(res => {
            writeToFile(res);
        }) 
        .catch(err => console.error(err)) 

}

// // Function call to initialize app
init();
