use team_cc;
/*
delete from url where team_num is not null OR team_num IS NULL;
delete from state where title is not null OR title IS NULL;
delete from activity where id is not null OR id IS NULL;
*//*
select * from state;
select * from activity;
select * from url;
select * from cc;
select * from cc LEFT JOIN activity on cc.activity_id = activity.id;
*/
/*
insert into activity VALUE(1,'a',5);
insert into activity VALUE(2,'b',5);
insert into activity VALUE(3,'c',5);
insert into activity VALUE(4,'d',5);
*/
/*
insert into cc VALUE(1,1,'hello');
insert into cc VALUE(1,2,'lao');
insert into cc VALUE(2,1,'hello');
insert into cc VALUE(2,2,'hwewo');
insert into cc VALUE(3,1,'hrrello');
*/
/*
DROP TABLE image;
CREATE TABLE image(
	id INT PRIMARY KEY,
	image MEDIUMBLOB,
    size int,
    mimetype VARCHAR(50)
);
*//*
DELETE FROM image where id = 1;
INSERT INTO image VALUES(1,LOAD_FILE('C:\sky.jpg'));
*//*
INSERT INTO image VALUES(1,LOAD_FILE('C:\sky.jpg'));
DELETE FROM image where id IS NOT NULL;
*/

select * from cc;

