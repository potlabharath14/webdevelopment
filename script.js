let cart = [];
let totalMrp = 0;
const platformFee = 10;
const shippingCharges = 20;
let discount = 50;

// Fetch products from Fake Store API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        displayProducts(data);
    })
    .catch(error => console.error('Error fetching products:', error));

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <p>${product.title}</p>
            <p>⭐ ${product.rating.rate}</p>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.price}, '${product.title}', '${product.image}')">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(price, title, image) {
    const existingProduct = cart.find(item => item.title === title);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ price, title, image, quantity: 1 });
    }

    totalMrp += price;
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <p>${item.title}</p>
            <div class="quantity-control">
                <button onclick="decrementItem(${index})">-</button>
                <p>${item.quantity}</p>
                <button onclick="incrementItem(${index})">+</button>
            </div>
            <p>₹${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });

    document.getElementById('total-mrp').textContent = totalMrp.toFixed(2);
    
    // Apply discount only if totalMrp >= 100
    if (totalMrp >= 100) {
        discount = 50;
    } else {
        discount = 0;
    }
    document.getElementById('discount').textContent = discount.toFixed(2);

    const totalAmount = totalMrp - discount + platformFee + shippingCharges;
    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

function incrementItem(index) {
    cart[index].quantity++;
    totalMrp += cart[index].price;
    updateCartUI();
}

function decrementItem(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        totalMrp -= cart[index].price;
        updateCartUI();
    }
}

function removeFromCart(index) {
    totalMrp -= cart[index].price * cart[index].quantity;
    cart.splice(index, 1);
    updateCartUI();
}

function placeOrder() {
    alert('Order placed successfully!');
    cart = [];
    totalMrp = 0;
    updateCartUI();
}
