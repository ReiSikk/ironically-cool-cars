const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea21-07db.restdb.io/rest/ironicallycoolcars/" + id;

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

function showCars(cars) {
    console.log(cars);
    document.querySelector(".price").textContent = cars.price;
    /*product.html?id=1000 */
    copy.querySelector("a").setAttribute("href", `product.html?id=${cars.id}`);
}