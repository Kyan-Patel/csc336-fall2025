const fs = require("fs"); // Imporant library using CommonJS

console.log("Hello, node");

let randomNumber = [];

// Read 'randomNumbers.txt'
let fileContent = fs.readFileSync("./randomNumbers.txt", "utf8")
console.log(fileContent);

random = JSON.parse(fileContent)

console.log(random[0]);

for (let i = 0; i < 10; i++) {
  let rand = Math.random();
  randomNumber[i] = rand;
  // console.log(randomNumber[i]);
}

// let str = "";
// for (let rand of randomNumber){
//     str += rand + "\n";
// }
// fs.writeFileSync("randomNumbers.txt", str);

fs.writeFileSync("randomNumbers.txt", JSON.stringify(randomNumber));