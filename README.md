# 🧠 ExamApp — Online Examination Platform

A modern and scalable **online examination system** built with **Next.js 14**, featuring secure authentication, multilingual support, dynamic exams, and a sleek, responsive UI using **Tailwind CSS** and **Radix UI**.

---

## 🚀 Features

- 👤 **Authentication & Authorization**
  - Secure login and registration using **NextAuth**
  - Role-based access control for students and admins

- 📝 **Exam Management**
  - Create, manage, and take exams with multiple question types
  - Real-time progress tracking and submission handling

- 🌍 **Internationalization**
  - Multi-language support via **Next-Intl**

- 🎨 **Modern UI/UX**
  - Built with **Radix UI**, **Tailwind CSS**, and **Lucide Icons**
  - Theme support (light/dark mode via `next-themes`)

- ⚡ **Data Fetching & Caching**
  - **React Query** for efficient API communication

- 🧾 **Form Handling & Validation**
  - Powered by **React Hook Form** + **Zod**

- 🔔 **Notifications**
  - Instant feedback using **React Hot Toast** and **Sonner**

---

## 🛠️ Tech Stack

| Category | Libraries / Frameworks |
|-----------|------------------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **UI** | Tailwind CSS, Radix UI |
| **State / Data** | React Query |
| **Forms** | React Hook Form, Zod |
| **Auth** | NextAuth.js |
| **Internationalization** | Next-Intl |
| **Icons & Components** | Lucide React, Radix Primitives |
| **Linting / Formatting** | ESLint, Prettier, Tailwind Plugin |

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mo7med3li/ExamApp.git cd ExamApp

   
2- **Install dependencies**

yarn install


3-**Run the development server**

yarn dev


**📁 Folder Structure**

src/
 ├── app/              # Next.js App Router (routes, layouts)
 ├── components/       # Reusable UI components
 ├── features/         # Exam, Auth, and Dashboard modules
 ├── hooks/            # Custom React hooks
 ├── lib/              # Utilities, API clients, constants
 ├── styles/           # Tailwind styles and globals
 ├── types/            # TypeScript interfaces
 └── utils/            # Validation and helpers


**🧩 Scripts**


| Command      | Description                  |
| ------------ | ---------------------------- |
| `yarn dev`   | Start the development server |
| `yarn build` | Build for production         |
| `yarn start` | Start the production server  |
| `yarn lint`  | Run ESLint checks            |


**🤝 Contributing**

Contributions, issues, and feature requests are welcome!
Feel free to open a PR or create an issue.

**🧑‍💻 Author**

Mohamed Ali
Frontend Engineer — React & Next.js Developer
