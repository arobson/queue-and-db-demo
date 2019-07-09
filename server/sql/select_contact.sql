SELECT
    id,
    employeeId as "employeeId",
    asOf as "asOf",
    contactType as "contactType",
    contact
FROM employee_contact
WHERE employeeId = $1