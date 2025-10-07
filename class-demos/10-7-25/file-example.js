const fs = require("fs"); // CommonJS modeul loading

let programCount=0;

try{
    let fileContents= fs.readFileSync("program_count.txt", "utf8");
    programCount = JSON.parse(fileContents)
} catch(error){
    console.log("Error happened! Probablyy because the file doesnt exist");
   
}
programCount++;
console.log(fileContents);
 fs.writeFileSync("program_count.txt", JSON.stringify(programCount));