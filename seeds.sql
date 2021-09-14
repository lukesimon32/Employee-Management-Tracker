INSERT INTO department (name)
VALUES ('Intern'),
       ('Customer Service'),
       ('Accountant'),
       ('IT Representative'),
       ('IT Manager'),
       ('Operations Director'),
       ('CEO');


INSERT INTO role (title, salary, department_id)
VALUES ('Intern', 0.00, 01),
       ('Customer Service', 45000.00, 02),
       ('Accountant', 65000.00, 03),
       ('IT Representative', 60000.00, 04),
       ('IT Manager', 80000.00, 05),
       ('Operations Director', 85000.00, 06),
       ('CEO', 100000.00, 07);
      

INSERT INTO employee (full_name, role_id, manager_id)
VALUES ('Mike Smith', 01, 07),
       ('Claire Jackson', 02, 07),
       ('Jackie Friedman', 03, 07),
       ('Luke Simon', 04, 07),
       ('Jack Simon', 05, 07),
       ('Adam Levinstein', 06 , 07),
       ('Joe Redfearn', 07, null);
       
