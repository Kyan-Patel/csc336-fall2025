async function loadWorld() {
  const response = await fetch("/world");   
  const world = await response.json();      

  let html = "";
  for (let region of world.regions) {  
    html += "<h3>" + region.name + "</h3>";
    for (let town of region.towns) {        
      html += "<p>" + town.name + " - pop. " + town.population + "</p>";
      html += "<ul>";
      for (let person of town.notable_people) {   
        html += "<li>" + person.name + " (" + person.role + ")</li>";
      }
      html += "</ul>";
    }
  }

  document.getElementById("worldDiv").innerHTML = html;
}

loadWorld();

const form = document.getElementById("personForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();  

  const data = new FormData(form);
  const body = Object.fromEntries(data.entries());

  const response = await fetch("/add-person", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const result = await response.json();

  loadWorld();
  form.reset();
});
