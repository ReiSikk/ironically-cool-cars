const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea21-07db.restdb.io/rest/ironicallycoolcars/" + id;

const options = {
    headers: {
        "x-apikey": "620e4b1534fd62156585872a",
    },
};
fetch(url, options)
    .then((res) => res.json())
    .then((data) => showCars(data));

function showCars(cars) {
    console.log(cars); /*product.html?id=1000 */
    document.querySelector(".price").textContent = cars.price + " " + "$";
    document.querySelector(".price").textContent = cars.price + " " + "$";
    document.querySelector(
        ".product-card-photo"
    ).src = `http://gareth.dk/data/${cars.id}.jpeg`;
}