-- SQLPracticePro — StreamFlix Seed Data (v2)
-- Run after schema.sql. Populates genres, then directors, then movies
-- (parents before the child table that references them).
--
-- This dataset is hand-designed, not randomly generated: every repeated
-- value, every NULL, and every title is intentional and tied to a
-- specific SQL concept. See database/README.md for the full breakdown.
--
-- Movie ids 1–3 keep the exact title/genre/director/year already shipped
-- in frontend/src/data/mockTicket.ts, so Ticket #001 stays consistent
-- once the backend replaces the mock.

-- ---------------------------------------------------------------------
-- genres (12 rows)
-- ---------------------------------------------------------------------
INSERT INTO genres (id, name) VALUES
    (1, 'Drama'),
    (2, 'Action'),
    (3, 'Comedy'),
    (4, 'Thriller'),
    (5, 'Sci-Fi'),
    (6, 'Documentary'),
    (7, 'Animation'),
    (8, 'Horror'),
    (9, 'Romance'),
    (10, 'Mystery'),
    (11, 'Fantasy'),
    (12, 'Adventure');

-- ---------------------------------------------------------------------
-- directors (30 rows)
-- Countries are drawn from a repeated pool on purpose — several
-- directors share a country, so GROUP BY on director nationality has
-- real repeats to aggregate later.
-- ---------------------------------------------------------------------
INSERT INTO directors (id, name, country) VALUES
    (1, 'Elena Ross', 'USA'),
    (2, 'Marcus Webb', 'UK'),
    (3, 'Priya Nair', 'India'),
    (4, 'Tom Delgado', 'USA'),
    (5, 'Aiko Tanaka', 'Japan'),
    (6, 'Lars Eriksson', 'Sweden'),
    (7, 'Naomi Clarke', 'Canada'),
    (8, 'Diego Ramirez', 'Mexico'),
    (9, 'Sofia Bianchi', 'Italy'),
    (10, 'Chidi Okafor', 'Nigeria'),
    (11, 'Hana Kim', 'South Korea'),
    (12, 'Julien Moreau', 'France'),
    (13, 'Grace Okonkwo', 'Nigeria'),
    (14, 'Ravi Shankar', 'India'),
    (15, 'Ingrid Larsson', 'Sweden'),
    (16, 'Mateo Alvarez', 'Mexico'),
    (17, 'Yuki Sato', 'Japan'),
    (18, 'Fatima Al-Sayed', 'Egypt'),
    (19, 'Connor Byrne', 'Ireland'),
    (20, 'Isabela Costa', 'Brazil'),
    (21, 'Noah Bergman', 'Sweden'),
    (22, 'Leila Haddad', 'Lebanon'),
    (23, 'Ethan Park', 'South Korea'),
    (24, 'Camille Dubois', 'France'),
    (25, 'Omar Farouk', 'Egypt'),
    (26, 'Astrid Nilsen', 'Norway'),
    (27, 'Kenji Watanabe', 'Japan'),
    (28, 'Rosa Fernandez', 'Mexico'),
    (29, 'Declan Murphy', 'Ireland'),
    (30, 'Mei Lin', 'China');

