-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2018 at 06:57 AM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `timer_app_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `date` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `time` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `date`, `time`, `description`) VALUES
(1, '2018-08-02', '10:00', 'Making web app'),
(2, '2018-08-02', '10.30', 'Build a react native application'),
(3, '2018-08-02', '12.00', 'Lunch time'),
(4, '2018-08-02', '13.00', 'Deploy react native app'),
(5, '2018-08-02', '15.30', 'Tea break'),
(6, '2018-08-02', '18.00', 'Go home'),
(7, '2018-08-02', '19.30', 'Dinner'),
(8, '2018-08-02', '20.00', 'Unity VR game development'),
(9, '2018-08-02', '22.30', 'Entertainment time'),
(10, '2018-08-03', '06:00', 'Breakfast '),
(11, '2018-08-03', '07:00', 'Workout'),
(12, '2018-08-03', '09:00', 'Go to workplace'),
(13, '2018-08-03', '11.30', 'Friend\'s birthday party'),
(14, '2018-08-03', '13:00', 'VR teleport event development'),
(15, '2018-08-03', '15:30', 'VR movement event development'),
(16, '2018-08-03', '18.00', 'Watch movie'),
(17, '2018-08-03', '20:00', 'Listen music'),
(18, '2018-08-03', '21:00', 'Play game'),
(19, '2018-08-03', '21:30', 'Read the newspaper'),
(20, '2018-08-03', '23:00', 'Check new emails'),
(21, '2018-08-04', '05:30', 'Prepare breakfast'),
(22, '2018-08-04', '06:30', 'Morning walk'),
(23, '2018-08-04', '07:30', 'Workout in new gym'),
(24, '2018-08-04', '08:30', 'Meeting with client'),
(25, '2018-08-04', '10:30', 'Farewell'),
(26, '2018-08-04', '11:27', 'System testing'),
(27, '2018-08-04', '13:28', 'Lunch with Anna'),
(28, '2018-08-04', '14:30', 'Meet grandparents'),
(29, '2018-08-04', '15:30', 'Mobile development'),
(30, '2018-08-04', '17:00', 'Play with friends');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
