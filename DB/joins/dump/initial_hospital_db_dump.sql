--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: appointments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.appointments (
    id integer NOT NULL,
    patient_id integer,
    doctor_id integer,
    appointment_date date NOT NULL
);


ALTER TABLE public.appointments OWNER TO postgres;

--
-- Name: appointments_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.appointments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.appointments_id_seq OWNER TO postgres;

--
-- Name: appointments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.appointments_id_seq OWNED BY public.appointments.id;


--
-- Name: doctors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctors (
    id integer NOT NULL,
    doc_name character varying(100) NOT NULL,
    city character varying(100) NOT NULL
);


ALTER TABLE public.doctors OWNER TO postgres;

--
-- Name: doctors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.doctors_id_seq OWNER TO postgres;

--
-- Name: doctors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctors_id_seq OWNED BY public.doctors.id;


--
-- Name: employees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employees (
    id integer NOT NULL,
    employee_name character varying(100) NOT NULL,
    company character varying(100),
    manager_id integer
);


ALTER TABLE public.employees OWNER TO postgres;

--
-- Name: employees_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employees_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.employees_id_seq OWNER TO postgres;

--
-- Name: employees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employees_id_seq OWNED BY public.employees.id;


--
-- Name: patients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patients (
    id integer NOT NULL,
    patient_name character varying(100) NOT NULL,
    dob date NOT NULL,
    doctor_id integer
);


ALTER TABLE public.patients OWNER TO postgres;

--
-- Name: patients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.patients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.patients_id_seq OWNER TO postgres;

--
-- Name: patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.patients_id_seq OWNED BY public.patients.id;


--
-- Name: appointments id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments ALTER COLUMN id SET DEFAULT nextval('public.appointments_id_seq'::regclass);


--
-- Name: doctors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors ALTER COLUMN id SET DEFAULT nextval('public.doctors_id_seq'::regclass);


--
-- Name: employees id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees ALTER COLUMN id SET DEFAULT nextval('public.employees_id_seq'::regclass);


--
-- Name: patients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patients ALTER COLUMN id SET DEFAULT nextval('public.patients_id_seq'::regclass);


--
-- Data for Name: appointments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.appointments (id, patient_id, doctor_id, appointment_date) FROM stdin;
1	1	26	2026-02-09
2	2	40	2026-03-26
3	3	2	2026-01-06
4	4	7	2024-12-05
5	5	20	2024-06-10
6	6	21	2026-05-30
7	7	28	2025-03-15
8	8	2	2025-06-18
9	9	29	2024-08-22
10	10	32	2025-01-13
11	11	19	2025-01-16
12	12	1	2024-08-16
13	13	22	2025-07-04
14	14	32	2024-12-12
15	19	1	2025-02-01
16	16	16	2025-09-30
17	17	36	2025-02-09
18	18	12	2025-08-18
19	19	34	2024-11-11
20	20	7	2025-07-08
\.


