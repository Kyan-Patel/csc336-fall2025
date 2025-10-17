import fs from "fs";

const data = fs.readFileSync("./world.json", "utf-8");
const world = JSON.parse(data);

// console.log(world);

let totalPopulation = 0;

world.regions.forEach(function(region) {
  region.towns.forEach(function(town) {
    totalPopulation += town.population;
  });
});

console.log(`\nTotal World Population: ${totalPopulation}`);

console.log("Regional Towns and Notable People:");
world.regions.forEach(function(region) {
  console.log(`\n${region.name}:`);

  region.towns.forEach(function(town) {
    console.log(`${town.name} (Population: ${town.population})`);
    console.log("Notable People:");

    town.notable_people.forEach(function(person) {
      console.log(`- ${person.name} (${person.role})`);
      console.log("Items:");

      person.items.forEach(function(item) {
        if (typeof item === "string") {
          console.log(`- ${item}`);
        } else {
          console.log(`- ${item.name} [${item.rarity}]`);
        }
      });
    });
  });
});




