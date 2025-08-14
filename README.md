

# 📚 MERN Bookstore

![MERN](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In%20Development-yellow?style=for-the-badge)

A **full-stack bookstore application** built using the **MERN** stack, featuring a **secure admin dashboard**, **cash-on-delivery checkout**, and a **robust inventory management system**.

---

## 🚀 Tech Stack

| Layer       | Technology                                                                 |
|-------------|-----------------------------------------------------------------------------|
| **Frontend**| React.js, Tailwind CSS, Redux Toolkit, RTK Query                            |
| **Backend** | Node.js, Express.js                                                         |
| **Database**| MongoDB with Mongoose                                                       |
| **Auth**    | JSON Web Tokens (JWT)                                                       |
| **Tools**   | Axios, ESLint, Prettier, Git & GitHub                                       |

---

## ✨ Features

### 🛍 For Users
- Browse and search for books
- Add or remove books from cart
- Place orders with **cash-on-delivery**
- View cart and order summary

### 🛠 For Admin
- Secure **JWT-based login**
- Upload new books with details
- Update or delete existing books
- Manage inventory in real-time

---

## 📂 Project Structure

```

mern-bookstore/
│
├── backend/         # Node.js + Express API
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   ├── controllers/ # Request handlers
│   ├── middleware/  # Auth & error handlers
│   └── utils/       # Helper functions
│
├── frontend/        # React + Tailwind + Redux
│   ├── components/  # Reusable UI components
│   ├── pages/       # Page-level components
│   ├── redux/       # State management
│   └── utils/       # Frontend helpers
│
└── README.md

````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/yourusername/mern-bookstore.git
cd mern-bookstore
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Run the backend:

```bash
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔐 Admin Login

* Default admin credentials can be seeded into the database or manually created.
* JWT tokens are generated upon successful login for secure access.

---

## 📌 Future Enhancements

* Online payment integration (Stripe / Razorpay)
* Book reviews & ratings
* Advanced search & filtering
* Order tracking & email notifications

---

## 🖼 Preview

*(Screenshots or GIFs of your app can be placed here)*

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

```
