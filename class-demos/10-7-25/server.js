import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, (req,res) => {
    console.log('Servier started!');
})

app.get("/test", (req,res) => {
    console.log("Someone hade a get request with the 'test' endpoint");
});