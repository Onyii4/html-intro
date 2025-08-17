const orders = [
    {
        status: "Pending",
        product: "Maize",
        quantity: "100 Bags",
        date: "30 July 2025",
        price: "₦500,000"
    },
    {
        status: "Completed",
        product: "Rice",
        quantity: "10 Bags",
        date: "26 July 2025",
        price: "₦200,000"
    },
    {
        status: "Failed",
        product: "Rice",
        quantity: "10 Bags",
        date: "26 July 2025",
        price: "₦200,000"
    },
    {
        status: "Completed",
        product: "Soya Beans",
        quantity: "20 Bags",
        date: "6 July 2025",
        price: "₦200,000"
    },
    {
        status: "Completed",
        product: "Maize",
        quantity: "30 Bags",
        date: "6 July 2025",
        price: "₦150,000"
    },
    {
        status: "Completed",
        product: "Millet",
        quantity: "10 Bags",
        date: "1 July 2025",
        price: "₦50,000"
    }
];

function renderOrders() {
    const tableBody = document.getElementById("order-table-body");
    tableBody.innerHTML = "";

    orders.forEach(order => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${order.product}</td>
            <td>${order.quantity}</td>
            <td>${order.date}</td>
            <td>${order.price}</td>
            <td><span class="status status-${order.status.toLowerCase()}">${order.status}</span></td>
        `;

        tableBody.appendChild(row);
    });
}


document.addEventListener("DOMContentLoaded", renderOrders);

// Navigation & logout events
document.querySelector(".logout").addEventListener("click", () => {
    alert("Logging out...");
    window.location.href = "login.html";
});

document.querySelector("a[href='#dashboard']").addEventListener("click", () => {
    alert("Dashboard clicked!");
});

document.querySelector("a[href='#payment']").addEventListener("click", () => {
    alert("Payment method clicked!");
});

document.querySelector("a[href='#settings']").addEventListener("click", () => {
    alert("Settings clicked!");
});