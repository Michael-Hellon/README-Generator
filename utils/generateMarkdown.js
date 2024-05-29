// Create a function that returns a license badge(ICON) based on which license is passed in 
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license){
        case "MIT license":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]"; 
        case "Apache License 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"; 
        case "GNU General Public License v3.0":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
        case "Mozilla Public License 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
        case "The Unlicense":
            return "[![License](https://img.shields.io/badge/License-Unlicense-green.svg)]";
        default:
            return "";
    }

}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license){
        case "MIT license":
            return "[![License: MIT]](https://opensource.org/licenses/MIT)";
        case "Apache License 2.0":
            return "[![License]](https://opensource.org/licenses/Apache-2.0)";
        case "GNU General Public License v3.0":
            return "[![License: GPL v3]](https://opensource.org/license/gpl-3-0/)";
        case "Mozilla Public License 2.0":
            return "[![License: MPL 2.0]](https://opensource.org/licenses/MPL-2.0)";
        case "The Unlicense":
            return "[![License]](https://opensource.org/license/unlicense)";
        default:
            return ""
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== undefined) {
        return `Please click on the badge below to read information about the ${data.license} license.`;
    } else{
        return "";
    } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
        ${data.description}

        - ${data.motivation}
        - ${data.build}
        - ${data.problem}
        - ${data.learned}

        ## Table of contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Contributing](#contribute)
        * [Tests](#test)
        * [Questions](#question)
        * [License](#license) 
        
    
        ## Installation
        ${data.installation}

        ## Usage
        ${data.usage}

        Here is the link to watch the demo of the application </asset/video/demoVideo

        ## License
        ${data.license}

        ## How to Contribute to this project
        ${data.contribute}
        
        ## Tests
        ${data.test}

        ## Questions
        My Github profile can be located at <https://github.com/${data.userName}/>

        You can email me with any questions at ${data.email}

        ![screenshot](/assets/images/${screenshot})

        ## Credits
        ${data.credits}
        
        ## License
        ${renderLicenseLink};

        ${renderLicenseSection};

        ${renderLicenseBadge};
`;
}

export {generateMarkdown};
