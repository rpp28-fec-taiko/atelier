

# Title
Project Atelier - Team Takio

# Overview
Project Atelier provides an updated, elegant user interface for modern retailers and designers

# Table of contents

Navigation / Search Bar

Product Overview

Ratings and Reviews

# Description

Navigation / Search Bar -
  Easily find the product you are looking for with the Atelier search bar. With each keystroke the search box will display a corresponding drop down menu of several matching product options for the user to navigate to. Clicking a product in the menu will update the home page to feature the selected product.

Product Overview -
  The topmost component featured on the home page is the product overview. The currently selected product will display a main image representing one of several availble styles. This main image can be expanded to provide a larger, more detailed perspective, as well as zoom functionality for the user. Customers may also click through various styles and images related to the current product before picking a size and adding it to their shopping bag. Other standard product information such as price, category, slogan and features are also displayed here.


# Installation
Requirements:
1. Github Personal Access Token
2. AWS Access Key, Secret Key and region.

## To run the project on your local machine, please fork the repo and clone it.
```
cd atelier
npm install
```
Create a .env file at the root level of your project and add the following environment variables to the file:
```
GIT_API_TOKEN="YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"
AWS_REGION="YOUR_AWS_REGION"
AWS_ACCESS_KEY_ID="YOUR_AWS_ACCESS_KEY"
AWS_SECRET_ACCESS_KEY="YOUR_AWS_SECRET_KEY"
NODE_ENV="development"
```

Run the following commands:
```
npm run build
npm start
```
Go to http://localhost:3000 to view the project.

## To make changes to the project, follow the above steps to intialize the project:
Add an upstream remote to your project pointing to Project Atelier - Team Takio by runnning the following commands:
```
git remote add upstream https://github.com/rpp28-fec-taiko/atelier.git
git pull upstream main
```

After making any changes, please run
```
npm test
```
If all tests pass, please run:
```
npx cypress run
```
If all tests pass, then make a commit and push to your origin.
Create a PR explaining the changes made.

# Contributors

Jason Carr - Product Overview
Farhan Ali - Ratings and Reviews