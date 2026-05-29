# 🛍️ Shopper — Full-Stack E-Commerce Platform

A full-stack e-commerce application built with **React** (frontend & admin), **Node.js/Express** (backend), and **MongoDB** (database).

---

## 📁 Project Structure

```
ecommerce/
├── frontend/    # Customer-facing React web application
├── backend/     # Express REST API server
└── admin/       # Admin panel for managing products
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)
- npm

### Running the App

**1. Start the Backend**
```bash
cd backend
npm install
npm run dev        # Runs on http://localhost:4000
```

**2. Start the Frontend**
```bash
cd frontend
npm install
npm run dev        # Runs on http://localhost:5173
```

**3. Start the Admin Panel**
```bash
cd admin
npm install
npm run dev        # Runs on a separate port
```

---

## ⚙️ Environment Variables

Create a `.env` file inside `backend/` using `.env.example` as a guide:

| Variable     | Description                            |
|-------------|----------------------------------------|
| `MONGO_URI`  | MongoDB connection string              |
| `JWT_SECRET` | Secret key for signing JWT tokens      |
| `PORT`       | Port for the backend server (def: 4000)|

---

## 🔧 Future Improvements

- [ ] **Payment Gateway**: Integrate Stripe or PayPal for real checkout.
- [ ] **Email Notifications**: Send order confirmation and forgot-password emails via Nodemailer/SendGrid.
- [ ] **Product Search**: Add a full-text search bar across all products.
- [ ] **Product Reviews**: Allow users to rate and review product.
- [ ] **Order Management**: Create an orders collection and an orders page.
- [ ] **Role-Based Access**: Distinguish admin vs. regular user roles in JWT.
- [ ] **Image Optimization**: Serve WebP images and use lazy loading.
- [ ] **Deployment**: Deploy frontend to Vercel, backend to Render/Railway, DB to Atlas.

---

## 🎨 Customisation Guide

| Goal                        | Where to Edit                                  |
|----------------------------|------------------------------------------------|
| Change brand name/logo      | `frontend/src/components/navbar/Navbar.jsx`    |
| Change color palette        | `frontend/src/index.css` + individual `.css`   |
| Add a new product category  | `App.jsx` routes + new banner image            |
| Change currency             | Search `$` in `.jsx` files and replace         |
| Add a new page              | Create in `frontend/src/pages/` + add route in `App.jsx` |
| Change API base URL         | Search `localhost:4000` in `frontend/src/`     |
