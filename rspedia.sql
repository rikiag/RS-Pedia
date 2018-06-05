-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 04 Jun 2018 pada 18.12
-- Versi server: 5.7.19
-- Versi PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rspedia`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '1503248427885_user', 1, '2018-04-10 13:10:56'),
(2, '1503248427886_token', 1, '2018-04-10 13:10:58'),
(3, '1523365497841_password_reset_schema', 1, '2018-04-10 13:10:58'),
(6, '1525266865424_posts_schema', 2, '2018-06-02 16:35:17'),
(7, '1528135592086_user_schema', 3, '2018-06-04 18:09:54');

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `password_resets`
--

INSERT INTO `password_resets` (`id`, `email`, `token`, `created_at`, `updated_at`) VALUES
(4, 'uchiha@gmail.com', 'efV5nXXys0tnUGw7EEDJ8TGR97crfmMbBTBFAIgO', '2018-04-14 20:27:23', '2018-04-14 20:27:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `place_id` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `body` text,
  `featured_img` varchar(255) DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `posts`
--

INSERT INTO `posts` (`id`, `title`, `place_id`, `slug`, `body`, `featured_img`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'lorem ipsum', 'ChIJm1XnALM3QDARERxEJlcE6jg', 'lorem-ipsum', NULL, 'sampul web jawara.jpg', 7, '2018-06-03 00:00:18', '2018-06-03 00:00:18'),
(2, 'lorem ipsum', 'ChIJm1XnALM3QDARERxEJlcE6jg', 'lorem-ipsum-1', '<p>lorem ipsum dolor sit ametlkdjfl dflkj dlfkj dlfkjd flkdjf ldkjfldkjf dlkfjld fjlkdjfl dlfkjldf.</p>', 'sampul web jawara.jpg', 7, '2018-06-03 00:02:45', '2018-06-03 00:02:45'),
(3, 'abc', 'ChIJm1XnALM3QDARERxEJlcE6jg', 'abc', '<p>,snd kjshd kjhsdkjhskjhd ksjdhk</p>', 'sampul web jawara.jpg', 7, '2018-06-03 01:06:52', '2018-06-03 01:06:52'),
(4, 'hahahaa', 'ChIJm1XnALM3QDARERxEJlcE6jg', 'hahahaa', '<p>skjdh ksjhd kjh sdkjhsd kjhsdkjhsd</p>', 'sampul web jawara.jpg', 7, '2018-06-03 01:10:18', '2018-06-03 01:10:18'),
(5, 'ha ha ha', 'ChIJm1XnALM3QDARERxEJlcE6jg', 'ha-ha-ha', '<p>kajhs kjhas kjhas kjhas</p>', 'sampul web jawara.jpg', 7, '2018-06-03 01:40:42', '2018-06-03 01:40:42'),
(6, 'ha ha ha', 'ChIJm1XnALM3QDARERxEJlcE6jg', 'ha-ha-ha-1', '<p>dum dum dum dum dum</p>', 'sampul web jawara.jpg', 7, '2018-06-03 01:41:13', '2018-06-03 01:41:13'),
(7, 'ha ha ha', 'ChIJm1XnALM3QDARERxEJlcE6jg', 'ha-ha-ha-2', '<p>ksdj skldj&nbsp; lksjd lskjd lskjd lskjd lskdj sl;kjdawo;ei lkdsjf ldkfj owief lskfj osifuj lkdsjf lkdjfs</p>', 'ha ha haimage', 7, '2018-06-03 01:51:30', '2018-06-03 01:51:30'),
(8, 'slkdj lskd', 'ChIJm1XnALM3QDARERxEJlcE6jg', 'slkdj-lskd', '<p>slkd lksdj lskdj lskdj</p>', 'slkdj lskd.jpeg', 7, '2018-06-03 01:52:50', '2018-06-03 01:52:50');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tokens`
--

CREATE TABLE `tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `token` varchar(40) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(80) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(60) NOT NULL,
  `confirmation_token` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `desc` text,
  `fb` varchar(255) DEFAULT NULL,
  `tw` varchar(255) DEFAULT NULL,
  `ig` varchar(255) DEFAULT NULL,
  `ii` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `confirmation_token`, `is_active`, `created_at`, `updated_at`, `photo`, `desc`, `fb`, `tw`, `ig`, `ii`) VALUES
(7, 'rikiag', 'riki@gmail.com', '$2a$10$oAQXfrKN74S.DFcuOGJy6e72YUTXiBhidePR.Ppplvw6AOcn.wvU.', NULL, 1, '2018-04-12 16:08:54', '2018-05-02 15:31:09', NULL, 'Seorang Mahasiswa Informatika Unsyiah', NULL, NULL, NULL, NULL),
(8, 'uchiha', 'uchiha@gmail.com', '$2a$10$91R2exL6TORU105HvDPikeK7UaxiPM4EC627X7s1hNpiW2csPYio.', '0fwfWhHm6wUyeqZAPxkwqUuY61wKrerMlhVq47Yx', 0, '2018-04-14 20:26:27', '2018-04-14 20:26:27', NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tokens_token_unique` (`token`),
  ADD KEY `tokens_user_id_foreign` (`user_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
