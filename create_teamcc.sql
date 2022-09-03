
/*
CREATE DATABASE `team_cc`*/ 

use team_cc;
CREATE TABLE `activity` (
  `id` int NOT NULL,
  `admin_id` varchar(255) NOT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `cc` (
  `admin_id` varchar(255) NOT NULL,
  `team_num` int NOT NULL,
  `activity_id` int NOT NULL,
  `image` mediumblob,
  `size` int DEFAULT NULL,
  `mimetype` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`admin_id`,`team_num`,`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `state` (
  `admin_id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `url` (
  `admin_id` varchar(255) NOT NULL,
  `team_num` int NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`,`team_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE admin(
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);
