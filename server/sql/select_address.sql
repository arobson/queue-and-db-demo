SELECT
    id,
    employeeId as "employeeId",
    asOf as "asOf",
    line1,
    line2,
    province,
    region,
    country,
    postalCode as "postalCode"
FROM employee_address
WHERE employeeId = $1