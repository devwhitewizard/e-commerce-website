# 🖥️ Backend — Express REST API

The backend is a **Node.js/Express** server that powers the Shopper e-commerce platform. It handles user authentication, product management, and cart operations, with data stored in **MongoDB**.

---

## 📁 Folder Structure

```
backend/
├── index.js           # App entry point — sets up Express, CORS, MongoDB, routes
├── middleware/
│   └── auth.js        # JWT authentication middleware (fetchUser)
├── models/
│   ├── User.js        # Mongoose schema for users (name, email, hashed password, cart)
│   └── Product.js     # Mongoose schema for products (name, category, price, image)
├── routes/
│   ├── users.js       # Auth routes: /signup, /login, /forgotpassword
│   ├── products.js    # Product routes: /add, /remove, /allproducts, /newcollections, etc.
│   └── cart.js        # Cart routes: /add, /remove, /get
├── upload/
│   └── images/        # Directory where uploaded product images are stored
├── .env               # Environment variables (not committed to Git)
└── .env.example       # Template for .env setup
```

---

## 🔌 API Endpoints

### Users (`/api/users`)
| Method | Endpoint           | Auth? | Description                  |
|--------|--------------------|-------|------------------------------|
| POST   | `/signup`          | No    | Register a new user          |
| POST   | `/login`           | No    | Login and receive a JWT token|
| POST   | `/forgotpassword`  | No    | Request a password reset     |

### Products (`/api/products`)
| Method | Endpoint             | Auth? | Description                        |
|--------|----------------------|-------|------------------------------------|
| POST   | `/add`               | No    | Add a new product (admin use)      |
| POST   | `/remove`            | No    | Remove a product by ID             |
| GET    | `/allproducts`       | No    | Get all products                   |
| GET    | `/newcollections`    | No    | Get the 8 most recently added      |
| GET    | `/popularinwomen`    | No    | Get top women's category products  |
| GET    | `/relatedproducts/:category` | No | Get related items by category |

### Cart (`/api/cart`)
| Method | Endpoint  | Auth? | Description                    |
|--------|-----------|-------|--------------------------------|
| POST   | `/add`    | Yes   | Add an item to the user's cart |
| POST   | `/remove` | Yes   | Remove an item from the cart   |
| POST   | `/get`    | Yes   | Fetch the user's full cart     |

---

## 🔐 Security

- Passwords are hashed using **bcryptjs** before storage.
- All protected routes use a **JWT token** sent in the `auth-token` header.
- The `fetchUser` middleware in `middleware/auth.js` validates the token.

---

## 🔧 Future Improvements

- [ ] **Email Service**: Implement real forgot-password emails with Nodemailer + an SMTP provider.
- [ ] **Admin Route Protection**: Add role-based middleware to protect product add/remove endpoints.
- [ ] **Orders Collection**: Create an `Order` model and `/api/orders` routes for checkout flow.
- [ ] **Pagination**: Add `?page=` and `?limit=` support to `/allproducts` for performance.
- [ ] **Input Validation**: Add `express-validator` or `zod` to validate all incoming request bodies.
- [ ] **Rate Limiting**: Add `express-rate-limit` to prevent brute-force attacks on `/login`.
- [ ] **Image CDN**: Move image uploads to a cloud service like Cloudinary or AWS S3 instead of local disk.

---

## 🎨 Customisation Guide

| Goal                          | What to Change                                      |
|------------------------------|-----------------------------------------------------|
| Add a new product field       | Update `models/Product.js` schema + admin upload form |
| Add a new user field          | Update `models/User.js` (e.g., phone number, address) |
| Add a new category            | No backend change needed; categories are just strings  |
| Change JWT expiry             | In `users.js`, add `{ expiresIn: '7d' }` to `jwt.sign()` |
| Use a different database      | Swap Mongoose for another ORM in `index.js`         |
| Protect admin routes          | Add admin role to `User` schema + new middleware     |
