const inquirer = require('inquirer');
// Import and require mysql2
const mysql = require('mysql2');

require('dotenv').config();

require('console.table');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: process.env.DB_USER,
    // TODO: Add MySQL Password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to the employee_db database.`)
);

// // Query database using COUNT() and GROUP BY
// db.query('SELECT  AS  FROM  GROUP BY ', function (err, results) {
//   console.log(results);
// });

// // Query database using SUM(), MAX(), MIN() AVG() and GROUP BY
// db.query('SELECT SUM(quantity) AS , MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM  GROUP BY ', function (err, results) {
//   console.log(results);
// });


function selection () {
  inquirer.prompt([
    {
      type: "list",
            name: "start",
            message: "Please choose",
            choices: [
              'View all employees',
              'View all roles',
              'View all departments',
              'Add a department',
              'Add a role',
              'Add a new employee',
            ]
    }
  ])
  .then((answers) => {
    answers.start
    switch (answers.start) {
      case 'View all employees':
        employees()
        break;
      case 'View all roles':
        roles()
        break;
      case 'View all departments':
        departments()
        break;
      case 'Add a department':
        addDepartment()
        break;
      case 'Add a role':
        addRole()
        break;
      case 'Add a new employee':
        addEmployee()
        break;
    }
  })
}

function employees () {
  db.query('SELECT * FROM employee', function (err, results) {
    console.table(results);
  selection()})
}
function roles () {
  db.query('SELECT * FROM role', function (err, results) {
    console.table(results);
  selection()})
}
function departments () {
  db.query('SELECT * FROM department', function (err, results) {
    console.table(results);
  selection()})
}

function addDepartment () {
  inquirer.prompt([
    {
      type: "input",
            name: "add_department",
            message: "Department name: ",
            
    }
  ])
  .then((answers) => {
    db.query('INSERT INTO department SET name = ?', answers.add_department, function (err, results){
      if (err){
        console.log(err)
      }
        console.log('Department added!')
      selection()
    })

  })
}

function addRole () {
  inquirer.prompt([
    {
      type: "input",
            name: "add_role",
            message: "Name of role: ",
            
    }
  ])
  .then((answers) => {
    db.query('INSERT INTO role SET title = ?', answers.add_role, function (err, results){
      if (err){
        console.log(err)
      }
        console.log('Role added!')
      selection()
    })

  })
}

function addEmployee () {
  inquirer.prompt([
    {
      type: "input",
            name: "add_employee",
            message: "New employee name: ",
            
    }
  ])
  .then((answers) => {
    db.query('INSERT INTO employee SET full_name = ?', answers.add_employee, function (err, results){
      if (err){
        console.log(err)

      }
        console.log('Employee name added!')
      selection()
    })

  })
}


selection()