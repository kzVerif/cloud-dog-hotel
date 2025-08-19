-- CreateTable
CREATE TABLE `dog_infos` (
    `id_dog` INTEGER NOT NULL AUTO_INCREMENT,
    `dog_name` VARCHAR(50) NOT NULL,
    `breed` VARCHAR(100) NOT NULL,
    `owner` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id_dog`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

