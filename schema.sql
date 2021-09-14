
-- Creates the employee_db database --
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
-- Uses the employee_db database --
USE employee_db;

-- Creates the table "department" within employee_db --
CREATE TABLE department (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL
);



  CREATE TABLE role (

  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  
  title VARCHAR(30) NOT NULL,

  salary DECIMAL,

  department_id INT
  );


  CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    full_name VARCHAR(30),
    role_id INT,
    manager_id INT
  );


