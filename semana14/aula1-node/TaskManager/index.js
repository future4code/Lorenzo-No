const fs = require("fs");
const file = process.argv[2];
const task = `\n${process.argv[3]}`;
const red = "\033[0;31m";

try {
  fs.appendFileSync(file, task, "utf8");
  console.log("Tarefa adicionada com sucesso!");
} catch (e) {
  console.log(red + (e));
}