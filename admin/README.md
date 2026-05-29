# 🛠️ Admin Panel — Product Management Dashboard

A React-based admin panel for managing products in the Shopper e-commerce platform. It allows admins to upload product images, add new products with pricing and category details, and remove existing ones.

---

## 📁 Folder Structure

```
admin/src/
├── App.jsx              # Root component — sidebar + routing
├── main.jsx             # React entry point
└── components/
    ├── Navbar/           # Admin top bar
    ├── Sidebar/          # Navigation links (Add Product, List Products)
    ├── AddProduct/       # Form to upload image and add a new product
    └── ListProduct/      # Table view of all products with delete option
```

---

## 🔑 How to Use

1. Make sure the **backend** is running on `http://localhost:4000`.
2. Start the admin panel:
   ```bash
   npm install
   npm run dev
   ```
3. Navigate to the admin URL in your browser.
4. Use **Add Product** to upload an image, set a name, category, and prices.
5. Use **List Products** to view and delete existing products.

> **Note**: There is currently no login protection on the admin panel. Anyone with access to the URL can manage products. See Future Improvements below.

---

## 📦 What Gets Stored

When a product is added:
- The image is uploaded to `backend/upload/images/`
- The product is saved to MongoDB with: `name`, `image`, `category`, `new_price`, `old_price`, and an auto-incremented `id`

---

## 🔧 Future Improvements

- [ ] **Admin Authentication**: Add a separate admin login screen. Issue admin-specific JWT tokens with a role field (`"role": "admin"`).
- [ ] **Product Editing**: Add an "Edit" button to update name, price, or category without deleting and re-adding.
- [ ] **Image Preview**: Show a live preview of the image before clicking upload.
- [ ] **Bulk Actions**: Allow selecting and deleting multiple products at once.
- [ ] **Analytics Dashboard**: Show total products, total users, and recent orders on the homepage.
- [ ] **Order Management**: List and update the status of customer orders.
- [ ] **Stock Management**: Add a `stock` field to products and warn when items are low.
- [ ] **Rich Text Description**: Let admins write a full product description with a WYSIWYG editor.

---

## 🎨 Customisation Guide

| Goal                          | Where to Change                                 |
|------------------------------|-------------------------------------------------|
| Change admin brand name       | `components/Navbar/Navbar.jsx`                  |
| Add a new product field       | `AddProduct.jsx` form + `backend/models/Product.js` |
| Add a new admin page          | Create component + add route/link in `Sidebar`  |
| Change backend URL            | Find and replace `localhost:4000` in `src/`     |
| Add admin role security       | Add role check in middleware + add login page   |
| Connect to a different backend| Update all `fetch()` URLs to your deployed API  |