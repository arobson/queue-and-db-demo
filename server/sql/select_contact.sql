SELECT
    id,
    employeeId,
    asOf,
    contactType,
    contact
FROM employee_contact
WHERE employeeId = $1