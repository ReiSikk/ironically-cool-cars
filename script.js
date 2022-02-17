const url = "https://kea21-07db.restdb.io/rest/ironicallycoolcars";

const options = {
    headers: {
        "Init Key 2": "620e429534fd621565858722",
    },
};

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        handleProductList(data);
    })
    .catch((e) => {
        console.error("An error occured:", e.message);
    });

function handleProductList(data) {
    data.forEach((data) => {
        console.log(data);
    });
}

function showProduct(product) {
    console.log(product);
    const template = document.querySelector("#carsTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector("h2").textContent = "heyyyyyyyyy";
    const parent = document.querySelector("main");
    parent.appendChild(copy);
}