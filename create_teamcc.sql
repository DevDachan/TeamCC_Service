CREATE DATABASE `team_cc` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;


CREATE TABLE `activity` (
  `id` int NOT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `cc` (
  `team_num` int NOT NULL,
  `activity_id` int NOT NULL,
  `image` mediumblob,
  `size` int DEFAULT NULL,
  `mimetype` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`team_num`,`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `state` (
  `title` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `url` (
  `team_num` int NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`team_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE admin(
	id VARCHAR(255) NOT NULL PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);
