// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license !== "None"){
  return `![Badge](https://img.shields.io/badge/license-$(license)-blue.svg)`
 }
return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license !== "None"){
  return `-[License](#license)`
 }
 return ``;
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None"){
    return `## License
    Licensed by ${license}`
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contribution](#constibution)
  *[Test](#test)
  *[Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation
  _Here is a guide to Installing this application_

  ${data.installation}

  ## Usage

  _Use cases and How to use this application_

  ${data.usage}

  ## Contribution 
  _If you would like to contribute, please follow these rules, and here is how you can contribute_
  
  ${data.contribution}

  ## Test
  _How to test this application_

  ${data.test}

  ## Questions
  _If you have any questions please submit them here:_

  ${data.questions}

  _Contact Info_

-Email: ${data.email}

Github: [${data.username}](https://github.com/${data.username})

---

`;
}

module.exports = generateMarkdown;
