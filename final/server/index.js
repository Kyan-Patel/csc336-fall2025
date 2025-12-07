import express from "express";

const app = express();

app.use(express.json());

app.get("/api/data", (req,res) =>{
    console.long("hello from api enpoint /api/data!")
});

app.listen(3000);