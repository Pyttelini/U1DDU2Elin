let cityPrompt = prompt("Vilken Stad?");
let CityDiv = document.querySelector("#cities");

let cityID;
let nearestCity = Infinity;
let furtherstCity = -Infinity;
let nearestName;
let furtherstName;
let found = false;

for (let city of cities) {
    if (cityPrompt === city.name) {
        document.querySelector("title").textContent = cityPrompt;
        document.querySelector("h2").textContent = cityPrompt + " (" + city.country + ")";
        found = true;
        cityID = city.id;

        break;
    }
}

if (!found) {
    document.querySelector("title").textContent = "Not Found";
    document.querySelector("h2").textContent = cityPrompt + " finns inte i databasen";
    let h3 = document.querySelector("h3");
    if (h3) h3.remove();
} 
else {
    for (const sameId of distances) {
        if (cityID === sameId.city1 || cityID === sameId.city2) {
            if (sameId.distance > furtherstCity) {
                furtherstCity = sameId.distance;
                furtherstName = (cityID === sameId.city1) ? sameId.city2 : sameId.city1;
            }
            if (sameId.distance < nearestCity) {
                nearestCity = sameId.distance;
                nearestName = (cityID === sameId.city1) ? sameId.city2 : sameId.city1;
            }
        }
    }

    for (const findName of cities) {
        if (nearestName == findName.id) {
            nearestName = findName.name;
            document.getElementById("closest").textContent= nearestName;

        }
        if (furtherstName == findName.id) {
            furtherstName = findName.name;
            document.getElementById("furthest").textContent= furtherstName;
        }
    }
}

for (let city of cities ){
    if (cityPrompt === city.name) {
        let pcreate = document.createElement("p");
        pcreate.textContent = city.name;
        CityDiv.appendChild(pcreate);
        pcreate.classList.add("cityBox");
        pcreate.classList.add("target");
    }
    else if( nearestName == city.name){
        let pcreate = document.createElement("p");
        pcreate.textContent = city.name + " ligger " + nearestCity/10 + "mil bort";
        CityDiv.appendChild(pcreate);
        pcreate.classList.add("cityBox");
        pcreate.classList.add("closest")
        
    }
    else if( furtherstName == city.name){
        let pcreate = document.createElement("p");
        CityDiv.appendChild(pcreate);
        pcreate.classList.add("cityBox");
        pcreate.classList.add("furthest")
        pcreate.textContent = city.name + " ligger " + furtherstCity/10 + " mil bort";
    }
    else{
        let pcreate = document.createElement("p");
        pcreate.textContent = city.name;
        CityDiv.appendChild(pcreate);
        pcreate.classList.add("cityBox");
    
    }
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
        } 
        else {
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




