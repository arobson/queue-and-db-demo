CREATE TABLE IF NOT EXISTS employee_contact (
	id	            bigserial	    PRIMARY KEY,
    employeeId      bigint          NOT NULL,
    asOf            timestamp       NOT NULL            DEFAULT now(),
	contactType     varchar(10)     NOT NULL,
    contact         varchar(64)     NOT NULL
);

CREATE INDEX IF NOT EXISTS employee_contact_employee_id_idx ON employee_contact(employeeId);
