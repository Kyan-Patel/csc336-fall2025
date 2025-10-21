import express from "express";
import fs from "fs";

const app = express();

app.use(express.static("./public"));
app.use(express.json());

// GET /world → send world.json
app.get("/world", (req, res) => {
  const text = fs.readFileSync("world.json", "utf-8");
  const world = JSON.parse(text);
  res.json(world);
});

/*
POST /add-person
Body (JSON):
{
  "regionName": "Northwest",
  "townName": "Forsthall",
  "name": "New Person",
  "role": "Some role"   // optional
}
*/
app.post("/add-person", (req, res) => {
  const world = JSON.parse(fs.readFileSync("world.json", "utf-8"));

  const { regionName, townName, name, role } = req.body;

  if (!regionName || !townName || !name) {
    return res.status(400).json({ error: "regionName, townName, and name are required" });
  }

  // find region
  const region = world.regions.find(r => r.name === regionName);
  if (!region) return res.status(404).json({ error: `Region not found: ${regionName}` });

  // find town
  const town = region.towns.find(t => t.name === townName);
  if (!town) return res.status(404).json({ error: `Town not found: ${townName}` });

  // prevent duplicates by exact name
  const exists = (town.notable_people || []).some(p => p.name === name);
  if (exists) return res.status(409).json({ error: `${name} already exists in ${townName}` });

  // add the person
  town.notable_people = town.notable_people || [];
  town.notable_people.push({
    name,
    role: role || "Citizen",
    items: []
  });

  fs.writeFileSync("world.json", JSON.stringify(world, null, 2));
  res.json(world);
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
