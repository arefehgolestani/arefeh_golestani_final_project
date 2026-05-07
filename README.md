#🧭 Torino Travel App

This project is a tour reservation web application built as a practice project using **Next.js 14**.

It was developed to explore modern frontend concepts such as **OTP-based authentication**, **secure token handling**, and **client-server interaction** in a real-world scenario.

In this application, users can log in using a **one-time password (OTP)** instead of a traditional password.

Authentication is managed through **Access Token** and **Refresh Token**, both stored securely in **HTTP-only cookies**.

The project focuses on creating a smooth and practical booking experience — from browsing tours to submitting reservations — while following a structured and scalable architecture.

---

## 🚀 Demo

![torino-demo-image](https://s8.uupload.ir/files/torino_gkya.png)

---

## ✨ Features

- User authentication with **OTP login**
- Secure token management using **HTTP-only cookies**
- Protected tour booking with **Access Token**
- Session persistence using **Refresh Token**
- Clean and responsive user interface
- API communication with **Axios**
- Server state management using **TanStack React Query**
- Reusable and modular component structure
- Success and error notifications
- Persian date handling with **Zaman**
- Organized project architecture for better scalability and maintainability

---

## 🛠 Technologies Used

- React.js
- Next.js
- JavaScript (ES6+)
- CSS Modules
- React Hook Form
- tanstack/react-query
- Yup
- Context API
- Axios
- React Icons
- React loader spinner
- React otp input
- React toastify
- Swiper
- Zaman
- Uuid

---

## 📦 Installation & Setup

#### 1. Clone the repository

```bash
git clone <your-repo-url>
```

#### 2. Install packages

```bash
npm install
```

#### 3. Run the project

```bash
npm run dev
```

---

## 📁 Folder Structure

src/
├── app/
│ ├── about/  
│ ├── api/  
│ ├── basket/  
│ ├── contactUs/  
│ ├── profile/  
│ ├── tour/  
│ ├── tourServices/  
│ └── layout.tsx  
│
├── assets/  
├── components/
│ ├── elements/  
│ ├── layout/  
│ ├── modules/  
│ ├── partials/
│ └── templates/
│
├── context/  
├── services/  
├── utils/
