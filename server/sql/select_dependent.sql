SELECT
    id,
    employeeId,
    asOf,
    firstname,
    lastname,
    dateOfBirth
FROM employee_dependent
WHERE employeeId = $1