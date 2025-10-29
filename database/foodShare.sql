-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema foodShare
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema foodShare
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `foodShare` DEFAULT CHARACTER SET utf8 ;
USE `foodShare` ;

-- -----------------------------------------------------
-- Table `foodShare`.`Students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodShare`.`Students` (
  `studentID` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NULL,
  `student_userName` VARCHAR(15) NOT NULL,
  `student_password` VARCHAR(15) NOT NULL,
  `student_email` VARCHAR(45) NULL,
  `isVegan` TINYINT NULL,
  `isVegetarian` TINYINT NULL,
  `isDairyFree` TINYINT NULL,
  `isGlutenFree` TINYINT NULL,
  `isKosher` TINYINT NULL,
  `isHalal` TINYINT NULL,
  PRIMARY KEY (`studentID`),
  UNIQUE INDEX `idStudent_UNIQUE` (`studentID` ASC) VISIBLE,
  UNIQUE INDEX `userName_UNIQUE` (`student_userName` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodShare`.`Inventories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodShare`.`Inventories` (
  `inventoryID` INT NOT NULL AUTO_INCREMENT,
  `possible_foods` BLOB NULL,
  `isVeganFriendly` TINYINT NULL,
  `isVegetarianFriendly` TINYINT NULL,
  `isDairyFreeFriendly` TINYINT NULL,
  `isGlutenFreeFriendly` TINYINT NULL,
  `isKosherFriendly` TINYINT NULL,
  `isHalalFriendly` TINYINT NULL,
  PRIMARY KEY (`inventoryID`),
  UNIQUE INDEX `idInventories_UNIQUE` (`inventoryID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foodShare`.`Providers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foodShare`.`Providers` (
  `providerID` INT NOT NULL AUTO_INCREMENT,
  `providerName` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  `userName` VARCHAR(15) NULL,
  `password` VARCHAR(15) NULL,
  `missionStatement` VARCHAR(145) NULL,
  `openingHours` VARCHAR(145) NULL,
  `phoneNumber` INT NULL,
  `email` VARCHAR(45) NULL,
  `inventoryID` INT NULL,
  PRIMARY KEY (`providerID`),
  UNIQUE INDEX `idProvider_UNIQUE` (`providerID` ASC) VISIBLE,
  INDEX `inventoryID_idx` (`inventoryID` ASC) VISIBLE,
  CONSTRAINT `inventoryID`
    FOREIGN KEY (`inventoryID`)
    REFERENCES `foodShare`.`Inventories` (`inventoryID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
