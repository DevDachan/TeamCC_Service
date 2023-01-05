

CREATE DATABASE `team_aa` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

use team_aa;

CREATE TABLE `activity` (
  `id` int NOT NULL,
  `admin_id` varchar(255) NOT NULL,
  `activity` varchar(255) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`,`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `admin` (
  `id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
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

CREATE TABLE `color` (
  `admin_id` varchar(255) NOT NULL,
  `score` varchar(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`,`score`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `team_info` (
  `admin_id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `background_image` mediumblob,
  `background_mimetype` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `url` (
  `admin_id` varchar(255) NOT NULL,
  `team_num` int NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`,`team_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `count` (
  `id` varchar(50) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `year` varchar(50) DEFAULT NULL,
  `month` varchar(50) DEFAULT NULL,
  `day` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


