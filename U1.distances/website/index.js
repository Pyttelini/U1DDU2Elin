let CityDiv = document.querySelector("#cities");

for (let city of cities ){
    let pcreate = document.createElement("p");
    pcreate.textContent = city.name;
    CityDiv.appendChild(pcreate);
    pcreate.classList.add("cityBox");

}

let TableDiv = document.querySelector("#table");
let image1 = document.createElement("img");

TableDiv.append(image1);
image1.setAttribute("src", "../Bilder och videos/avsta╠èndstabellen.png");