\COPY doctors(id, doc_name, city) FROM 'data\csv\doctors_data.csv' WITH DELIMITER ',' CSV HEADER;

\COPY patients(id, patient_name, DOB, doctor_id) FROM 'data\csv\patients_data.csv' WITH DELIMITER ',' CSV HEADER;

\COPY appointments(id, patient_id, doctor_id, appointment_date) FROM 'data\csv\appointment_data.csv' WITH DELIMITER ',' CSV HEADER;

\COPY employees(id, employee_name, company, manager_id) FROM 'data\csv\employee_data.csv' WITH DELIMITER ',' CSV HEADER;