/*
  Warnings:

  - You are about to drop the `_category_product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `_category_product`;

-- CreateTable
CREATE TABLE `CategoriesOnProducts` (
    `productID` INTEGER NOT NULL,
    `categoryID` INTEGER NOT NULL,

    PRIMARY KEY (`productID`,`categoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CategoriesOnProducts` ADD FOREIGN KEY (`productID`) REFERENCES `product`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnProducts` ADD FOREIGN KEY (`categoryID`) REFERENCES `category`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
