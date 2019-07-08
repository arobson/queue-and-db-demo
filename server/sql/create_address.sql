CREATE TABLE IF NOT EXISTS employee_address (
	id	            bigserial	    PRIMARY KEY,
    employeeId      bigint          NOT NULL,
    asOf            timestamp       NOT NULL            DEFAULT now(),
	line1           varchar(256)    NOT NULL,
    line2           varchar(256)    NULL,
    province        varchar(256)    NOT NULL,
    region          varchar(256)    NOT NULL,
    country         varchar(256)    NOT NULL,
    postalCode      varchar(10)     NULL
);

CREATE INDEX IF NOT EXISTS employee_address_employee_id_idx ON employee_address(employeeId);
