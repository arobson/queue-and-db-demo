CREATE TABLE IF NOT EXISTS employee_partner (
	id	            bigserial	    PRIMARY KEY,
    employeeId      bigint          NOT NULL,
    asOf            timestamp       NOT NULL            DEFAULT now(),
    firstname       varchar(256)    NOT NULL,
    lastname        varchar(256)    NOT NULL,
    dateOfBirth     date            NOT NULL
);

CREATE INDEX IF NOT EXISTS employee_partner_employee_id_idx ON employee_partner(employeeId);
