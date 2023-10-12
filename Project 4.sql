--Modification Log--
/*
9/25/23- Created project 3 using disk_inventory as a base,
Created inserts for disk type, status, and genre.
9/27-23- Created insert for disk table, updated song to change title.
10/3/23- Created insert for borrower and disk_has_borrower, added display
for late song rentals. Inserted statements that enabled and disabled
IDENTITY_INSERT to fix an insert issue.
10/09/23- Removed identity insert, removed inserts for disk type, genre,
status, disk borrower, and disk has borrower ids.
10/11/23- Fixed insert issue for disk_has_borrower by replacing borrowerer_id 3
with a borrower_id that was in use. Added tables for Disk collection, A borrowed disk log,
Repeatedly borrowed disks, and All missing disks. Added views for all borrowers who haven't took out any disks.
Added table for Borrowerers who borrowed multiple disks
10/12/23- Created selects to display the views.
*/

use master;
go
DROP DATABASE IF EXISTS disk_inventory2;
go
CREATE DATABASE disk_inventory2;
go
use disk_inventory2;
go
-- create login, user & grant read permissions
IF SUSER_ID('diskUser') IS NULL  -- login can be created before db
	CREATE LOGIN diskUser 
	WITH PASSWORD = 'Pa$$w0rd',
	DEFAULT_DATABASE = disk_inventory2;
CREATE USER diskUser;				-- create after use statement
ALTER ROLE db_datareader
	ADD MEMBER diskUser;
go

--create lookup tables
CREATE TABLE artist_type
	(
	artist_type_id			INT NOT NULL PRIMARY KEY IDENTITY,
	description				VARCHAR(20) NOT NULL	-- char/varchar works
	);
CREATE TABLE disk_type
	(
	disk_type_id			INT NOT NULL PRIMARY KEY IDENTITY,
	description				VARCHAR(20) NOT NULL
	);
CREATE TABLE genre
	(
	genre_id				INT NOT NULL PRIMARY KEY IDENTITY,
	description				VARCHAR(20) NOT NULL
	);
CREATE TABLE status
	(
	status_id				INT NOT NULL PRIMARY KEY IDENTITY,
	description				VARCHAR(20) NOT NULL
	);
-- create borrower, disk, artist
CREATE TABLE borrower
	(
	borrower_id				INT NOT NULL PRIMARY KEY IDENTITY,
	fname					NVARCHAR(60) NOT NULL,
	lname					NVARCHAR(60) NOT NULL,
	phone_num				VARCHAR(15) NOT NULL
	);
CREATE TABLE disk
	(
	disk_id					INT NOT NULL PRIMARY KEY IDENTITY,
	disk_name				NVARCHAR(60) NOT NULL,
	release_date			DATE NOT NULL,
	genre_id				INT NOT NULL REFERENCES genre(genre_id),
	status_id				INT NOT NULL REFERENCES status(status_id),
	disk_type_id			INT NOT NULL REFERENCES disk_type(disk_type_id)
	);
CREATE TABLE artist
	(
	artist_id			INT NOT NULL PRIMARY KEY IDENTITY,
	fname				NVARCHAR(60) NOT NULL,
	lname				NVARCHAR(60) NULL,
	artist_type_id		INT NOT NULL REFERENCES artist_type(artist_type_id)
	);
-- create relationship tables
CREATE TABLE disk_has_borrower
	(
	disk_has_borrower_id	INT NOT NULL PRIMARY KEY IDENTITY,
	borrowed_date			DATETIME2 NOT NULL,
	due_date				DATETIME2 NOT NULL DEFAULT (GETDATE() + 30),
	returned_date			DATETIME2 NULL,
	borrower_id				INT NOT NULL REFERENCES borrower(borrower_id),
	disk_id					INT NOT NULL REFERENCES disk(disk_id)		
	);
CREATE TABLE disk_has_artist
	(
	disk_has_artist_id	INT NOT NULL PRIMARY KEY IDENTITY,
	disk_id				INT NOT NULL REFERENCES disk(disk_id),
	artist_id			INT NOT NULL REFERENCES artist(artist_id)
	UNIQUE (disk_id, artist_id)
	);


--Insert disk types into disk_type_id & description
INSERT INTO disk_type (description)
VALUES ('CD'), ('Cassette Tape'), ('Vinyl'), 
       ('LaserDisk'), ('8-Track');


-- Insert genre_id and description into genre
INSERT INTO Genre (description)
VALUES ('Metal'), ('Pop'), ('Disco'),
       ('Funk'), ('Rock'), ('Hip-hop'), ('Country Ballad'), ('House');

