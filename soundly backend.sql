-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 07, 2026 at 06:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soudly`
--

-- --------------------------------------------------------

--
-- Table structure for table `audio`
--

CREATE TABLE `audio` (
  `id` int(11) NOT NULL,
  `song_title` varchar(255) DEFAULT NULL,
  `artist` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `audio` varchar(255) DEFAULT NULL,
  `is_top` tinyint(1) NOT NULL,
  `is_recommended` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `audio`
--

INSERT INTO `audio` (`id`, `song_title`, `artist`, `category`, `image`, `audio`, `is_top`, `is_recommended`) VALUES
(14, 'Meri Duniya', 'Arjit singh', 'pop', 'g3.png', 'meri-duniya-294228.mp3', 1, 0),
(15, 'Teri Dastan', 'Atif Aslam', 'pop', '8.jpg', 'teri-dastan-333084.mp3', 0, 0),
(16, 'Tu Zindagi Hai meri', 'Atif Aslam', 'pop', 'g19.png', 'play-house-about-me-official-audio-361620 (4).mp3', 0, 1),
(17, 'Apna ban le', 'Arjit singh', 'pop', 'g20.png', 'meri-duniya-294228.mp3', 1, 0),
(18, 'Still with you', 'Prince', 'rock', 'g10.png', 'stillwithyou.mp3', 0, 1),
(20, 'Tum hi ho', 'Atif Aslam', 'pop', 'g5.png', 'play-house-about-me-official-audio-361620 (4).mp3', 0, 1),
(21, 'Dil tu Jan tu', 'Prince', 'classical', 'g18.png', 'teri-dastan-333084.mp3', 0, 1),
(22, 'tum hi ho', 'Atif Aslam', 'rock', 'a1 (9).png', 'm1 (5).wav', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(6, 'Pop'),
(7, 'Classical');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`) VALUES
(3, 'Kainat ', 'kainatali@gmail.com', 'your website is very confusing!'),
(4, 'Kainat Ali', 'kainatali@gmail.com', 'go to hell');

-- --------------------------------------------------------

--
-- Table structure for table `reg`
--

CREATE TABLE `reg` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `confirm_password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reg`
--

INSERT INTO `reg` (`id`, `name`, `email`, `password`, `confirm_password`) VALUES
(1, 'aliza', 'aliza@gmail.com', '12345', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `confirm_password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `email`, `password`, `confirm_password`) VALUES
(1, 'aliza', 'aliza@gmail.com', '12345', '12345'),
(2, 'kainat', 'kainat@gmail.com', '12344', '12344'),
(3, 'kashif', 'kashif@gmail.com', '11223344', '11223344'),
(4, 'luqman', 'luqman@gmail.com', '22334455', '22334455'),
(5, 'saeeda', 'saeeda@gmail.com', '223344', '223344');

-- --------------------------------------------------------

--
-- Table structure for table `usr`
--

CREATE TABLE `usr` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `confirm_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usr`
--

INSERT INTO `usr` (`id`, `name`, `email`, `password`, `confirm_password`) VALUES
(4, 'aliza', 'aliza@gmail.com', '12345', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `song_title` varchar(255) DEFAULT NULL,
  `artist` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `is_top` tinyint(1) NOT NULL,
  `is_recommended` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`id`, `song_title`, `artist`, `category`, `video`, `is_top`, `is_recommended`) VALUES
(17, 'Jhul', 'Atif Aslam', 'pop', 'Jhol.mp4', 1, 0),
(18, 'Jana', 'Gull khan', 'pop', 'mixkit-five-young-people-dancing-a-choreography-in-the-street-51295-hd-ready.mp4', 1, 0),
(19, 'Dil hai tumhara ', 'Prince', 'rock', 'KHAYAAL.mp4', 1, 0),
(20, 'Khayal', 'Atif Aslam', 'classical', 'KHAYAAL.mp4', 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audio`
--
ALTER TABLE `audio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reg`
--
ALTER TABLE `reg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usr`
--
ALTER TABLE `usr`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `audio`
--
ALTER TABLE `audio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `reg`
--
ALTER TABLE `reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `usr`
--
ALTER TABLE `usr`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
