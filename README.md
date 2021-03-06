# E-Commerce-Back-End: Object-Relational Mapping (ORM)

## Description

This application demonstrates the back end for an e-commerce site. Express.js API is used for Sequelize to interact with a MySQL database. The SQL database includes tables for categories, products, product tags, and tags. API routes are used to make CRUD operations to convert data from/to the database.

## Installation

To run node, Visual Studio Code with Gitbash/Command line interface is required. Then, follow the steps below to include 'package.json' and start the application:

* `git clone git@github.com:ryuandrew/E-Commerce-Back-End-ORM.git` 
* Run `npm i` to install the dependencies
  - [Node](https://www.npmjs.com/package/node)
  - [Express](https://www.npmjs.com/package/express)
  - [MySQL2](https://www.npmjs.com/package/mysql)
  - [Sequelize](https://www.npmjs.com/package/sequelize)
  - [dotenv](https://www.npmjs.com/package/dotenv)
* Add `.env` file to use environment variables to store sensitive data and include
  - `DB_NAME = 'ecommerce_db'`
  - `DB_USER = 'your username'`
  - `DB_PASS = 'your password'` 
* Connect to database
  - `mysql -u root -p`
  - `source schema.sql;`
  - `npm run seeds`
* `npm start`
* Navigate to `http://localhost:3001` in Insomnia


## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API

WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
✅ THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
✅ THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
✅ THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags
✅ THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
✅ THEN I am able to successfully create, update, and delete data in my database
```

## Demo

The application will allow users to `C`reate (POST method), `R`ead (GET method), `U`pdate (PUT method), and `D`elete (DELETE method) categories, products, and tags. The walkthrough video will demonstrate all the technical acceptance criterias being met.

---
#### Github: https://github.com/ryuandrew/E-Commerce-Back-End-ORM
#### Demo Video: https://drive.google.com/file/d/1bZYxcI7SV3aCKCBFrZRc2vDOhiMry1_5/view