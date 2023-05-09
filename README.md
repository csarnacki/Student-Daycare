# Student-Daycare
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)

## [Description:](#description)

    Student Allergy Care is an employee-facing web application designed for use in a school/childcare center. The app allows employees to easily view and update allergy information for each child in their care. The front end of the app is built with Handlebars.js templates and styled with Bulma CSS to create a polished, responsive UI. The app uses client-side JavaScript in the public/js files to handle user interactions like form submissions and button clicks, and AJAX is used to communicate with the server without needing to refresh the page. Allergy data is securely stored in a MySQL database using Sequelize ORM, and the server uses RESTful API routes to perform CRUD (Create, Read, Update, Delete) operations on the database. User passwords are securely hashed before being stored in the database, and login sessions are managed using express-session. Sensitive information like the database credentials is stored in environment variables to keep it secure. After testing, the app was deployed to Heroku so that it can be accessed publicly on the web, with the MySQL database also set up on Heroku to store the data.

## [Table of Contents:](#table-of-contents:)
   
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
   
## [Installation:](#installation:)

    Prior to using the application:

    * clone the repository and install the required dependencies with npm install or npm i

        These are the dependencies you should:
        * Node.js:
        A JavaScript runtime environment that executes JavaScript code outside of a web browser.

        * MYSQL2:
        A Node.js-based MySQL library used for connecting to the MySQL database that enables interaction with MySQL databases

        * Sequelize: 
        An Object Relational Mapping (ORM) library that provides an easier way to interact with databases by representing database tables as JavaScript objects.

        * express:
        A web framework that allows for easy creation of RESTful APIs (used for building the backend of the application).

        * express-handlebars:
        A templating engine used for rendering dynamic HTML pages on the server side.

        * express-session:
        A middleware used for managing user sessions on the server.

        * dotenv:
        A zero-dependency module that loads environment variables from a .env file into process.env. This makes it easy to keep sensitive information like API keys and database passwords out of code and safely stored in an environment file.
 
        * connect-session-sequelize:
        A middleware used for managing user sessions with Sequelize.

        * bcrypt:
        A library used for hashing passwords before they are stored in the database.

        * bulma:
        A CSS framework used for styling the user interface.


## [Usage:](#usage:)

    To use this application, you'll need to make sure you first cloned the repository to your local machine and installed the required dependencies by running npm install or npm i, then follow the steps below:

    * create a new .env file at the root of the project and add your MYSQL credentials (DB_NAME, DB_USR, and DB_PW).

    * Connect to MySQL database With your own database credentials; $ mysql -u root -p
    
    * Create the database schema mysql> source db/schema.sql;
    
    * Exit the database mysql> exit
    
    * Populate the database $ npm run seed
    
    * Start the server $ npm start

    * 
    
    * When done testing you can stop the application by pressing CTRL + C in your terminal.

Example of testing a route in Insomnia:
![plot](./insomnia-test-example.png)

    To access the Github Repository visit:
       https://github.com/CarolinaRaIs/shop-here-orm-e-commerce-backend

    To access the deployed site visit:
        https://carolinarais.github.io/shop-here-orm-e-commerce-backend/ 

## [License:](#license:)

       This project is licensed under the ISC license.
   
## [Contributing:](#contributing:)

       Contributions are welcome and encouraged for this project. If you find any issues or have any suggestions for new features, please open an issue or submit a pull request. Before submitting a pull request, please ensure that your code adheres to the project's coding guidelines and has appropriate test coverage. Thank you for your interest in contributing to this project!  
   
## [Tests:](#tests:)

       I encourage contributors to thoroughly explore the code and test it to ensure its functionality. Any feedback or suggestions regarding the testing process are welcomed and appreciated.
   
## [Questions:](#questions:)

       If you have any questions about the repo you can open an issue.

**If more questions arise you can also contact CarolinaRaIs at determination28@gmail.com**
   

       
------------------------------------------------------------------------------------------------
   
This README was generated by [CarolinaRaIs](https://github.com/CarolinaRaIs)