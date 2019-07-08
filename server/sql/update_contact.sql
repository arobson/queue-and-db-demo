UPDATE employee_contact
SET  contact = $3
WHERE employeeId = $1 AND contactType = $2