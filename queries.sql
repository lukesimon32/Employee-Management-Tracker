SELECT *
FROM employee;

SELECT department, COUNT(id) AS number_department
FROM course_names
GROUP BY department;

SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM course_names
GROUP BY department;
