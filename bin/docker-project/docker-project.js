#!/usr/bin/env node
import fs from "fs-extra";
import { resolve } from "path";
import { execSync } from "child_process";
import colors from "colors";

// Get source and destination directories
const projectDirectory = resolve();
const globalNodeDir = execSync("npm root -g", { encoding: "utf-8" });
const assetsDirectory = globalNodeDir.trim() + "/@tcm/docker-project/assets";

// Check if we have an index.php in the folder already so we don't overwrite it
const indexPhpFile = projectDirectory + "/index.php";
if (!fs.pathExistsSync(indexPhpFile)) {
  fs.copySync(assetsDirectory + "/index.php", indexPhpFile);
  console.log("index.php file added".brightGreen);
} else {
  console.log("index.php file exist, it was not added!".red);
}

// Check if we have a docker-compose.yml file in the folder already so we don't overwrite it
const dockerComposeFile = projectDirectory + "/docker-compose.yml";
if (!fs.pathExistsSync(dockerComposeFile)) {
  fs.copySync(assetsDirectory + "/docker-compose.yml", dockerComposeFile);
  console.log("docker-compose.yml file added".brightGreen);
} else {
  console.log("docker-compose.yml file exist, it was not added".red);
}

// Check if we have a .env file in the folder already so we don't overwrite it
const envFile = projectDirectory + "/.env";
if (!fs.pathExistsSync(envFile)) {
  fs.copySync(assetsDirectory + "/.env", envFile);
  console.log(".env file added".brightGreen);
} else {
  console.log(".env file exist, it was not added".red);
}

// Check if we have a php.ini file in the folder already so we don't overwrite it
if (!fs.pathExistsSync(projectDirectory + "/php/php.ini")) {
  fs.copySync(assetsDirectory + "/php", projectDirectory + "/php");
  console.log("php.ini file added".brightGreen);
} else {
  console.log("php.ini exist, it was not added".red);
}
