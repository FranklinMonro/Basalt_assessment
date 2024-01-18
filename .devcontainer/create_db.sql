--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1 (Debian 16.1-1.pgdg120+1)
-- Dumped by pg_dump version 16.1

-- Started on 2024-01-14 19:34:02 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--
\c postgres;
CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3352 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 24579)
-- Name: weather_city; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.weather_city (
    id uuid NOT NULL,
    city character(50),
    main character(50),
    description character(50),
    date date,
    active boolean
);


ALTER TABLE public.weather_city OWNER TO postgres;

--
-- TOC entry 3203 (class 2606 OID 24583)
-- Name: weather_city weather_city_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.weather_city
    ADD CONSTRAINT weather_city_pkey PRIMARY KEY (id);


-- Completed on 2024-01-14 19:34:02 UTC

--
-- PostgreSQL database dump complete
--

