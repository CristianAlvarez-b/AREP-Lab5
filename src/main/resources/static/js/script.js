document.addEventListener("DOMContentLoaded", function () {
    loadProperties();
});

function loadProperties() {
    fetch("http://localhost:8080/properties")
        .then(response => response.json())
        .then(data => {
            const propertyList = document.getElementById("property-list");
            propertyList.innerHTML = "";
            data.forEach(property => {
                const item = document.createElement("li");
                item.innerHTML = `
                    <strong>${property.address}</strong> - $${property.price} - ${property.size} m2
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

    fetch("http://localhost:8080/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, price, size, description })
    }).then(() => {
        loadProperties();
        document.getElementById("property-form").reset();
    });
}

function editProperty(id) {
    const newAddress = prompt("Enter new address:");
    const newPrice = prompt("Enter new price:");
    const newSize = prompt("Enter new size:");
    const newDescription = prompt("Enter new description:");

    fetch(`http://localhost:8080/properties/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address: newAddress, price: newPrice, size: newSize, description: newDescription })
    }).then(() => loadProperties());
}

function deleteProperty(id) {
    fetch(`http://localhost:8080/properties/${id}`, { method: "DELETE" })
        .then(() => loadProperties());
}