--
-- Data for Name: doctors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.doctors (id, doc_name, city) FROM stdin;
1	Lisandra U. Higgins	Waterbury
2	Rosalyn N. Bradford	Montpelier
3	Acton V. Lynch	Joliet
4	Lance C. Gross	Knoxville
5	Danielle N. Mcintosh	Olathe
6	Yolanda Q. Cortez	Overland Park
7	Hiroko E. Aguirre	Kansas City
8	Eagan D. Ferguson	Rochester
9	Iliana M. Villarreal	Indianapolis
10	Priscilla J. Gates	Provo
11	Peter G. Wilkins	Dallas
12	Lane Y. Maldonado	Racine
13	Wylie E. Barron	Provo
14	Ivy D. Whitfield	Gary
15	Martha Y. Osborn	Denver
16	Kylynn C. Rose	Spokane
17	Ora K. Mckinney	Des Moines
18	Jasmine A. Lewis	Saint Louis
19	Hermione O. Vinson	Bowling Green
20	Mollie M. Mcfarland	Georgia
21	Tanek E. Fitzgerald	Paradise
22	Madonna Q. Wheeler	Springfield
23	Florence W. Haney	Portland
24	Justina D. Talley	Evansville
25	Kaye R. Witt	Lowell
26	Lillith V. Silva	Anchorage
27	Isaac H. Macdonald	Jacksonville
28	Jesse F. Acevedo	New Haven
29	Charles J. Mckenzie	Salt Lake City
30	Noble L. Briggs	Carson City
31	Bertha S. Sawyer	Virginia Beach
32	Wade P. Mccray	Lowell
33	Davis P. Alford	Carson City
34	Brianna D. Meyer	Detroit
35	Cedric N. Ortiz	Stamford
36	Haviva P. Andrews	Montgomery
37	Sigourney C. Serrano	Los Angeles
38	Vernon P. Rollins	Helena
39	Piper S. Elliott	Worcester
40	Xander R. Marquez	Savannah
41	Irma E. Marsh	Flint
42	Rae Q. Cabrera	Springdale
43	Sharon K. Oneil	Columbia
44	Christine T. Cole	Mesa
45	Cara O. Massey	Topeka
46	Jade F. Durham	Atlanta
47	Keith S. Glass	Southaven
48	Carol D. Bryant	Lafayette
49	Rhoda G. Holloway	Lakewood
50	Adrienne J. Watts	Erie
\.


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employees (id, employee_name, company, manager_id) FROM stdin;
1	Tatum Garrett	Tempor Bibendum Industries	1
2	Scott Hawkins	Aptent Institute	4
3	Nomlanga Mitchell	Pharetra Institute	7
4	Zia Summers	Sit Amet Corp.	10
5	Indigo Sloan	Vitae Semper Consulting	13
6	Aimee Harrison	Nunc Mauris Morbi LLP	16
7	Price Paul	Quam Curabitur Vel Corporation	19
8	Bradley Ortega	Eu Elit Corp.	14
9	Kadeem Pierce	Tempor Est Ac Foundation	15
10	Dai Fischer	Elit Aliquam Ltd	17
11	Kevin Wynn	Cursus Et Eros Ltd	20
12	Philip Weber	Varius Institute	3
13	Solomon Holder	Quis Diam Inc.	3
14	Gavin Mcmillan	Nec Ante Inc.	11
15	Belle Marshall	Nullam Scelerisque LLC	19
16	Emmanuel Hale	Arcu Foundation	6
17	Sasha Avery	Fusce Diam Institute	7
18	Conan Pope	Vulputate Ullamcorper Industries	8
19	Graham Andrews	Risus Donec PC	5
20	Gillian Welch	In LLC	3
\.


--
-- Data for Name: patients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.patients (id, patient_name, dob, doctor_id) FROM stdin;
1	Madaline Le	2024-09-02	1
2	Ayanna Boyle	2025-12-16	4
3	Wyatt Fuller	2026-01-09	7
4	Cally Jacobson	2024-09-12	10
5	Vanna Mejia	2026-01-30	13
6	Abel Albert	2024-12-19	16
7	Dara Brewer	2025-02-11	19
8	Orli Pollard	2024-11-07	22
9	Donovan Byers	2025-09-12	25
10	Boris Shannon	2025-12-19	28
11	Silas Wade	2025-09-22	31
12	Aidan Preston	2024-11-08	34
13	Amir Ratliff	2024-09-10	37
14	Reagan Franks	2024-08-08	40
15	Ian Mueller	2025-04-24	43
16	Lunea Jordan	2024-09-19	46
17	Chelsea Rasmussen	2024-10-17	49
18	Aquila Keith	2026-05-19	27
19	Myles Turner	2024-07-24	23
20	Jerome Gutierrez	2024-11-04	44
\.


--
-- Name: appointments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.appointments_id_seq', 1, false);


--
-- Name: doctors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.doctors_id_seq', 1, false);


--
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employees_id_seq', 1, false);


--
-- Name: patients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.patients_id_seq', 1, false);


--
-- Name: appointments appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY (id);


--
-- Name: doctors doctors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors
    ADD CONSTRAINT doctors_pkey PRIMARY KEY (id);


--
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);


--
-- Name: patients patients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (id);


--
-- Name: appointments appointments_doctor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_doctor_id_fkey FOREIGN KEY (doctor_id) REFERENCES public.doctors(id) ON DELETE SET NULL;


--
-- Name: appointments appointments_patient_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_patient_id_fkey FOREIGN KEY (patient_id) REFERENCES public.patients(id) ON DELETE CASCADE;


--
-- Name: employees employees_manager_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_manager_id_fkey FOREIGN KEY (manager_id) REFERENCES public.employees(id) ON DELETE SET NULL;


--
-- Name: patients patients_doctor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_doctor_id_fkey FOREIGN KEY (doctor_id) REFERENCES public.doctors(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

