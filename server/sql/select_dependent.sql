SELECT
    id,
    employeeId as "employeeId",
    asOf as "asOf",
    firstname as "firstName",
    lastname as "lastName",
    dateOfBirth as "dateOfBirth"
FROM employee_dependent
WHERE employeeId = $1