// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const util = require('util');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
function promptUser() {
 return inquirer.prompt([
    {
        type: 'input',
        message: 'Enter your repository name:',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Decribe your repository',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'How do you complete the insallation of your project?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Describe how your application should be used, as well as add images/gifs/videos',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'Select the appropriate license for your application',
        name: 'License',
        choices: [
            {value:'Apache'},
            {value: 'BSD3'},
            {value: 'LGPL'},
            {value: 'MPL'},
            {value: 'MIT'},
            {value: 'None'},
        ]
    },
    {
        type: 'input',
        message: 'Explain areas where other software developers can add and contribute to your project.',
        name: 'Contribution',
    },
    {
        type: 'input',
        message:'Explain how other developers can test your application as well as how you have tested your application',
        name: 'Test'
    },
    {
        type: 'input',
        message:'If you have any questions please submit them here',
        name: 'Questions'
    },
    {
        type: 'input',
        message: 'Enter your Github Username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter contact information email/discord/slack/social media.',
        name: 'Contact',
    }
]);
}

// TODO: Create a function to write README file
async function init(){
    try {
        const answers = await promptUser();
        console.log(answers);
        const generateFile = generateMarkdown(answers);
        await writeFileAsync('./Results/README.md', generateFile);
    } catch (err){
        console.log(err)
    }
}
init();