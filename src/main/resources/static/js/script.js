document.addEventListener("DOMContentLoaded", function () {
    loadProperties();
});

let currentPage = 0;

function loadProperties() {
    const location = document.getElementById("search-location").value;
    const minPrice = document.getElementById("min-price").value;
    const maxPrice = document.getElementById("max-price").value;
    const minSize = document.getElementById("min-size").value;
    const maxSize = document.getElementById("max-size").value;

    let queryParams = `?page=${currentPage}&size=5`;
    if (location) queryParams += `&location=${location}`;
    if (minPrice) queryParams += `&minPrice=${minPrice}`;
    if (maxPrice) queryParams += `&maxPrice=${maxPrice}`;
    if (minSize) queryParams += `&minSize=${minSize}`;
    if (maxSize) queryParams += `&maxSize=${maxSize}`;

    fetch(`/properties${queryParams}`)
        .then(response => response.json())
        .then(data => {
            const propertyList = document.getElementById("property-list");
            propertyList.innerHTML = "";
            data.forEach(property => {
                const item = document.createElement("li");
                item.innerHTML = `
                    <strong>${property.address}</strong> - $${property.price} - ${property.size}  m&sup2
                    <p>${property.description}</p>
                    <button onclick="editProperty(${property.id})">Edit</button>
                    <button onclick="deleteProperty(${property.id})">Delete</button>
                `;
                propertyList.appendChild(item);
            });
        });
}

function addProperty() {
    const address = document.getElementById("address").value;
    const price = document.getElementById("price").value;
    const size = document.getElementById("size").value;
    const description = document.getElementById("description").value;

    fetch("/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, price, size, description })
    }).then(() => {
        alert("Property added successfully!");
        loadProperties();
        document.getElementById("property-form").reset();
    }).catch(() => alert("Error adding property."));
}
function editProperty(id) {
    const newAddress = prompt("Enter new address:");
    const newPrice = prompt("Enter new price:");
    const newSize = prompt("Enter new size:");
    const newDescription = prompt("Enter new description:");

    fetch(`/properties/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: newAddress, price: newPrice, size: newSize, description: newDescription })
    }).then(() => loadProperties());
}

function deleteProperty(id) {
    fetch(`/properties/${id}`, { method: "DELETE" })
        .then(() => loadProperties());
}
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        loadProperties();
    }
}

function nextPage() {
    currentPage++;
    loadProperties();
}
