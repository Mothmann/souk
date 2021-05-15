-- CreateTable
CREATE TABLE `category` (
    `ID` INTEGER NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `ID` INTEGER NOT NULL,
    `name` VARCHAR(20) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `UnitsinStock` INTEGER NOT NULL,
    `PicturePath` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriesOnProducts` (
    `productID` INTEGER NOT NULL,
    `categoryID` INTEGER NOT NULL,

    PRIMARY KEY (`productID`,`categoryID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(20) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CategoriesOnProducts` ADD FOREIGN KEY (`productID`) REFERENCES `product`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnProducts` ADD FOREIGN KEY (`categoryID`) REFERENCES `category`(`ID`) ON DELETE CASCADE ON UPDATE CASCADE;
