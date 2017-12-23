-- -----------------------------------------------------
-- Schema tcc_api
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tcc_api` ;

-- -----------------------------------------------------
-- Schema tcc_api
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tcc_api` DEFAULT CHARACTER SET utf8 ;
USE `tcc_api` ;

-- -----------------------------------------------------
-- Table `tcc_api`.`Endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tcc_api`.`Endereco` (
  `idEndereco` INT NOT NULL,
  `cep` VARCHAR(45) NULL,
  `rua` VARCHAR(45) NULL,
  `numero` VARCHAR(45) NULL,
  `bairro` VARCHAR(45) NULL,
  `cidade` VARCHAR(45) NULL,
  `estado` VARCHAR(45) NULL,
  PRIMARY KEY (`idEndereco`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tcc_api`.`Cartao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tcc_api`.`Cartao` (
  `numeroCartao` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `vencimento` DATE NULL,
  `cvv` VARCHAR(45) NULL,
  PRIMARY KEY (`numeroCartao`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tcc_api`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tcc_api`.`Usuario` (
  `idUsuario` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  `telefone` VARCHAR(45) NULL,
  `Endereco_idEndereco` INT NOT NULL,
  `Cartao_numeroCartao` INT NOT NULL,
  PRIMARY KEY (`idUsuario`),
  INDEX `fk_Usuario_Endereco_idx` (`Endereco_idEndereco` ASC),
  INDEX `fk_Usuario_Cartao1_idx` (`Cartao_numeroCartao` ASC),
  CONSTRAINT `fk_Usuario_Endereco`
    FOREIGN KEY (`Endereco_idEndereco`)
    REFERENCES `tcc_api`.`Endereco` (`idEndereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_Cartao1`
    FOREIGN KEY (`Cartao_numeroCartao`)
    REFERENCES `tcc_api`.`Cartao` (`numeroCartao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tcc_api`.`Investimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tcc_api`.`Investimentos` (
  `idInvestimentos` INT NOT NULL,
  `titulo` VARCHAR(45) NULL,
  `valor` VARCHAR(45) NULL,
  `desc` VARCHAR(45) NULL,
  `img` VARCHAR(45) NULL,
  `tipoInvestimento` VARCHAR(45) NULL,
  PRIMARY KEY (`idInvestimentos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tcc_api`.`Projeto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tcc_api`.`Projeto` (
  `idProjeto` INT NOT NULL,
  `titulo` VARCHAR(45) NULL,
  `categoria` VARCHAR(45) NULL,
  `img` VARCHAR(45) NULL,
  `descricao` VARCHAR(45) NULL,
  `tipoDoacao` VARCHAR(45) NULL,
  `Investimentos_idInvestimentos` INT NOT NULL,
  PRIMARY KEY (`idProjeto`),
  INDEX `fk_Projeto_Investimentos1_idx` (`Investimentos_idInvestimentos` ASC),
  CONSTRAINT `fk_Projeto_Investimentos1`
    FOREIGN KEY (`Investimentos_idInvestimentos`)
    REFERENCES `tcc_api`.`Investimentos` (`idInvestimentos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tcc_api`.`ONG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tcc_api`.`ONG` (
  `idONG` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `dataNasc` VARCHAR(45) NULL,
  `senha` VARCHAR(45) NULL,
  `telefone` VARCHAR(45) NULL,
  `numRegistroPref` VARCHAR(45) NULL,
  `inscEstadual` VARCHAR(45) NULL,
  `numFuncionarios` VARCHAR(45) NULL,
  `areaAtuacao` VARCHAR(45) NULL,
  `tipo` VARCHAR(45) NULL,
  `Projeto_idProjeto` INT NOT NULL,
  `Endereco_idEndereco` INT NOT NULL,
  PRIMARY KEY (`idONG`),
  INDEX `fk_ONG_Projeto1_idx` (`Projeto_idProjeto` ASC),
  INDEX `fk_ONG_Endereco1_idx` (`Endereco_idEndereco` ASC),
  CONSTRAINT `fk_ONG_Projeto1`
    FOREIGN KEY (`Projeto_idProjeto`)
    REFERENCES `tcc_api`.`Projeto` (`idProjeto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ONG_Endereco1`
    FOREIGN KEY (`Endereco_idEndereco`)
    REFERENCES `tcc_api`.`Endereco` (`idEndereco`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tcc_api`.`Doacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tcc_api`.`Doacao` (
  `id` VARCHAR(45) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  `Projeto_idProjeto` INT NOT NULL,
  `tipo` VARCHAR(45) NULL,
  `valor` BIGINT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Usuario_has_Projeto_Projeto1_idx` (`Projeto_idProjeto` ASC),
  INDEX `fk_Usuario_has_Projeto_Usuario1_idx` (`Usuario_idUsuario` ASC),
  CONSTRAINT `fk_Usuario_has_Projeto_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `tcc_api`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_Projeto_Projeto1`
    FOREIGN KEY (`Projeto_idProjeto`)
    REFERENCES `tcc_api`.`Projeto` (`idProjeto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
