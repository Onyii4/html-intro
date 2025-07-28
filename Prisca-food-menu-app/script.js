// 🛒 Cart setup
let cart = [];
let total = 0;

const foods = [
  {
    name: "Jollof Rice",
    image: "images/Jollof-rice.jpg",
    description: "Spicy tomato rice with beef",
    price: 1500
  },
  {
    name: "Egusi Soup & Pounded Yam",
    image: "images/Egusi-soup-and-pounded-yam.jpg",
    description: "Melon seed soup with pounded yam",
    price: 2000
  },
  {
    name: "Suya",
    image: "images/Suya.jpg",
    description: "Grilled spicy beef with onions",
    price: 1200
  },
  {
    name: "Okra Soup & Semovita",
    image: "images/Okro-soup-and-semovita.jpg",
    description: "Draw soup with assorted meat",
    price: 1800
  },
  {
    name: "Fried Plantain & Beans",
    image: "images/Fried-plantain-beans.jpg",
    description: "Ewa agoyin with sweet ripe plantains",
    price: 1300
  },
  {
    name: "Nkwobi",
    image: "images/Nkwobi.jpg",
    description: "Cow foot delicacy in spicy palm oil sauce",
    price: 2200
  },
  {
    name: "Abacha",
    image: "images/Abacha.jpg",
    description: "African salad with ugba and kpomo",
    price: 1200
  },
  {
    name: "Moi Moi & Pap",
    image: "images/Moi-moi-with-pap.jpg",
    description: "Steamed bean pudding with creamy pap",
    price: 1000
  },
  {
    name: "White Rice & Ofada Sauce",
    image: "images/Rice-with-ofada-sauce.jpg",
    description: "Spicy ofada stew served with plain rice",
    price: 1700
  }
];

// Selecting DOM elements
const foodContainer = document.getElementById("menu");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");
const submitButton = document.getElementById("submit-order");
const printButton = document.getElementById("print-order");
const spinner = document.getElementById("spinner");

// Display food items
foods.forEach((food, index) => {
  const card = document.createElement("div");
  card.className = "food-card";

  card.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
    <h3>${food.name}</h3>
    <p>${food.description}</p>
    <p><strong>₦${food.price}</strong></p>

    <label for="quantity-${index}">Qty:</label>
    <select id="quantity-${index}">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>

    <button onclick="addToCart(${index})">Add to Plate</button>
  `;

  foodContainer.appendChild(card);
});

// Add to cart
function addToCart(index) {
  const quantitySelect = document.getElementById(`quantity-${index}`);
  const quantity = parseInt(quantitySelect.value);
  const food = foods[index];

  if (quantity < 1) return;

  const existing = cart.find(item => item.name === food.name);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ name: food.name, price: food.price, quantity });
  }

  updateCart();
  calculateTotal();

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total);
}

// Update cart display
function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x${item.quantity} - ₦${item.price * item.quantity}`;
    cartItems.appendChild(li);
  });
}

// Calculate total
function calculateTotal() {
  total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalDisplay.textContent = total;
}

// Submit order
submitButton.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Please add an item first.");
    return;
  }

  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";
    alert("🎉 Order submitted successfully!");

    cart = [];
    total = 0;
    cartItems.innerHTML = "";
    totalDisplay.textContent = "0";
    localStorage.clear();
  }, 2000);
});

// Print preview
printButton.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("No items to print!");
    return;
  }

  let preview = "🧾 Order Summary:\n\n";
  cart.forEach(item => {
    preview += `• ${item.name} x${item.quantity} - ₦${item.price * item.quantity}\n`;
  });
  preview += `\nTotal: ₦${total}`;
  alert(preview);
});

// Load from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  const savedTotal = parseInt(localStorage.getItem("total"));

  if (savedCart && savedCart.length > 0) {
    cart = savedCart;
    total = savedTotal;
    updateCart();
    calculateTotal();
  }
});