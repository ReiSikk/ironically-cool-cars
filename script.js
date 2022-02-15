const url = "https://kea-alt-del.dk/t7/api/products";
fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        handleProductList(data);
    });

function handleProductList(data) {
    data.forEach(showProduct);
}

function showProduct(product) {
    console.log(product);
    const template = document.querySelector(".").content;
    const copy = template.cloneNode(true);
    document.querySelector(".category-name").textContent = product.category;
    copy.querySelector("h3").textContent = product.productdisplayname;
    const parent = document.querySelector("main");
    parent.appendChild(copy);
}