# 🚀 Price Tracker AI

An **AI-powered price tracking platform** that lets users track product prices from any e-commerce website, visualize price history, and receive alerts when prices drop — all in one place.

---

## 🖼️ Project Banner

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Firecrawl](https://img.shields.io/badge/Firecrawl-AI-orange?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge)

---

## 📌 Concept

**Price Tracker using AI & Web Scraping**

Users can:
- Create an account using **Google Authentication**
- Paste a product URL from **any website**
- Automatically **scrape price data using AI**
- Store daily price changes in a database
- Visualize price trends using charts
- Receive **email alerts when the price drops**
- Add or delete tracked products anytime

---

## 📚 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [How It Works](#how-it-works)
5. [Quick Start](#quick-start)
6. [Environment Variables](#environment-variables)
7. [Database Schema](#database-schema)
8. [Charts & Visualization](#charts--visualization)
9. [Email Alerts](#email-alerts)
10. [Screenshots](#screenshots)
11. [Future Improvements](#future-improvements)
12. [GitHub Repository](#github-repository)

---

## 🧠 Introduction

**Price Tracker AI** helps users save money by automatically tracking product prices over time.

Instead of manually checking prices every day, users can rely on AI-powered web scraping to:
- Monitor price changes
- Store historical price data
- Get notified when prices drop

This project is built using **modern full-stack technologies** with strong security via **Row Level Security (RLS)**.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router)
- **Backend**: Supabase (PostgreSQL + Auth + RLS)
- **Authentication**: Google OAuth (Supabase Auth)
- **Web Scraping**: Firecrawl (AI-based scraping)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Database**: PostgreSQL (Supabase)
- **Email Notifications**: Supabase + Server Actions
- **Hosting**: Vercel

---

## ✨ Features

- 🔐 Google Authentication
- 🔗 Track products from any website
- 🤖 AI-powered web scraping
- 📈 Interactive price history charts
- 🗃️ Daily price storage
- 🔔 Email alerts on price drops
- ➕ Add products
- 🗑️ Delete products
- 🔒 Secure user-based data access (RLS)

---

## ⚙️ How It Works

1. User logs in using **Google**
2. User pastes a product URL
3. **Firecrawl AI** scrapes product details
4. Product data is stored in **Supabase**
5. Daily price checks update price history
6. **Recharts** displays price trends
7. Email is sent if price drops

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

    git clone https://github.com/ethyne2666/Price-Tracker-AI-.git
    cd Price-Tracker-AI-

### 2️⃣ Install Dependencies

    npm install

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory and add:

    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
    FIRECRAWL_API_KEY=your_firecrawl_api_key
    NEXT_PUBLIC_SITE_URL=http://localhost:3000

⚠️ Do NOT commit `.env.local` to GitHub.

### 4️⃣ Run the Development Server

    npm run dev

Open your browser and visit:

    http://localhost:3000

---

## 🗄️ Database Schema

### products table

- id (uuid)
- user_id (uuid)
- name (text)
- url (text)
- current_price (numeric)
- currency (text)
- image_url (text)
- created_at (timestamp)
- updated_at (timestamp)

### price_history table

- id (uuid)
- product_id (uuid)
- price (numeric)
- currency (text)
- checked_at (timestamp)

---

## 📈 Charts & Visualization

Price trends are visualized using Recharts, allowing users to easily track price fluctuations over time.

---

## 📧 Email Alerts

Users receive an email notification whenever a product’s price drops below the previous recorded price.

---

## 🤝 Contributing

Contributions are welcome!

Steps to contribute:
1. Fork the repository
2. Create a new branch  
   git checkout -b feature/your-feature-name
3. Make your changes
4. Commit your changes  
   git commit -m "Add your message here"
5. Push to your branch  
   git push origin feature/your-feature-name
6. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🔗 GitHub Repository

https://github.com/ethyne2666/Price-Tracker-AI-.git

---

## ❤️ Credits

Built with ❤️ using Next.js, Supabase, Firecrawl, Tailwind CSS, and AI  
By **NullLogic / ethyne2666** / **charakumar**

⭐ If you like this project, don’t forget to star the repository!