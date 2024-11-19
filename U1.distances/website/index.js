let CityDiv = document.querySelector("#cities");

for (let city of cities ){
    let pcreate = document.createElement("p");
    pcreate.textContent = city.name;
    CityDiv.appendChild(pcreate);
    pcreate.classList.add("cityBox");

}

