let cityPrompt = prompt("Vilken Stad?");


let found = false;

for (let city of cities) {
    if (cityPrompt === city.name) {
        document.querySelector("title").textContent = cityPrompt;
        document.querySelector("h2").textContent = cityPrompt+" (" + city.country + ")";
        found = true;
        break;
    }
}
if (!found) {
    document.querySelector("title").textContent = "Not Found";
    document.querySelector("h2").textContent = cityPrompt + " finns inte i databasen";
    document.querySelector("h3").remove();
}






let CityDiv = document.querySelector("#cities");

for (let city of cities ){
    let pcreate = document.createElement("p");
    pcreate.textContent = city.name;
    CityDiv.appendChild(pcreate);
    pcreate.classList.add("cityBox");

}
let TableDiv = document.querySelector("#table");
let pcreateFirstGrid = document.createElement("p");


TableDiv.appendChild(pcreateFirstGrid);

for(let city of cities){
    let pcreate = document.createElement("p");
    TableDiv.appendChild(pcreate);
    pcreate.textContent = city.id;
    pcreate.classList.add("cell");
    pcreate.classList.add("head_row");

}
for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    let pcreate = document.createElement("p");
    TableDiv.appendChild(pcreate);
    pcreate.textContent = city.id + "-" + city.name;
    pcreate.classList.add("cell");
    pcreate.classList.add("head_column");

    if (i % 2 === 0) {
        pcreate.classList.add("even_row");
    }

    for (let j = 0; j < cities.length; j++) {
        if (i === j) {
            let pcreate = document.createElement("p");
            TableDiv.appendChild(pcreate);
            pcreate.classList.add("cell");
            if (i % 2 === 0) {
                pcreate.classList.add("even_row");
            }
            if (j % 2 === 0) {
                pcreate.classList.add("even_col");
            }
        } else {
            let distance = distances.find(d => 
                (d.city1 === city.id && d.city2 === cities[j].id) || 
                (d.city2 === city.id && d.city1 === cities[j].id)
            );
            let pcreate = document.createElement("p");
            TableDiv.appendChild(pcreate);
            pcreate.textContent = distance ? distance.distance / 10 : "";
            pcreate.classList.add("cell");
            if (i % 2 === 0) {
                pcreate.classList.add("even_row");
            }
            if (j % 2 === 0) {
                pcreate.classList.add("even_col");
            }
        }
    }
}




