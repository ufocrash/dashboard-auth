# 🔐 Dashboard with Authentication – Next.js

A simple project built with Next.js, React, and NextAuth that implements Google authentication and a protected dashboard for authenticated users.

---

## 🚀 Technologies Used

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/) _(optional, for storing data)_

---

## ✅ Features

- Google OAuth2 login
- Protected `/dashboard` route for authenticated users only
- Display user information (name, email, profile picture)
- Simple logout functionality
- _(Optional)_ Task or notes management
- _(Optional)_ Store data in MongoDB

---

## 📦 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ufocrash/dashboard-auth.git
   cd dashboard-auth

   ```

2. Install dependencies:
   npm install

3. Create an .env.local file and add your environment variables:
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_SECRET=your_random_secret
   NEXTAUTH_URL=http://localhost:3000

4. Run the development server:
   npm run dev

License
This project was built for learning purposes. Feel free to use and adapt the code.

Built by ufocrash
