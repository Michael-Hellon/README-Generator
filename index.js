// packages needed for this application
import fs from "node:fs";
import inquirer from 'inquirer';
import colors from 'colors';

import {generateMarkdown} from "./utils/generateMarkdown.js";

// an array of questions for user input
const questions = [
  {
    type: "input",
    message: "You can cut and paste from a word document\n Enter a Title for your Project. ",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a brief description of what your project does.",
    name: "description", 
  },
  {
    type: "input",
    message: "What was your motivation??",
    name: "motivation", 
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "build", 
  },
  {
    type: "input",
    message: "What problem does it solve?",
    name: "problem", 
  },
  {
    type: "input",
    message: "What did you learn?",
    name: "learned", 
  },
  {
    type: "input",
    message: "What are the Installation Instructions?",
    name: "installation",
    default: "To start with, clone the repository from GitHub into your computer's local repository."
  },
  {
    type: "input",
    message: "What is the usage of this project?",
    name: "usage",
  },
  {
    type: "list",
    message: 'What license type do you want to use for this project? (Use the up/down arrow keys to select, then press ENTER)',
    name: "license",
    choices: [
      "MIT license", 
      "Apache License 2.0", 
      "GNU General Public License v3.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
      ],
  },
  {
    type: "input",
    message: "How does someone contribute to this project?",
    name: "contribute",
    default: "If you would like to contribute to this project, please see below for my contact information."
  },
  {
    type: "input",
    message: "what are the test conditions for this project?",
    name: "test",
  },
  {
    type: "input",
    message: "Please enter your GitHub username. Default is Michael-Hellon",
    name: "userName",
    default: "Michael-Hellon"
  },
  {
    type: "input",
    message: "What is your email address? Default is mwhellon@yahoo.com",
    name: "email",
    default: "mwhellon@yahoo.com"
  },
  {
    type: "input",
    message: "Please enter who need to be credited for the work on this project.",
    name: "credits",
  },    
  {
    type: "input",
    message: "What is the FILE NAME for the screenshot? Default is screenshot.png",
    name: "screenshot",
    default: "screenshot.png",
  }, 
]  

// function to write README file
function writeToFile(response) {
  // creates a new folder called New_README_Folder to save the newly generated README.md into
  fs.mkdir("./New_README_Folder", { recursive: true }, (err) => {if (err) throw err;})

  fs.writeFile("./New_README_Folder/README.md", generateMarkdown(response), (err) =>
    err ? console.log(colors.bgBrightRed(err)) : console.log(colors.bgBrightGreen("success! You README.md file has been generated and is in New_README_Folder."))
  );
};

// function to initialize app
async function init() {
  inquirer
    .prompt(questions)

    .then(writeToFile)

}
// Function call to initialize app
init();
