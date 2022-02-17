const url = "https://kea21-07db.restdb.io/rest/ironicallycoolcars";

const options = {
    headers: {
        "x-apikey": "620e4b1534fd62156585872a",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {}
        return response.json();
    })
    .then((data) => {
        handleProductList(data);
    });

function handleProductList(data) {
    data.forEach(showCars);
}
/* const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        handleProductList(data);
    });

function handleProductList(data) {
    data.forEach(showCars);
} */

function showCars(cars) {
    console.log(cars);
    const template = document.querySelector("#carsTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector(".card-header").textContent = cars.brand;
    copy.querySelector(".brand").textContent = cars.brand + "/" + cars.model;
    copy.querySelector(".price").textContent = "Price : " + cars.price + "$";
    copy.querySelector(
        ".product-card-photo"
    ).src = `http://gareth.dk/data/${cars.id}.jpeg`;
    copy.querySelector("a").setAttribute("href", `product.html?id=${cars._id}`);
    const parent = document.querySelector(".yy");
    parent.appendChild(copy);
}