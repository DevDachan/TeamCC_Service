/*CREATE DATABASE team_cc;
*/
use team_cc;
DROP table activity;
CREATE table activity(
 id INT PRIMARY KEY,
 activity VARCHAR(255),
 score VARCHAR(255)
 );
 DROP table URL;
CREATE table URL(
 team_num INT PRIMARY KEY,
 url VARCHAR(255)
);

DROP table CC;
 CREATE table CC(
 team_num INT ,
 activity_id INT,
 image MEDIUMBLOB ,
 size INT,
 mimetype VARCHAR(50),
 PRIMARY KEY(team_num, activity_id)
 );
DROP table State;
CREATE table State(
title VARCHAR(255),
num VARCHAR(255)
);

 