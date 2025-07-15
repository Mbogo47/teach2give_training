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
-- Name: Blog; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Blog" (
    id text NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "isDeleted" boolean DEFAULT false NOT NULL,
    "authorId" text NOT NULL,
    "featuredImageUrl" text NOT NULL,
    synopsis text NOT NULL
);


--
-- Name: User; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."User" (
    id text NOT NULL,
    "emailAddress" text NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    "lastName" text NOT NULL,
    "firstName" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp(3) without time zone NOT NULL,
    "profileImage" text
);


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
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
-- Data for Name: Blog; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."Blog" (id, title, content, "createdAt", "updatedAt", "isDeleted", "authorId", "featuredImageUrl", synopsis) FROM stdin;
0203f1f8-f721-4ed2-8c5d-eacad2fa5890	HJHBHHKHHHBHKKHKBHNHN	yugjyhhghygghjgvgvghvggvghhjj	2025-07-10 13:23:07.495	2025-07-10 13:23:07.495	f	176d2fd2-8cef-4ec6-aff9-3d769e279ee1	https://bloggy.blob.core.windows.net/bloggymedia/ee42a9e9-059b-4bd9-932f-577e50dc195e-048e659c765081d94373816dc823a867.png	gtfvjhjhvhbhbh hygbghyjyh
c0880e6c-57a3-46d7-93f2-f23622a138ba	HJHBHHKHHHBHKKHKBHNHN	yugjyhhghygghjgvgvghvggvghhjj	2025-07-10 13:23:07.495	2025-07-10 13:23:07.495	f	176d2fd2-8cef-4ec6-aff9-3d769e279ee1	https://bloggy.blob.core.windows.net/bloggymedia/577c7615-6016-48ee-9eb6-b202c623d760-048e659c765081d94373816dc823a867.png	gtfvjhjhvhbhbh hygbghyjyh
2c37bb5e-b28e-44c4-a676-b9d3a51ab466	 Chalbi Desert: Kenya’s Mysterious Sea of Sand	Tucked away in the remote northern reaches of Kenya lies the Chalbi Desert, a vast salt-flat wilderness named after a Gabbra word meaning “bare, salty land.” Once a prehistoric lake, the Chalbi is now a shimmering expanse of cracked earth and blinding white sands that seem to stretch into infinity.\r\n\r\nTravelers brave enough to venture here are rewarded with scenes unlike any other: roaming herds of camels, distant volcanoes on the horizon, and the nomadic Gabbra people living life as they have for centuries. Sunsets cast orange hues across the endless flats, and on rare occasions, rains transform the desert into a shallow lake — a sight to behold.\r\n\r\nAdventure-seekers can drive across the salt pans in 4x4s, camp under the stars, or trek to North Horr and Kalacha oases. Despite its harsh conditions, Chalbi’s stark beauty, cultural richness, and utter remoteness make it one of Kenya’s most unforgettable hidden gems.	2025-07-11 13:04:21.324	2025-07-11 13:04:21.324	f	a282e2a5-6ba9-4b2e-8eb8-070a91e09125	https://bloggy.blob.core.windows.net/bloggymedia/1414eca6-b540-4e3d-8d66-93df90d9bd4b-chalbi.jpg	The Chalbi Desert is one of Kenya’s most surreal landscapes. Stretching across Marsabit County near the Ethiopian border, this arid region is a place of raw beauty, nomadic culture, and haunting silence.
1cccdef5-d821-4d70-aeed-e325776d44e7	Watamu: A Coastal Haven of Turquoise Waters and Swahili Charm	Just south of Malindi, Watamu is a coastal gem that blends tropical serenity with vibrant marine life. Often overshadowed by its busier counterparts like Diani or Mombasa, Watamu offers a quieter, more pristine beach experience — with the added charm of a traditional Swahili fishing village.\r\n\r\nWatamu Marine National Park is the crown jewel, offering world-class snorkeling and diving among coral gardens teeming with fish, dolphins, and sea turtles. On land, the Arabuko Sokoke Forest Reserve hides rare bird species and elephants, while the ancient ruins of Gedi offer a haunting glimpse into a 13th-century Swahili civilization.\r\n\r\nVisitors can enjoy dhow cruises, kite surfing, or simply bask on Turtle Bay’s powder-soft shores. Eco-conscious resorts and local conservation projects, like those protecting the endangered green turtle, make Watamu ideal for sustainable tourism.\r\n\r\nWatamu is more than a beach — it’s a soulful, sun-drenched escape where culture and nature exist in beautiful harmony.	2025-07-11 13:05:49.417	2025-07-11 13:05:49.417	f	a282e2a5-6ba9-4b2e-8eb8-070a91e09125	https://bloggy.blob.core.windows.net/bloggymedia/1bf9d654-c74a-4186-80e2-c26ff4a915f9-watamu.jpg	Watamu is a coastal paradise on Kenya’s Indian Ocean shoreline, famous for its white-sand beaches, coral reefs, and laid-back vibe. A dream destination for beach lovers, divers, and eco-tourists alike.
9766bbea-5d0c-4e52-aa90-49ed3cf5b640	Tsavo National Park: Kenya’s Wild Heart of Giants	Spanning more than 22,000 square kilometers, Tsavo National Park is divided into two regions — Tsavo East and Tsavo West — each offering a unique window into Kenya’s untamed wild.\r\n\r\nTsavo East is known for its red-dusted elephants and vast, open plains. The Galana River and Lugard Falls cut through this arid land, attracting a variety of wildlife from buffalo to crocodiles. Tsavo West, by contrast, is more dramatic — home to volcanic hills, lava flows, and the sparkling Mzima Springs, where hippos and crocodiles swim in crystal-clear water.\r\n\r\nThe park gained infamy during colonial times for the “Man-Eaters of Tsavo,” two lions that terrorized railway workers. Today, it’s a place of conservation success and abundant wildlife, including leopards, rhinos, and over 500 bird species.\r\n\r\nWhether you’re tracking herds of elephants or hiking up the Chyulu Hills, Tsavo delivers Africa at its most wild and awe-inspiring.	2025-07-11 13:07:41.931	2025-07-11 13:07:41.931	f	a282e2a5-6ba9-4b2e-8eb8-070a91e09125	https://bloggy.blob.core.windows.net/bloggymedia/f77840bf-2f3f-473f-adf4-7bf3735e5687-Tsavo.jpg	Tsavo, one of the largest national parks in Africa, is a land of lava flows, red elephants, roaring lions, and untouched wilderness. It is the place to go for raw, unfiltered safari experiences.
823f2807-3579-4648-a734-f886f65a8592	Masai Mara: The Kingdom of the Big Five and the Great Migration	Masai Mara National Reserve is where the spirit of the African savannah comes alive. Located in southwestern Kenya and bordering Tanzania’s Serengeti, this vast landscape of rolling grasslands, acacia trees, and golden plains is home to one of the highest concentrations of wildlife in the world.\r\n\r\nThe Great Migration, occurring between July and October, sees over 1.5 million wildebeest, zebras, and gazelles thunder across the Mara River in a dramatic crossing that draws nature lovers from around the globe. But even outside the migration, the Mara teems with life: lions lounging in the sun, cheetahs on the prowl, and massive elephants roaming freely.\r\n\r\nGuided game drives, hot air balloon safaris, and cultural visits to Masai villages enrich the experience. The Mara is more than a wildlife reserve — it is a sacred meeting ground between man, nature, and time.\r\n\r\nIf you want to see Africa raw and alive, there is no better place than the Masai Mara.	2025-07-11 13:09:33.653	2025-07-11 13:09:33.653	f	a282e2a5-6ba9-4b2e-8eb8-070a91e09125	https://bloggy.blob.core.windows.net/bloggymedia/a27e10c7-4faf-4c67-9198-4994deb36f85-masai-mara.jpg	Masai Mara is Kenya’s most iconic safari destination, world-renowned for its incredible wildlife density, Big Five sightings, and the annual wildebeest migration — one of nature’s greatest spectacles.
55ab29b5-edaf-4413-bc24-349575b3b34a	ATEEZ: The Pirate Kings of K-Pop	Debuting in 2018 under KQ Entertainment, ATEEZ quickly rose through the ranks with their strong storytelling and dynamic stage presence. Comprising eight members — Hongjoong, Seonghwa, Yunho, Yeosang, San, Mingi, Wooyoung, and Jongho — the group is best known for concept-driven music, often rooted in pirate-inspired, dystopian fantasy themes.\r\n\r\nTheir music blends EDM, hip-hop, and pop, often carrying messages of youth, resistance, and self-discovery. Tracks like "Wonderland," "Guerilla," and "Say My Name" have become anthems for fans (ATINYs), who appreciate the group’s authenticity and hard work.\r\n\r\nATEEZ is also celebrated for their captivating performances — no movement wasted, no moment dull. Their appearances on shows like Kingdom only amplified their status as one of the most performance-oriented groups in K-pop.\r\n\r\nBeyond music, ATEEZ is shaping the future of K-pop globally. With sold-out tours, international recognition, and fierce artistry, ATEEZ is not just chasing treasure — they’re becoming it.	2025-07-11 13:38:35.886	2025-07-11 13:38:35.886	f	a282e2a5-6ba9-4b2e-8eb8-070a91e09125	https://bloggy.blob.core.windows.net/bloggymedia/f7279b95-65f9-44a2-b56d-2a12d932e74a-svt.jpeg	ATEEZ isn't just a K-pop group — they're a movement. Known for their explosive performances and immersive "treasure" universe, ATEEZ continues to push boundaries and win hearts worldwide.
56550c94-105b-4f0c-8486-e50dad2e9156	 SEVENTEEN: Self-Made Idols with a Diamond Edge	Formed by PLEDIS Entertainment and debuting in 2015, SEVENTEEN is often hailed as a “self-producing” idol group. With 13 members split into three units — Hip-Hop, Vocal, and Performance — SEVENTEEN combines scale with precision, delivering flawless stages and polished music.\r\n\r\nWhat sets SEVENTEEN apart is their hands-on approach. From songwriting and choreographing to concept development, the members play a key role in every comeback. Woozi, for example, is the group's main producer, while Hoshi spearheads the choreography team.\r\n\r\nSongs like "Don't Wanna Cry," "HOME," and "Super" reflect the group's emotional range and creative evolution. Whether it’s upbeat or melancholic, SEVENTEEN makes every track feel personal and powerful.\r\n\r\nOnstage, their synchronization is legendary — often described as “one body with 13 souls.” Offstage, their bond is even tighter, with fans (CARATs) admiring their teamwork, humility, and humor.\r\n\r\nSEVENTEEN has achieved massive success both in Korea and globally, proving that when talent, teamwork, and passion collide, greatness follows.	2025-07-11 13:40:01.531	2025-07-11 13:40:01.531	f	a282e2a5-6ba9-4b2e-8eb8-070a91e09125	https://bloggy.blob.core.windows.net/bloggymedia/07a5edfc-3ce8-4d4c-a5d1-1fe439e8d1b3-ateez.jpeg	SEVENTEEN is more than just 13 members. They’re producers, performers, and pioneers redefining what it means to be an idol group in the modern K-pop scene.
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public."User" (id, "emailAddress", username, password, "lastName", "firstName", "createdAt", "updatedAt", "profileImage") FROM stdin;
176d2fd2-8cef-4ec6-aff9-3d769e279ee1	alice@example.com	alice123	$2b$10$OwPwUuJyAXKmYIboOnhHfurPJVSjvrJ3m3nLiB6QkEScNw6fxWR9e	Doe	Alice	2025-07-07 11:53:09.964	2025-07-07 11:53:09.964	\N
a282e2a5-6ba9-4b2e-8eb8-070a91e09125	ivy@gmail.com	IvyMbogo	$2b$10$luSKnT4Y3IDoZx2uafj/1OJo2XrBinCqva6IOQ938MQML1Wtp5GYW	Mbogo	Ivy	2025-07-10 06:54:48.599	2025-07-14 21:00:40.715	https://bloggy.blob.core.windows.net/bloggymedia/50753130-4e0c-4c37-a5c6-5bff7d729c47-20240509_120704.jpg
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
8b78db6a-c383-4735-a070-d49efbe6aaf0	ffb1548fa8a4a584cf19c88b448a6ddb4004d7649db2d18c94f48264c74945f5	2025-07-07 14:44:51.047634+03	20250707114450_create_models	\N	\N	2025-07-07 14:44:50.439118+03	1
db070814-773a-4d45-abb3-45a66f630e2e	c4f7e1dbd4f1d86e5565bfc54797c59137ad771147bd82d13b97b831720e566e	2025-07-10 12:08:56.43204+03	20250710090856_add_blog_card_fields	\N	\N	2025-07-10 12:08:56.190693+03	1
\.


--
-- Name: Blog Blog_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Blog"
    ADD CONSTRAINT "Blog_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_emailAddress_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "User_emailAddress_key" ON public."User" USING btree ("emailAddress");


--
-- Name: User_username_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);


--
-- Name: Blog Blog_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Blog"
    ADD CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

