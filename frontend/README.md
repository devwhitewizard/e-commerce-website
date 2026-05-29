# ⚛️ Frontend — React Customer Application

The customer-facing storefront built with **React 19**, **React Router v7**, and **Vite**. It allows users to browse products by category, view product details, manage a shopping cart, and authenticate.

---

## 📁 Folder Structure

```
frontend/src/
├── App.jsx                  # Root component — routing and layout
├── main.jsx                 # React entry point
├── index.css                # Global base styles
├── context/
│   └── ShopContext.jsx      # Global state: products, cart, add/remove/clear
├── pages/
│   ├── Shop.jsx             # Homepage with hero, popular, new collections
│   ├── ShopCategory.jsx     # Category listing page (men/women/kids)
│   ├── Product.jsx          # Product detail page
│   ├── Cart.jsx             # Cart summary and checkout UI
│   ├── LoginSignup.jsx      # Combined login/signup form
│   └── ForgotPassword.jsx   # Password reset request page
└── components/
    ├── navbar/              # Top navigation bar with login state & cart count
    ├── footer/              # Site footer with links
    ├── hero/                # Homepage hero/banner section
    ├── popular/             # "Popular In Women" product grid
    ├── newCollection/       # "New Collections" product grid
    ├── item/                # Reusable product card component (Item.jsx)
    ├── cartItems/           # Cart table with quantities and totals
    ├── productDisplay/      # Full product detail view (images, sizes, price)
    ├── descriptionBox/      # Product description and review tabs
    ├── relatedProducts/     # 4-product related items grid
    ├── breadcrums/          # Breadcrumb navigation component
    └── assets/              # Static images and product data files
```

---

## 🔗 Routes

| Path              | Component       | Description                       |
|-------------------|-----------------|-----------------------------------|
| `/`               | `Shop`          | Homepage                          |
| `/men`            | `ShopCategory`  | Men's category page               |
| `/womens`         | `ShopCategory`  | Women's category page             |
| `/kids`           | `ShopCategory`  | Kids' category page               |
| `/product/:id`    | `Product`       | Product detail page               |
| `/cart`           | `Cart`          | Shopping cart                     |
| `/login`          | `LoginSignup`   | Login/Signup page                 |
| `/forgot-password`| `ForgotPassword`| Password reset request            |

---

## 🧠 State Management

All global state lives in `context/ShopContext.jsx`:

- `all_product` — merged list (backend products first, then static fallback)  
- `cartItems` — map of `{ productId: quantity }`  
- `addToCart(id)` / `removeFromCart(id)` / `clearCart()` — mutate cart  
- `getTotalCartItems()` / `getTotalCartAmount()` — computed values  

Cart is synced to the backend if the user is logged in (via `auth-token` in localStorage).

---

## 🔧 Future Improvements

- [ ] **Size Selection Persistence**: Store the selected size when adding to cart.
- [ ] **Checkout Flow**: Create a multi-step checkout page (shipping → payment → confirmation).
- [ ] **Product Search**: Add a search input in the navbar with live filtering.
- [ ] **Wishlist**: Let users save products for later.
- [ ] **Product Filter & Sort**: Add sorting by price, rating, and filtering by size/color.
- [ ] **Infinite Scroll or Pagination**: Replace "Explore More" button with true pagination.
- [ ] **Toast Notifications**: Replace `alert()` calls with a styled toast library (e.g. `react-hot-toast`).
- [ ] **Skeleton Loaders**: Show shimmers while products are loading from the backend.
- [ ] **PWA Support**: Add a service worker and manifest for installability.

---

## 🎨 Customisation Guide

| Goal                          | Where to Change                                          |
|------------------------------|----------------------------------------------------------|
| Change the store name/logo    | `components/navbar/Navbar.jsx` and `components/footer/`  |
| Change brand colors           | Edit `--primary` color tokens in `index.css`             |
| Add a new product category    | Add route in `App.jsx` + new banner image in `assets/`   |
| Modify the homepage layout    | Edit `pages/Shop.jsx`                                    |
| Change the product card style | Edit `components/item/Item.jsx` and `Item.css`           |
| Use a different API URL       | Find and replace `localhost:4000` across `src/`          |
| Add a user profile page       | Create `pages/Profile.jsx` + add `/profile` route        |
| Add a promo banner            | Add a component to `components/` and insert in `Shop.jsx`|