-- Insert status_id and description into genre
INSERT INTO Status (description)
VALUES ('Available'), ('Borrowed'), ('On Hold'),
       ('Late'), ('Reserved');


--Inserts 20 songs into disk table--
INSERT INTO disk (disk_name, disk_type_id, release_date, genre_id, status_id)
VALUES('Despacito', 1, '2017-01-13', 2, 4), ('Holy Hell', 1, '2022-07-28', 2, 1), ('Replay', 1, '2009-07-07', 2, 1),
	('Lets Groove', 1, '1981-11-11', 4, 1), ('As It Was', 1, '2021-04-01', 2, 1), ('Hey Ya!', 2, '2003-08-05', 4, 1),
	('Vida La Vida', 3, '2008-06-13', 5, 4), ('Funkytown', 5, '1980-02-20', 3, 1), ('Misery', 1, '2010-06-22', 2, 1),
	('Blinding Lights', 1, '2019-11-29', 2, 1), ('Flashing Lights', 1, '2007-09-11', 6, 1), ('Livin On a Prayer', 1, '1986-08-16', 5, 4),
	('Free Bird', 1, '1973-11-01', 5, 1), ('Big Iron', 1, '1960-02-22', 7, 1), ('Loretta', 3, '2021-6-16', 1, 4),
	('Sweet Child O Mine', 2, '1988-08-17', 5, 4), ('Time After Time', 3, '1984-01-27', 1, 1), ('Karaoke', 1, '2020-10-23', 1, 1),
	('Dont Stop Me Now', 5, '1979-01-26', 5, 4), ('Weather', 1, '2019-06-05', 1, 1), ('Harder, Better, Faster, Stronger', 4, '2001-10-13', 8, 1)


--Updates to replace disk 110 with it's remaster--
UPDATE disk
SET disk_name = 'Livin On a Prayer (2021 remaster)'
WHERE disk_id = 110;


--Insert borrower_id, first and last name, and phone number into borrower table
INSERT INTO borrower (fname, lname, phone_num)
VALUES('Emma', 'Johnson', '208-465-5555'), ('Liam', 'Smith', '208-465-5555'),
	  ('Olivia', 'Brown', '208-463-7111'), ('Noah', 'Wilson', '208-467-7778'),
	  ('Sophia', 'Davis', '208-454-8888'), ('Jackson', 'Taylor', '208-887-6400'),
	  ('Ava', 'Martinez', '208-287-0004'), ('Aiden', 'Anderson', '208-996-3232'),
	  ('Isabella', 'White', '208-922-3399'), ('Lucas', 'Harris', '208-377-5201'),
	  ('Mia', 'Jones', '208-939-4440'), ('Mason', 'Clark', '208-609-6575'),
	  ('Harper', 'Lewis', '208-658-5555'), ('Elijah', 'Young', '208-853-6060'),
	  ('Charlotte', 'Turner', '208-963-4733'), ('Logan', 'Walker', '208-343-5995'),
	  ('Amelia', 'Hall', '208-345-5551'), ('Oliver', 'Moore', '208-968-7775'),
	  ('Abigail', 'Allen', '208-467-4252'), ('Samuel', 'King', '208-466-6005'),
	  ('Roy', 'Lewis', '208-466-6005')

--Deletes borrower_id 3
DELETE FROM borrower
WHERE borrower_id = 3;


--Inserts borrow transaction, borrower, and disk id, as well when the disks
--were borrowed, when they needed to be returned, and if it was returned.
INSERT INTO disk_has_borrower (borrowed_date, due_date, returned_date, borrower_id, disk_id)
VALUES('2021-03-15', '2021-03-21', NULL, 1, 1), ('2021-04-03', '2021-04-10', '2021-04-09', 2, 4), 
('2021-04-15', '2021-04-21', '2021-04-20', 2, 4), ('2021-04-21', '2021-04-28', '2021-04-22', 4, 2),
('2021-04-28', '2021-05-05', '2021-04-29', 4, 3), ('2021-04-28', '2021-05-05', '2021-5-05', 5, 3),
('2021-05-05', '2021-05-13', NULL, 6, 5), ('2021-05-16', '2021-05-23', '2021-05-20', 7, 6), 
('2021-05-16', '2021-05-23', '2021-05-20', 8, 7), ('2021-05-16', '2021-05-23', '2021-05-20', 9, 8), 
('2021-05-25', '2021-06-02', '2021-06-01', 10, 9), ('2021-05-26', '2021-06-03', NULL, 10, 10), 
('2021-06-05', '2021-06-13', '2021-06-12', 11, 11), ('2021-06-05', '2021-06-13', '2021-06-13', 11, 12), 
('2021-06-06', '2021-06-14', NULL, 12, 13), ('2021-06-07', '2021-06-15', NULL, 13, 14),
('2021-06-08', '2021-06-16', '2021-06-16', 11, 12), ('2021-06-15', '2021-06-22', '2021-06-22', 21, 16), 
('2021-06-17', '2021-06-24', '2021-06-20', 14, 18), ('2021-06-20', '2021-06-27', NULL, 21, 17)


