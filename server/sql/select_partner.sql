SELECT
    id,
    employeeId,
    asOf,
    firstname,
    lastname,
    dateOfBirth
FROM employee_partner
WHERE employeeId = $1