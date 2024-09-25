# E-Commerce Platform Website

This is a simple, responsive e-commerce platform that displays products fetched from the [Fake Store API](https://fakestoreapi.com/). Users can add items to the cart, increment or decrement the quantity of items, and place an order. The platform applies a discount only when the total cart amount is ₹100 or above.

## Features

- Fetches product data (image, title, price, rating) from [Fake Store API](https://fakestoreapi.com/).
- Responsive design that adjusts to different screen sizes.
- Users can add products to their cart.
- Users can increase or decrease the quantity of items in the cart.
- Displays cart total, platform fee, shipping charges, and discount.
- Discount of ₹50 is applied only if the total cart amount is ₹100 or more.
- Ability to place an order, which clears the cart.
- Total price is dynamically updated based on user actions.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling and making the design responsive.
- **JavaScript**: For dynamically updating the cart, fetching products, and handling user interactions.
- **Fake Store API**: A mock REST API used to fetch product data.

## API Used

The products are fetched from [Fake Store API](https://fakestoreapi.com/products) using JavaScript's `fetch` method.


