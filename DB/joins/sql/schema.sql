DROP TABLE IF EXISTS doctors;
DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS employees;

-- doctors table
CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    doc_name VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL
);

--patients table
CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    DOB DATE NOT NULL,
    doctor_id INT,
    FOREIGN KEY(doctor_id) REFERENCES doctors(id) ON DELETE SET NULL
);

--appointments table
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    appointment_date DATE NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE SET NULL
);

--employees table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL,
    company VARCHAR(100),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);
