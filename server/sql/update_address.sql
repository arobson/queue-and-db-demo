UPDATE employee_address
SET line1 = $2,
    line2 = $3,
    province = $4,
    region = $5,
    country = $6,
    postalCode = $7 
WHERE employeeId = $1