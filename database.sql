-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2021 at 04:08 PM
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
-- Database: `database`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`ID`, `name`, `description`) VALUES
(1, 'electronique', 'PC, television, telephone...'),
(2, 'jeux videos', 'PS4,xbox one,steam...');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `ProductID` int(20) NOT NULL,
  `userID` int(20) NOT NULL,
  `Shipping_Address` varchar(255) NOT NULL,
  `Shipping_Date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ID`, `ProductID`, `userID`, `Shipping_Address`, `Shipping_Date`) VALUES
(1, 1, 2, '118, Rue Lieutenent Mahroud Mohamed, Grand Casablanca', '2021-05-20'),
(2, 2, 2, '51, Rue AL KHOUZAM Beauséjour, Grand Casablanca', '2021-04-13');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `ID` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `categoryID` int(20) NOT NULL,
  `UnitsinStock` int(5) NOT NULL,
  `PicturePath` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`ID`, `name`, `description`, `categoryID`, `UnitsinStock`, `PicturePath`) VALUES
(1, 'DELL Vostro 5471', 'Dell Vostro 5471 est un ordinateur portable Windows 10 Home avec un écran de 14,00 pouces qui a une résolution de 1920 x 1080 pixels. Il est alimenté par un processeur Core i5 et il est livré avec 8 Go de RAM. Les graphiques sont alimentés par AMD Radeon ', 1, 50, ''),
(2, 'GTA V', 'Grand Theft Auto V est un jeu d\'action-aventure joué à la troisième personne ou à la première personne. Les joueurs accomplissent des missions - des scénarios linéaires avec des objectifs fixés - pour progresser dans l\'histoire. En dehors des missions, le', 2, 100, '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `role` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `username`, `password`, `role`) VALUES
(1, 'admin', 'qwerty', 'admin'),
(2, 'client', 'qwerty', 'client');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ProductID` (`ProductID`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `categoryID` (`categoryID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `ProductID` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ID`),
  ADD CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `user` (`ID`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `categoryID` FOREIGN KEY (`categoryID`) REFERENCES `category` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
