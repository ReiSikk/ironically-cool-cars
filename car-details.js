const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea21-07db.restdb.io/rest/ironicallycoolcars/" + id;