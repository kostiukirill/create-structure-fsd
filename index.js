#!/usr/bin/env node
const { exec } = require("child_process");

const createStructure = require("./createStructureFSD");
const { createComponent } = require("./createComponent");

const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
  case "createStructure":
    createStructure();
    break;
  case "createComponent":
    createComponent(...args);
    break;
  case "runShellCommand":
    const shellCommand = args.join(" ");
    exec(shellCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Ошибка: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Ошибка вывода: ${stderr}`);
        return;
      }
      console.log(`Результат: ${stdout}`);
    });
    break;
  default:
    console.log("Unknown command");
}