--Display disks that were never returned
SELECT borrower_id, disk_id, borrowed_date, returned_date
FROM disk_has_borrower
WHERE returned_date IS NULL;


--Display disks, thier genres, what kind of format it's on, and if they're available or not.
SELECT d.disk_name AS "Disk Name",
	CONVERT(VARCHAR, d.release_date, 101) AS "Release Date",
	dt.description AS "Type",
	g.description AS "Genre",
	s.description AS "Status"
FROM disk AS d
INNER JOIN disk_type AS dt ON d.disk_type_id = dt.disk_type_id
INNER JOIN genre AS g ON d.genre_id = g.genre_id
INNER JOIN status AS s ON d.status_id = s.status_id;


--Displays borrowers, what disk they borrowed, when they borrowed it, and if they returned it.
SELECT b.lname AS "Last", b.fname AS "First",
	d.disk_name AS "Disk Name",
	CONVERT(DATE, dhb.borrowed_date, 120) AS "Borrowed Date",
	CONVERT(DATE, dhb.returned_date, 120) AS "Returned Date"
FROM borrower as b
INNER JOIN disk_has_borrower AS dhb ON dhb.borrower_id = b.borrower_id
INNER JOIN disk AS d ON d.disk_id = dhb.disk_id
INNER JOIN status AS s ON s.status_id = d.status_id;

--Displays disks that have been borrowed more than once and who has borrowed them.
SELECT d.disk_name AS "Disk Name",
	COUNT(*) AS "Times Borrowed"
FROM disk_has_borrower AS dhb
INNER JOIN disk AS d ON dhb.disk_id = d.disk_id
GROUP BY d.disk_name
HAVING COUNT(*) > 1;

--Shows all disks that have not been returned yet and who last borroweed them.
SELECT d.disk_name AS "Disk Name",
	CONVERT(DATE, dhb.borrowed_date, 120) AS "Borrowed Date",
	ISNULL(CONVERT(VARCHAR, dhb.returned_date, 120), 'Outstanding') AS "Returned Date",
	b.lname AS "Last", b.fname AS "First"
FROM borrower as b
INNER JOIN disk_has_borrower AS dhb ON dhb.borrower_id = b.borrower_id
INNER JOIN disk AS d ON d.disk_id = dhb.disk_id
INNER JOIN status AS s ON s.status_id = d.status_id
WHERE dhb.returned_date IS NULL;

--Creates a view for those who haven't borrowed anything
GO
DROP VIEW IF EXISTS View_Borrower_No_Loans_Join
GO
CREATE VIEW View_Borrower_No_Loans_Join AS
	SELECT b.lname AS "Last Name", b.fname AS "First Name"
	FROM borrower as b
	LEFT JOIN disk_has_borrower AS dhb ON b.borrower_id = dhb.borrower_id
	WHERE dhb.borrower_id IS NULL;
GO

SELECT *
FROM View_Borrower_No_Loans_Join

--Creates a view that displays all those who havent borrowed anything but uses a subquery
GO
DROP VIEW IF EXISTS View_Borrower_No_Loans_SubQ
GO
CREATE VIEW View_Borrower_No_Loans_SubQ AS
	SELECT b.lname AS "Last Name", b.fname AS "First Name"
	FROM borrower as b
	WHERE b.borrower_id NOT IN (
		SELECT DISTINCT dhb.borrower_id
		FROM disk_has_borrower AS dhb);
GO

SELECT *
FROM View_Borrower_No_Loans_SubQ

--Shows all borrowers that borrowed more than 1 disk
SELECT b.lname AS "Last Name", b.fname AS "First Name",
	COUNT(dhb.disk_id) AS "Disks Borrowed"
FROM borrower AS b
INNER JOIN disk_has_borrower AS dhb ON b.borrower_id = dhb.borrower_id
GROUP BY b.lname, b.fname
HAVING COUNT(dhb.disk_id) > 1;
