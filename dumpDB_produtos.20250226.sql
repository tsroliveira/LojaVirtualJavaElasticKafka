-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: produtos
-- ------------------------------------------------------
-- Server version	5.7.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `historico_vendas`
--

DROP TABLE IF EXISTS `historico_vendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historico_vendas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_pedido` bigint(20) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(50) DEFAULT NULL,
  `info` text,
  `valor_total` decimal(10,2) DEFAULT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pedido` (`id_pedido`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `historico_vendas_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `historico_vendas_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historico_vendas`
--

LOCK TABLES `historico_vendas` WRITE;
/*!40000 ALTER TABLE `historico_vendas` DISABLE KEYS */;
INSERT INTO `historico_vendas` VALUES (3,4,'2025-02-25 16:28:06','PENDENTE','Pedido Criado com Sucesso, status=PENDENTE, user_id 3, produtos [ProdutoQuantidadeDTO(produtoId=1, quantidade=3), ProdutoQuantidadeDTO(produtoId=2, quantidade=3)], Message: Pedido finalizado com valor total: 1080000.00 e status: PENDENTE',1080000.00,3),(4,5,'2025-02-25 16:32:45','PENDENTE','Pedido Criado com Sucesso, status=PENDENTE, user_id 3, produtos [ProdutoQuantidadeDTO(produtoId=1, quantidade=3), ProdutoQuantidadeDTO(produtoId=2, quantidade=3)], Message: Pedido finalizado com valor total: 1080000.00 e status: PENDENTE',1080000.00,3),(5,6,'2025-02-25 16:33:57','PENDENTE','Pedido Criado com Sucesso, status=PENDENTE, user_id 3, produtos [ProdutoQuantidadeDTO(produtoId=1, quantidade=3), ProdutoQuantidadeDTO(produtoId=2, quantidade=3)], Message: Pedido finalizado com valor total: 1080000.00 e status: PENDENTE',1080000.00,3),(6,5,'2025-02-25 16:41:30','PENDENTE','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 2, Preço: 180000.00; Produto: HR-V, Quantidade: 2, Preço: 180000.00',720000.00,3),(7,8,'2025-02-25 16:57:45','PENDENTE','Pedido Criado com Sucesso, status=PENDENTE, user_id 3, produtos [ProdutoQuantidadeDTO(produtoId=1, quantidade=3), ProdutoQuantidadeDTO(produtoId=2, quantidade=3)], Message: Pedido finalizado com valor total: 1080000.00 e status: PENDENTE',1080000.00,3),(8,9,'2025-02-25 16:58:11','PENDENTE','Pedido Criado com Sucesso, status=PENDENTE, user_id 3, produtos [ProdutoQuantidadeDTO(produtoId=1, quantidade=3), ProdutoQuantidadeDTO(produtoId=2, quantidade=3)], Message: Pedido finalizado com valor total: 1080000.00 e status: PENDENTE',1080000.00,3),(9,8,'2025-02-25 16:58:31','PENDENTE','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 2, Preço: 180000.00; Produto: HR-V, Quantidade: 2, Preço: 180000.00',720000.00,3),(10,8,'2025-02-25 16:59:10','PENDENTE','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 4, Preço: 180000.00; Produto: HR-V, Quantidade: 4, Preço: 180000.00',1440000.00,3),(11,8,'2025-02-25 16:59:20','PENDENTE','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 2, Preço: 180000.00; Produto: HR-V, Quantidade: 2, Preço: 180000.00',720000.00,3),(12,10,'2025-02-25 17:11:40','PENDENTE','Pedido Criado com Sucesso, status=PENDENTE, user_id 3, produtos [ProdutoQuantidadeDTO(produtoId=1, quantidade=3), ProdutoQuantidadeDTO(produtoId=2, quantidade=3)], Message: Pedido finalizado com valor total: 1080000.00 e status: PENDENTE',1080000.00,3),(13,10,'2025-02-25 17:11:59','PENDENTE','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 2, Preço: 180000.00; Produto: HR-V, Quantidade: 2, Preço: 180000.00',720000.00,3),(14,10,'2025-02-25 17:24:50','PENDENTE','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 3, Preço: 180000.00; Produto: HR-V, Quantidade: 3, Preço: 180000.00',1080000.00,3),(15,10,'2025-02-25 17:27:08','CANCELADO','Pedido Cancelado',1080000.00,3),(16,11,'2025-02-25 17:27:37','PENDENTE','Pedido Criado com Sucesso, status=PENDENTE, user_id 3, produtos [ProdutoQuantidadeDTO(produtoId=1, quantidade=3), ProdutoQuantidadeDTO(produtoId=2, quantidade=3)], Message: Pedido finalizado com valor total: 1080000.00 e status: PENDENTE',1080000.00,3),(17,10,'2025-02-25 17:28:00','CANCELADO','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 5, Preço: 180000.00; Produto: HR-V, Quantidade: 4, Preço: 180000.00',1620000.00,3),(18,10,'2025-02-25 17:28:04','CANCELADO','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 3, Preço: 180000.00; Produto: HR-V, Quantidade: 3, Preço: 180000.00',1080000.00,3),(19,10,'2025-02-25 17:28:31','CANCELADO','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 3, Preço: 180000.00; Produto: HR-V, Quantidade: 3, Preço: 180000.00',1080000.00,3),(20,11,'2025-02-25 17:28:37','PENDENTE','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 3, Preço: 180000.00; Produto: HR-V, Quantidade: 3, Preço: 180000.00',1080000.00,3),(21,11,'2025-02-25 17:28:46','PENDENTE','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 3, Preço: 180000.00; Produto: HR-V, Quantidade: 5, Preço: 180000.00',1440000.00,3),(22,11,'2025-02-25 17:28:52','PENDENTE','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 3, Preço: 180000.00; Produto: HR-V, Quantidade: 3, Preço: 180000.00',1080000.00,3),(23,11,'2025-02-25 17:46:25','PAGO','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 3, Preço: 180000.00; Produto: HR-V, Quantidade: 3, Preço: 180000.00',1080000.00,3),(24,12,'2025-02-25 17:46:47','PENDENTE','Pedido Criado com Sucesso, status=PENDENTE, user_id 3, produtos [ProdutoQuantidadeDTO(produtoId=1, quantidade=3), ProdutoQuantidadeDTO(produtoId=2, quantidade=3)], Message: Pedido finalizado com valor total: 1080000.00 e status: PENDENTE',1080000.00,3),(25,11,'2025-02-25 17:46:55','PAGO','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 1, Preço: 180000.00; Produto: HR-V, Quantidade: 1, Preço: 180000.00',360000.00,3),(26,12,'2025-02-25 17:47:03','PAGO','Pedido Atualizado com Sucesso, user_id 3, produtos: Produto: Toyota, Quantidade: 3, Preço: 180000.00; Produto: HR-V, Quantidade: 3, Preço: 180000.00',1080000.00,3);
/*!40000 ALTER TABLE `historico_vendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido_produtos`
--

DROP TABLE IF EXISTS `pedido_produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido_produtos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `preco_unitario` decimal(38,2) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `pedido_id` bigint(20) DEFAULT NULL,
  `produto_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKb16s6dotg03q3c5aofbet6kxf` (`pedido_id`),
  KEY `FKfy4rl024wt5ghabqscjaqav5n` (`produto_id`),
  CONSTRAINT `FKb16s6dotg03q3c5aofbet6kxf` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  CONSTRAINT `FKfy4rl024wt5ghabqscjaqav5n` FOREIGN KEY (`produto_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido_produtos`
--

LOCK TABLES `pedido_produtos` WRITE;
/*!40000 ALTER TABLE `pedido_produtos` DISABLE KEYS */;
INSERT INTO `pedido_produtos` VALUES (3,180000.00,2,1,1),(4,180000.00,2,1,2),(5,180000.00,3,3,1),(6,180000.00,3,3,2),(7,180000.00,3,4,1),(8,180000.00,3,4,2),(11,180000.00,3,6,1),(12,180000.00,3,6,2),(13,180000.00,2,5,1),(14,180000.00,2,5,2),(19,180000.00,3,9,1),(20,180000.00,3,9,2),(25,180000.00,2,8,1),(26,180000.00,2,8,2),(39,180000.00,3,10,1),(40,180000.00,3,10,2),(47,180000.00,3,12,1),(48,180000.00,3,12,2),(49,180000.00,1,11,1),(50,180000.00,1,11,2);
/*!40000 ALTER TABLE `pedido_produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `status` enum('CANCELADO','PAGO','PENDENTE') DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `valor_total` decimal(38,2) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4ed9lyaqwq1ubhbvaq8sefhgg` (`user_id`),
  CONSTRAINT `FK4ed9lyaqwq1ubhbvaq8sefhgg` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'2025-02-25 15:04:27.613570','PAGO','2025-02-25 15:04:27.613570',720000.00,3),(2,'2025-02-25 16:26:41.044323','CANCELADO','2025-02-25 16:26:41.045324',NULL,3),(3,'2025-02-25 16:27:19.493937','PENDENTE','2025-02-25 16:27:19.493937',1080000.00,3),(4,'2025-02-25 16:28:05.950908','PENDENTE','2025-02-25 16:28:05.950908',1080000.00,3),(5,'2025-02-25 16:32:45.076438','PENDENTE','2025-02-25 16:32:45.076438',720000.00,3),(6,'2025-02-25 16:33:57.161912','PENDENTE','2025-02-25 16:33:57.161912',1080000.00,3),(8,'2025-02-25 16:57:45.348577','PENDENTE','2025-02-25 16:57:45.348577',720000.00,3),(9,'2025-02-25 16:58:10.763507','PENDENTE','2025-02-25 16:58:10.763507',1080000.00,3),(10,'2025-02-25 17:11:40.056222','CANCELADO','2025-02-25 17:11:40.056222',1080000.00,3),(11,'2025-02-25 17:27:36.900353','PAGO','2025-02-25 17:27:36.900353',360000.00,3),(12,'2025-02-25 17:46:46.706252','PAGO','2025-02-25 17:46:46.706252',1080000.00,3);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ano` int(11) DEFAULT NULL,
  `categoria` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `marca` varchar(255) DEFAULT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `preco` decimal(38,2) DEFAULT NULL,
  `quantidade` int(11) DEFAULT NULL,
  `quilometragem` int(11) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,2020,'Carro','2025-02-25 15:00:57.054847','default.png','Corola Cross','1.8 16V Flax LX 4P Automático','Toyota',180000.00,10,0,'2025-02-25 15:00:57.054847'),(2,2020,'Carro','2025-02-25 15:00:57.878212','default.png','Honda','1.8 16V Flax LX 4P Automático','HR-V',180000.00,10,0,'2025-02-25 15:00:57.878212'),(3,2020,'carro','2024-07-02 07:02:36.000000','Corola Cross.png','Toyota','Corola Cross',NULL,180000.00,NULL,25443,'2024-07-02 07:32:18.000000'),(4,2020,'carro','2024-07-02 07:22:12.000000','Argo.png','Fiat','Argo',NULL,62000.00,NULL,21898,'2024-07-08 22:02:03.000000'),(5,2019,'carro','2024-07-02 22:17:01.000000','Creta.png','Hyundai','Creta',NULL,102000.00,NULL,41000,'2024-07-02 22:17:01.000000'),(6,2019,'carro','2024-07-02 22:49:59.000000','HB20s.png','Hyundai','HB20s',NULL,50999.00,NULL,41000,'2024-07-03 01:18:33.000000'),(7,2222,'carro','2024-07-02 23:26:18.000000','Kwid.png','Renault','Kwid',NULL,50000.00,NULL,12334,'2024-07-02 23:26:18.000000'),(8,2020,'carro','2024-07-02 07:02:36.000000','L200.png','Mitsubishi','L200',NULL,129000.00,NULL,25443,'2024-07-02 07:32:18.000000'),(9,2021,'carro','2024-07-02 07:22:12.000000','Mobi.png','Fiat','Mobi',NULL,42900.00,NULL,1212,'2024-07-02 07:31:43.000000'),(10,2019,'carro','2024-07-02 22:17:01.000000','Onix Sedan.png','Chevrolet','Onix Sedan',NULL,60000.00,NULL,5784,'2024-07-02 22:17:01.000000'),(11,2015,'carro','2024-07-02 22:49:59.000000','Renegage.png','Jeep','Renegage',NULL,96000.00,NULL,41000,'2024-07-03 01:18:33.000000'),(12,2021,'carro','2024-07-02 23:26:18.000000','S10.png','Chevrolet','S10',NULL,250000.00,NULL,9876,'2024-07-02 23:26:18.000000'),(13,2018,'carro','2024-07-02 23:26:18.000000','Strada.png','Fiat','Strada',NULL,89000.00,NULL,1396,'2024-07-02 23:26:18.000000'),(14,2019,'carro','2024-07-02 23:26:18.000000','X5.png','BMW','X5',NULL,200000.00,NULL,5632,'2024-07-02 23:26:18.000000'),(15,2024,'carro','2024-07-02 23:26:18.000000','Compass.png','Jeep','Compass',NULL,150000.00,NULL,7655,'2024-07-02 23:26:18.000000'),(16,2015,'carro','2024-07-02 23:26:18.000000','Gol.png','Volkswagen','Gol',NULL,41200.00,NULL,54146,'2024-07-02 23:26:18.000000'),(17,2017,'carro','2024-07-02 23:26:18.000000','Sandero.png','Renault','Sandero',NULL,45378.00,NULL,29890,'2024-07-02 23:26:18.000000'),(18,2222,'carro','2024-07-02 23:26:18.000000','Polo.png','Volkswagen','Polo',NULL,70000.00,NULL,3097,'2024-07-02 23:26:18.000000'),(19,2023,'carro','2024-07-02 23:26:18.000000','Onix.png','Chevrolet','Onix',NULL,49800.00,NULL,9526,'2024-07-02 23:26:18.000000'),(20,2024,'carro','2024-07-02 23:26:18.000000','Cronos.png','Fiat','Cronos',NULL,82000.00,NULL,37262,'2024-07-02 23:26:18.000000'),(21,2026,'carro','2024-07-02 23:26:18.000000','208.png','Peugeot','208',NULL,80000.00,NULL,8753,'2024-07-02 23:26:18.000000'),(22,2222,'carro','2024-07-02 23:26:18.000000','Pulse.png','Fiat','Pulse',NULL,80000.00,NULL,8765,'2024-07-02 23:26:18.000000'),(23,2015,'carro','2024-07-02 23:26:18.000000','C3 AirCross.png','Citroen','C3 AirCross',NULL,67898.00,NULL,12870,'2024-07-02 23:26:18.000000'),(24,2023,'carro','2024-07-02 23:26:18.000000','C4.png','Citroen','C4',NULL,82500.00,NULL,7659,'2024-07-02 23:26:18.000000');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKofx66keruapi6vyqpv6f2or37` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN'),(2,'USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'2025-02-25 14:57:14.381848','thiago@email.com','Thiago Oliveira','$2a$10$QO/5QGbW/9m7oHvIiz8v/OKaxcCV4pnBeazCluqmnbcPMTb3Gc8Qi',NULL,'2025-02-25 14:57:14.381848'),(4,'2025-02-25 14:57:45.232862','user@email.com','User Usuario','$2a$10$lw5SQHm6HqCI8IDl72ye6OpsOhuxBKCDPVj3Qjxd/Y8EKueAA1Jwa',NULL,'2025-02-25 14:57:45.232862');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  KEY `FKj6m8fwv7oqv74fcehir1a9ffy` (`role_id`),
  KEY `FK2o0jvgh89lemvvo17cbqvdxaa` (`user_id`),
  CONSTRAINT `FK2o0jvgh89lemvvo17cbqvdxaa` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKj6m8fwv7oqv74fcehir1a9ffy` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
INSERT INTO `users_roles` VALUES (3,1),(4,2);
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'produtos'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-26 15:29:21
