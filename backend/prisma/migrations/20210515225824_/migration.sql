/*
  Warnings:

  - You are about to drop the `categoriesonproducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `categoriesonproducts` DROP FOREIGN KEY `categoriesonproducts_ibfk_2`;

-- DropForeignKey
ALTER TABLE `categoriesonproducts` DROP FOREIGN KEY `categoriesonproducts_ibfk_1`;

-- DropTable
DROP TABLE `categoriesonproducts`;
