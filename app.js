// JavaScript for Drug List Application

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("add-drug-form");
    const drugList = document.getElementById("drug-list-ul");

    // Event listener for form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form data
        const drugName = document.getElementById("drug-name").value;
        const brandName = document.getElementById("brand-name").value;
        const dateCreated = document.getElementById("date-created").value;
        const status = document.getElementById("status").value;

        // Create a new drug item
        const drugItem = document.createElement("li");
        drugItem.innerHTML = `
            <strong>Drug Name:</strong> ${drugName}<br>
            <strong>Brand Name:</strong> ${brandName}<br>
            <strong>Date Created:</strong> ${dateCreated}<br>
            <strong>Status:</strong> ${status}<br>
        `;

        // Add the new drug to the list
        drugList.appendChild(drugItem);

        // Clear form inputs
        form.reset();
    });

    // You can add more functionality here to interact with your backend API
});