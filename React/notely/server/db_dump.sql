--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
-- SET transaction_timeout = 0; -- removed because Render doesn't support it
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
-- Name: Note; Type: TABLE; Schema: public
--

CREATE TABLE public."Note" (
    id text NOT NULL,
    title text NOT NULL,
    synopsis text NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "isDeleted" boolean DEFAULT false NOT NULL,
    "isPublic" boolean DEFAULT true NOT NULL,
    "authorId" text NOT NULL,
    "notesImage" text[]
);

--
-- Name: User; Type: TABLE; Schema: public
--

CREATE TABLE public."User" (
    id text NOT NULL,
    username text NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    "emailAddress" text NOT NULL,
    password text NOT NULL,
    "avatarImage" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "isDeleted" boolean DEFAULT false NOT NULL
);

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);

--
-- Data for Name: Note; Type: TABLE DATA; Schema: public
--

COPY public."Note" (id, title, synopsis, content, "createdAt", "updatedAt", "isDeleted", "isPublic", "authorId", "notesImage") FROM stdin;
d65a7251-d4cb-42c8-af37-37d67021b14f	Travel Note	Photos from my trip	It was amazing...	2025-07-21 09:24:08.021	2025-07-21 09:24:08.021	f	t	69f9a926-4096-4b4f-9c75-d25c65649315	{}
cbb1d372-c3dd-4261-a405-4866cfe7d865	Travel Note	Photos from my trip	It was amazing...	2025-07-21 09:19:24.008	2025-07-22 07:12:51.426	f	t	69f9a926-4096-4b4f-9c75-d25c65649315	{https://www.dummyimage.com/300,https://www.dummyimage.com/640x4:3/}
45dd58de-1a2e-4ba9-b2a4-70a7049919c4	GJUHKMLN, BJHMKU	FHGJ VNGBJHKN B	GCDRFYHUJNK BNVCFGYUJHK	2025-07-26 20:28:24.214	2025-07-26 20:28:24.214	f	t	7a94d65d-fed8-468c-89a7-3b8c909cfacf	{}
\.

--
-- Data for Name: User; Type: TABLE DATA; Schema: public
--

COPY public."User" (id, username, "firstName", "lastName", "emailAddress", password, "avatarImage", "createdAt", "updatedAt", "isDeleted") FROM stdin;
7a94d65d-fed8-468c-89a7-3b8c909cfacf	Nim	Choi	Seungcheol	choi@gmail.com	$2b$10$J1plb2JTzLJkmaqAPWLU2OG13p/CFLNTUIUMu/2RNbS2h985OXbQK	\N	2025-07-16 10:18:21.822	2025-07-16 10:18:21.822	f
69f9a926-4096-4b4f-9c75-d25c65649315	Hannie	Yoon	Jeonghan	hannie@gmail.com	$2b$10$BkPR5/3h5H3CKsmm2kvY8eV7IpyBOQ0horbDsrZ9f/Sefy1q/ijVS	\N	2025-07-17 12:59:15.741	2025-07-17 12:59:15.741	f
\.

--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
7b35ae65-a2eb-44dd-99c9-a227a31256e3	9512ba1ab4403abdbfcfdd4eb8ee2ec2ba77c8a74ceb7cb3618c8d5696328b5a	2025-07-16 10:59:53.362464+03	20250716075947_created_models	\N	\N	2025-07-16 10:59:47.830975+03	1
50f49c38-3741-400b-9178-813577778c3a	f6e51c7596389b5fdc747e4ac35b51b0db35e7a85085d7d9d4c557c87a4c6634	2025-07-18 11:22:54.100799+03	20250718082252_added_notes_image_column	\N	\N	2025-07-18 11:22:52.981571+03	1
32e54f54-c4a1-403a-8410-3df98290a64d	bae8a0e3207b36d9306a083eb3a8fdb435c316aa62e1f6d6857543e9d75d609e	2025-07-21 11:30:24.601211+03	20250721083023_added_multiple_image_input	\N	\N	2025-07-21 11:30:23.494139+03	1
21a92344-1f5c-429c-a182-f81ba8d2d9a9	ae09fcd0ab1e66d921866680eda735d76453893a5a00a95e092220b71d35bc93	2025-07-21 11:32:52.081647+03	20250721083251_changed_ispublic_boolean_to_true	\N	\N	2025-07-21 11:32:51.80828+03	1
\.

--
-- Constraints and Indexes
--

ALTER TABLE ONLY public."Note"
    ADD CONSTRAINT "Note_pkey" PRIMARY KEY (id);

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);

CREATE UNIQUE INDEX "User_emailAddress_key" ON public."User" USING btree ("emailAddress");

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);

ALTER TABLE ONLY public."Note"
    ADD CONSTRAINT "Note_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;

--
-- PostgreSQL database dump complete
--
