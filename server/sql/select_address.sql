SELECT
    id,
    employeeId,
    asOf,
    line1,
    line2,
    province,
    region,
    country,
    postalCode
FROM employee_address
WHERE employeeId = $1