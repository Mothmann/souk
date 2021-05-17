-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 17, 2021 at 02:11 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `souk`
--

-- --------------------------------------------------------

--
-- Table structure for table `categoriesonproducts`
--

CREATE TABLE `categoriesonproducts` (
  `productID` int(11) NOT NULL,
  `categoryID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categoriesonproducts`
--

INSERT INTO `categoriesonproducts` (`productID`, `categoryID`) VALUES
(2, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID`, `name`, `description`) VALUES
(1, 'cccccc', 'ccccccccc'),
(2, 'jeux videos', 'tgttttttttttttttttt'),
(3, 'electronique', 'ujjjjjjjjjjjt');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ID` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `UnitsinStock` int(11) NOT NULL,
  `PicturePath` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `name`, `description`, `UnitsinStock`, `PicturePath`, `price`) VALUES
(1, 'PS5', 'some info', 100, 'https://blog.playstation.com/tachyon/2021/04/51111308992_bb62e2ccaf_k.jpg?resize=1088,612&crop_strategy=smart&zoom=1', 5000),
(2, 'elitebook 8470p', 'test', 500, 'https://images-na.ssl-images-amazon.com/images/I/41v-W4RbeNL._AC_SY780_.jpg', 9999),
(3, 'Sony xperia XZ', 'test', 50, 'https://drop.ndtv.com/TECH/product_database/images/91201655026PM_635_sony_xperia_xz.jpeg', 800);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `username` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `username`, `password`) VALUES
(1, 'root', '$2a$10$Dyjm1t5MosVdF9T0DXGX5.JhhVOpiUJmy.Xoq3QP.YTVYaGZz6vvu'),
(2, 'aziz', '$2a$10$NSA.mhynjknQ26j11DnNPOb2KIiscJh8ex988xxTAPh/p1HzENCHq');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('17222e93-d299-45c5-8f7e-7b7e0a430b9e', 'db749f5eaf1340d86a6887149835691697ddb8865f044ecb59bac31a832b45', '2021-05-15 22:58:25.694', '20210515225824_', NULL, NULL, '2021-05-15 22:58:24.364', 1),
('2cb7d887-f5a2-4d2c-8c1b-ff94c28acc44', '1ebd57a110586a419848eba3847762191bf4d97ef743127c5df6b6d911d26', '2021-05-15 23:03:14.714', '20210515230310_', NULL, NULL, '2021-05-15 23:03:10.592', 1),
('c84d479e-e157-4edc-8948-29653a02113a', 'dfe6df805eeaf5c866c7d8d5ddddf8eab5452bdfecf4eab1c5b32b1167', '2021-05-14 23:32:35.494', '20210429082204_souk', NULL, NULL, '2021-05-14 23:32:22.904', 1),
('d9ed0a56-9b65-45c7-838b-44ccdc9a6953', '8ab6a7d85b341ff81268c074d681583befe81de491d2f0892c9eb648ca4615b6', '2021-05-14 23:32:36.444', '20210429084615_souk1', NULL, NULL, '2021-05-14 23:32:35.586', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoriesonproducts`
--
ALTER TABLE `categoriesonproducts`
  ADD PRIMARY KEY (`productID`,`categoryID`),
  ADD KEY `categoryID` (`categoryID`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categoriesonproducts`
--
ALTER TABLE `categoriesonproducts`
  ADD CONSTRAINT `categoriesonproducts_ibfk_1` FOREIGN KEY (`productID`) REFERENCES `product` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `categoriesonproducts_ibfk_2` FOREIGN KEY (`categoryID`) REFERENCES `category` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
