# Go-Rent - Vacation Rental Platform

**Go-Rent** is a modern vacation rental platform built with **Next.js** and **TypeScript**. It leverages powerful tools and libraries like AWS Amplify, Radix UI, Redux Toolkit, and Mapbox to deliver a fully functional, responsive web application.

---

## 🚀 Features

- **Next.js ⚡**: A powerful React framework for server-side rendering (SSR) and static site generation (SSG).
- **TypeScript 🛡️**: Static typing for better code reliability and developer experience.
- **Tailwind CSS 🎨**: A utility-first CSS framework for efficient styling.
- **Framer Motion 🎬**: Smooth animations for an enhanced user experience.
- **Shadcn UI 🔧**: A library for accessible and customizable UI components.
- **AWS Amplify ☁️**: Backend management for authentication, APIs, and data storage.
- **Redux Toolkit 📦**: State management for large-scale React applications.
- **FilePond 📂**: File upload with support for image previews and orientation fixes.
- **Mapbox GL 🌍**: Interactive and customizable maps for location-based services.
- **Zod ✅**: Type-safe schema validation for inputs.

---

## 🔑 Authentication & Registration

- **AWS Amplify Auth**: Simplified authentication with support for social logins (e.g., Google, GitHub, Facebook).
- **Email Verification**: Users receive a confirmation email after registration.

---

## 🗂️ Database & Hosting

- **AWS Amplify**: Provides backend services like authentication, storage, and APIs.
- **Deployment**: Easily deployable on platforms like **Vercel** or **AWS Amplify**.

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/KDF25/nextjs-go-rent.git
```

### 2. Navigate to the Project Folder

```bash
cd client
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```properties

NEXT_PUBLIC_API_BASE_URL= 
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID= 
NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID= 
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN= 
NEXT_PUBLIC_MAPBOX_STYLES= 
```

---

## 🚀 Running the Project

### Development Mode

To start the development server:

```bash
npm run dev
```

The application will be available at: [http://localhost:3000](http://localhost:3000)

### Production Mode

To build and start the production server:

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

---

## 📂 Project Structure

- **`src/entities` 🏗️**: Business logic entities.
- **`src/features` ⚡**: Isolated business functionality modules.
- **`src/shared` 🛠️**: Common modules used across the app.
- **`src/widgets` 💡**: Modular components for building feature-rich UI.

---

## 📦 Scripts

- `npm run dev 🚀`: Start the development server.
- `npm run build 🏗️`: Build the application for production.
- `npm run start 🌐`: Start the production server.
- `npm run lint 🔍`: Run ESLint to check code quality.
- `npm run format 🧹`: Format code using Prettier.

---

## 📚 Dependencies

### Core Technologies

- **Next.js ⚡**: React framework for SSR and static generation.
- **React ⚛️**: UI library for building interactive applications.
- **TypeScript 🛡️**: Type-safe JavaScript.

### Database & Backend

- **AWS Amplify**: Modern backend as a service for easy authentication and data storage.

### UI & Styling

- **Tailwind CSS 🎨**: Utility-first CSS framework.
- **Framer Motion 🎬**: Motion animations.
- **Shadcn UI 🔧**: Accessible UI components.

### Forms & Data Validation

- **React Hook Form 📋**: Form management.
- **Zod ✅**: Schema validation.

### State Management

- **Redux Toolkit 📦**: State management for large applications.

### File Upload

- **FilePond 📂**: File upload with image previews and orientation fixes.

### Map Integration

- **Mapbox GL 🌍**: Interactive map library for location-based services.

### Other Utilities

- **Lucide React 🎨**: Icon library.
- **Clsx 🔤**: Utility for conditionally joining class names.

---

## 🌐 Deployment

### Deployment on Vercel:

1. Go to [Vercel](https://vercel.com).
2. Create a new project and connect your GitHub repository.
3. Set up environment variables.
4. Click **Deploy**.

### Deployment on AWS Amplify:

1. Go to [AWS Amplify Console](https://aws.amazon.com/amplify/).
2. Create a new app and connect your GitHub repository.
3. Set up environment variables.
4. Click **Save and Deploy**.

---

© 2025 Go-Rent. All rights reserved.