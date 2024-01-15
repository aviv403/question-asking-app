-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: question-asking
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answer` (
  `id` varchar(60) NOT NULL,
  `text` varchar(45) NOT NULL,
  `q_id` varchar(45) NOT NULL,
  `isCorrect` tinyint(1) unsigned zerofill DEFAULT NULL,
  `votes` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `q_id_idx` (`q_id`),
  CONSTRAINT `q_id` FOREIGN KEY (`q_id`) REFERENCES `question` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES ('01e40164-9b5f-45d6-9f32-8f0272ca6302','Beer-Sheva','715a0ac5-5f3a-4927-9237-119c8d662183',0,0),('025c1494-5ffe-4677-a4f7-55e84085c170','Jerusalem','715a0ac5-5f3a-4927-9237-119c8d662183',0,0),('08ee78c5-54ee-4c92-aa2d-1997c7771ed2','Haifa','715a0ac5-5f3a-4927-9237-119c8d662183',0,0),('122a8cb0-bf07-41fe-b732-dcc4da25af2d','Blue','9aeac387-071c-4d50-afa0-d1ee264e9d2a',0,0),('48c06ca2-da50-48da-abf6-33ac43e1eb4f','Red','9aeac387-071c-4d50-afa0-d1ee264e9d2a',0,0),('566cb317-6774-4508-bcd2-769bbc12c555','Tel-Aviv','f5f3f48d-d7c2-4485-b455-9edcb8f75c08',0,0),('6e9a7cb1-6fd6-4f4c-9622-69884f8f8a0a','Counter-Strike','c7c97afd-52ca-45d9-aed4-808570f3bbd2',0,0),('7f178a6a-2ed9-405f-8225-97f1c97890a8','Jerusalem','f5f3f48d-d7c2-4485-b455-9edcb8f75c08',1,0),('96b526db-a20d-48cb-a0d8-160320adad07','Black','9aeac387-071c-4d50-afa0-d1ee264e9d2a',1,0),('9cf41ca4-ce97-4349-8654-4565626ff35c','Haifa','f5f3f48d-d7c2-4485-b455-9edcb8f75c08',0,0),('a3a1d6ee-4cda-45f4-b071-f16d6604488a','Green','9aeac387-071c-4d50-afa0-d1ee264e9d2a',0,0),('dd0de109-fe5d-402c-a4da-cfca32d4a577','Tel-Aviv','715a0ac5-5f3a-4927-9237-119c8d662183',0,0),('f60efe56-c329-4d67-bf8f-80c72a57f621','FIFA','c7c97afd-52ca-45d9-aed4-808570f3bbd2',0,0),('fab0bbd4-3231-4fd9-bb7e-4a28f61ba3f5','PUBG','c7c97afd-52ca-45d9-aed4-808570f3bbd2',0,0),('fcb43eac-9990-4833-a19f-18ef08286ce0','Rocket-League','c7c97afd-52ca-45d9-aed4-808570f3bbd2',1,0);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-15 21:18:33