-- ---------------------------------------------------------------------
-- movies (100 rows)
-- Deliberately not randomly generated. Genre and director assignment
-- cycles through all 12 genres and all 30 directors so every one is
-- represented multiple times (supports GROUP BY / COUNT / JOIN
-- exercises). Titles are hand-written per genre so tone matches
-- content — a Horror title sounds like horror, a Fantasy title sounds
-- like fantasy — rather than a mechanical word-combination pattern.
-- Country and language are drawn from small repeated pools (12
-- countries, 8 languages). Ratings and durations vary realistically
-- across the full allowed range.
--
-- A handful of rows intentionally leave rating, duration_minutes,
-- language, or country NULL — just enough to teach IS NULL,
-- IS NOT NULL, and COALESCE, without making the catalog feel broken:
--   rating NULL:           7 rows  (ids 12, 27, 44, 50, 61, 78, 93)
--   duration_minutes NULL: 6 rows  (ids 19, 41, 50, 63, 82, 96)
--   language NULL:         5 rows  (ids 8, 31, 52, 69, 87)
--   country NULL:          5 rows  (ids 15, 36, 58, 74, 90)
-- Movie id 50 intentionally has two NULLs at once (rating AND
-- duration_minutes), for compound-condition and multi-column COALESCE
-- lessons later.
-- ---------------------------------------------------------------------
INSERT INTO movies (id, title, genre_id, director_id, release_year, rating, duration_minutes, language, country) VALUES
    (1, 'Redline Protocol', 2, 4, 2023, 4.0, 85, 'English', 'USA'),
    (2, 'Ashfall', 1, 2, 2022, 7.7, 98, 'Hindi', 'UK'),
    (3, 'Last Signal', 2, 4, 2021, 5.8, 111, 'Japanese', 'India'),
    (4, 'The Informant', 4, 4, 2008, 9.5, 124, 'Korean', 'Japan'),
    (5, 'Orbital Drift', 5, 5, 2009, 7.6, 137, 'French', 'South Korea'),
    (6, 'Voices of the Delta', 6, 6, 2010, 5.7, 150, 'German', 'France'),
    (7, 'Luma and the Lantern', 7, 7, 2011, 9.4, 163, 'Spanish', 'Germany'),
    (8, 'The Tenants', 8, 8, 2012, 7.5, 95, NULL, 'Canada'),
    (9, 'Letters from Lisbon', 9, 9, 2013, 5.6, 108, 'English', 'Mexico'),
    (10, 'The Vanishing Hour', 10, 10, 2014, 9.3, 121, 'Hindi', 'Brazil'),
    (11, 'The Glassmaker''s Daughter', 11, 11, 2015, 7.4, 134, 'Japanese', 'Nigeria'),
    (12, 'The Cartographer''s Map', 12, 12, 2016, NULL, 147, 'Korean', 'Australia'),
    (13, 'Winter Light', 1, 13, 2017, 9.2, 160, 'French', 'USA'),
    (14, 'Steel Horizon', 2, 14, 2018, 7.3, 92, 'German', 'UK'),
    (15, 'The Wedding Disaster', 3, 15, 2019, 5.4, 105, 'Spanish', NULL),
    (16, 'Dead Drop', 4, 16, 2020, 9.1, 118, 'Portuguese', 'Japan'),
    (17, 'The Last Colony', 5, 17, 2021, 7.2, 131, 'English', 'South Korea'),
    (18, 'The Last Fishermen', 6, 18, 2022, 5.3, 144, 'Hindi', 'France'),
    (19, 'The Paper Kingdom', 7, 19, 2023, 9.0, NULL, 'Japanese', 'Germany'),
    (20, 'Hollow House', 8, 20, 2024, 7.1, 89, 'Korean', 'Canada'),
    (21, 'The Summer We Left', 9, 21, 2005, 5.2, 102, 'French', 'Mexico'),
    (22, 'Room 214', 10, 22, 2006, 8.9, 115, 'German', 'Brazil'),
    (23, 'Kingdom of Ash and Salt', 11, 23, 2007, 7.0, 128, 'Spanish', 'Nigeria'),
    (24, 'Across the Frozen Strait', 12, 24, 2008, 5.1, 141, 'Portuguese', 'Australia'),
    (25, 'The Quiet Room', 1, 25, 2009, 8.8, 154, 'English', 'USA'),
    (26, 'Blackout Protocol', 2, 26, 2010, 6.9, 86, 'Hindi', 'UK'),
    (27, 'Family Business', 3, 27, 2011, NULL, 99, 'Japanese', 'India'),
    (28, 'No Witnesses', 4, 28, 2012, 8.7, 112, 'Korean', 'Japan'),
    (29, 'Synthetic Minds', 5, 29, 2013, 6.8, 125, 'French', 'South Korea'),
    (30, 'Concrete and Coral', 6, 30, 2014, 4.9, 138, 'German', 'France'),
    (31, 'Whisker Street', 7, 1, 2015, 8.6, 151, NULL, 'Germany'),
    (32, 'Night Shift', 8, 2, 2016, 6.7, 164, 'Portuguese', 'Canada'),
    (33, 'Two Tickets to Nowhere', 9, 3, 2017, 4.8, 96, 'English', 'Mexico'),
    (34, 'The Silent Partner', 10, 4, 2018, 8.5, 109, 'Hindi', 'Brazil'),
    (35, 'The Wayfinder', 11, 5, 2019, 6.6, 122, 'Japanese', 'Nigeria'),
    (36, 'The Lost Expedition', 12, 6, 2020, 4.7, 135, 'Korean', NULL),
    (37, 'Everything We Kept', 1, 7, 2021, 8.4, 148, 'French', 'USA'),
    (38, 'Zero Hour', 2, 8, 2022, 6.5, 161, 'German', 'UK'),
    (39, 'Terms and Conditions', 3, 9, 2023, 4.6, 93, 'Spanish', 'India'),
    (40, 'The Second Call', 4, 10, 2024, 8.3, 106, 'Portuguese', 'Japan'),
    (41, 'Event Horizon Diner', 5, 11, 2005, 6.4, NULL, 'English', 'South Korea'),
    (42, 'Borrowed Time', 6, 12, 2006, 4.5, 132, 'Hindi', 'France'),
    (43, 'The Tin Forest', 7, 13, 2007, 8.2, 145, 'Japanese', 'Germany'),
    (44, 'The Basement Door', 8, 14, 2008, NULL, 158, 'Korean', 'Canada'),
    (45, 'The Long Way Home', 9, 15, 2009, 4.4, 90, 'French', 'Mexico'),
    (46, 'Whatever Happened to Nora', 10, 16, 2010, 8.1, 103, 'German', 'Brazil'),
    (47, 'Crown of Thorns and Ivy', 11, 17, 2011, 6.2, 116, 'Spanish', 'Nigeria'),
    (48, 'River of No Return', 12, 18, 2012, 4.3, 129, 'Portuguese', 'Australia'),
    (49, 'A Thousand Ordinary Days', 1, 19, 2013, 8.0, 142, 'English', 'USA'),
    (50, 'Crossfire City', 2, 20, 2014, NULL, NULL, 'Hindi', 'UK'),
    (51, 'The Roommate Agreement', 3, 21, 2015, 4.2, 87, 'Japanese', 'India'),
    (52, 'Chain of Custody', 4, 22, 2016, 7.9, 100, NULL, 'Japan'),
    (53, 'Quantum Static', 5, 23, 2017, 6.0, 113, 'French', 'South Korea'),
    (54, 'The Archive Keepers', 6, 24, 2018, 4.1, 126, 'German', 'France'),
    (55, 'Bramblewood', 7, 25, 2019, 7.8, 139, 'Spanish', 'Germany'),
    (56, 'Something in the Walls', 8, 26, 2020, 5.9, 152, 'Portuguese', 'Canada'),
    (57, 'Every Wrong Turn', 9, 27, 2021, 4.0, 165, 'English', 'Mexico'),
    (58, 'The Fourth Guest', 10, 28, 2022, 7.7, 97, 'Hindi', NULL),
    (59, 'The Nightgarden', 11, 29, 2023, 5.8, 110, 'Japanese', 'Nigeria'),
    (60, 'The Long Traverse', 12, 30, 2024, 9.5, 123, 'Korean', 'Australia'),
    (61, 'The Weight of Water', 1, 1, 2005, NULL, 136, 'French', 'USA'),
    (62, 'The Extraction', 2, 2, 2006, 5.7, 149, 'German', 'UK'),
    (63, 'Second Best Man', 3, 3, 2007, 9.4, NULL, 'Spanish', 'India'),
    (64, 'Cold Case Zero', 4, 4, 2008, 7.5, 94, 'Portuguese', 'Japan'),
    (65, 'The Mars Directive', 5, 5, 2009, 5.6, 107, 'English', 'South Korea'),
    (66, 'Roots and Rust', 6, 6, 2010, 9.3, 120, 'Hindi', 'France'),
    (67, 'The Cloud Catcher', 7, 7, 2011, 7.4, 133, 'Japanese', 'Germany'),
    (68, 'The Widow''s Line', 8, 8, 2012, 5.5, 146, 'Korean', 'Canada'),
    (69, 'Postcards from June', 9, 9, 2013, 9.2, 159, NULL, 'Mexico'),
    (70, 'A Stranger''s Alibi', 10, 10, 2014, 7.3, 91, 'German', 'Brazil'),
    (71, 'Sons of the Old Forest', 11, 11, 2015, 5.4, 104, 'Spanish', 'Nigeria'),
    (72, 'Summit Fever', 12, 12, 2016, 9.1, 117, 'Portuguese', 'Australia'),
    (73, 'Small Mercies', 1, 13, 2017, 7.2, 130, 'English', 'USA'),
    (74, 'Rogue Signal', 2, 14, 2018, 5.3, 143, 'Hindi', NULL),
    (75, 'Office Hours', 3, 15, 2019, 9.0, 156, 'Japanese', 'India'),
    (76, 'The Understudy', 4, 16, 2020, 7.1, 88, 'Korean', 'Japan'),
    (77, 'Neural Drift', 5, 17, 2021, 5.2, 101, 'French', 'South Korea'),
    (78, 'After the Factory', 6, 18, 2022, NULL, 114, 'German', 'France'),
    (79, 'Nutshell', 7, 19, 2023, 7.0, 127, 'Spanish', 'Germany'),
    (80, 'Static at Midnight', 8, 20, 2024, 5.1, 140, 'Portuguese', 'Canada'),
    (81, 'The Space Between Us', 9, 21, 2005, 8.8, 153, 'English', 'Mexico'),
    (82, 'The Missing Piece', 10, 22, 2006, 6.9, NULL, 'Hindi', 'Brazil'),
    (83, 'The Cartomancer', 11, 23, 2007, 5.0, 98, 'Japanese', 'Nigeria'),
    (84, 'The Uncharted Coast', 12, 24, 2008, 8.7, 111, 'Korean', 'Australia'),
    (85, 'Where the River Bends', 1, 25, 2009, 6.8, 124, 'French', 'USA'),
    (86, 'Point of No Return', 2, 26, 2010, 4.9, 137, 'German', 'UK'),
    (87, 'The Long Weekend', 3, 27, 2011, 8.6, 150, NULL, 'India'),
    (88, 'Blind Spot', 4, 28, 2012, 6.7, 163, 'Portuguese', 'Japan'),
    (89, 'Tomorrow''s Echo', 5, 29, 2013, 4.8, 95, 'English', 'South Korea'),
    (90, 'The Sound Collectors', 6, 30, 2014, 8.5, 108, 'Hindi', NULL),
    (91, 'The Last Kite', 7, 1, 2015, 6.6, 121, 'Japanese', 'Germany'),
    (92, 'The Other Guest', 8, 2, 2016, 4.7, 134, 'Korean', 'Canada'),
    (93, 'Late Bloom', 9, 3, 2017, NULL, 147, 'French', 'Mexico'),
    (94, 'The Last Ledger', 10, 4, 2018, 6.5, 160, 'German', 'Brazil'),
    (95, 'The Last Enchantment', 11, 5, 2019, 4.6, 92, 'Spanish', 'Nigeria'),
    (96, 'Beyond the Salt Flats', 12, 6, 2020, 8.3, NULL, 'Portuguese', 'Australia'),
    (97, 'After the Harvest', 1, 7, 2021, 6.4, 118, 'English', 'USA'),
    (98, 'Hard Target', 2, 8, 2022, 4.5, 131, 'Hindi', 'UK'),
    (99, 'Plus One', 3, 9, 2023, 8.2, 144, 'Japanese', 'India'),
    (100, 'The Last Deposition', 4, 10, 2024, 6.3, 157, 'Korean', 'Japan');

-- Keep the identity sequences in sync with the explicit ids above, so any
-- future INSERT that omits an id continues from the right number instead
-- of colliding with one we just set manually.
SELECT setval('genres_id_seq', (SELECT MAX(id) FROM genres));
SELECT setval('directors_id_seq', (SELECT MAX(id) FROM directors));
SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));
