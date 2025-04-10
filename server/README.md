# Go-Rent Backend

**Go-Rent** is the backend service for a vacation rental platform, designed with scalability, modularity, and maintainability in mind. The service is built with **Node.js**, **TypeScript**, and **Prisma ORM** to handle the core functionality for managing tenants, managers, properties, leases, applications, and payments.

---

## 🚀 Features

- **Modular Design**: Each domain (e.g., tenants, managers, properties) is encapsulated into its own module, promoting separation of concerns and easier maintainability.
- **JWT Authentication**: Secure, token-based authentication for users.
- **Prisma ORM**: Easy database access and migrations with Prisma.
- **Data Seeding**: Pre-defined data for seeding during development or testing.
- **RESTful API**: Clean API design with routes for each resource.
- **File Uploads**: Support for uploading files such as property images.

---

## 🛠️ Principles

1. **Modular Design**: Separation of concerns for better maintainability.
2. **Database with Prisma ORM**: Simplified database access and schema management.
3. **RESTful API**: Clean and consistent API design.
4. **Authentication and Authorization**: Secure access to resources using JWT.
5. **File Uploads**: Efficient handling of file uploads using AWS S3.

---

## 🛠️ Setup

### 1. Clone the Repository

```bash
git clone https://github.com/KDF25/nextjs-go-rent.git
cd server
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root of the project with the following variables:

```properties
PORT=3001
DATABASE_URL=postgresql://your-database-url
NOMINATIM_USER_AGENT="your-email@example.com"
```

- **`PORT`**: The port on which the server will run (default: 3001).
- **`DATABASE_URL`**: The connection string for your PostgreSQL database (e.g., from Supabase or any other provider).
- **`NOMINATIM_USER_AGENT`**: The user agent for Nominatim API requests (used for geolocation).

### 4. Run Prisma Migrations

First, generate the Prisma client:

```bash
npm run prisma:generate
```

Then, apply migrations:

```bash
npx prisma migrate dev
```

### 5. Seed the Database (Optional)

To populate the database with sample data for development, run:

```bash
npm run seed
```

### 6. Run the Development Server

Start the server in development mode:

```bash
npm run dev
```

The server will run on [http://localhost:3001](http://localhost:3001).

---

## 📂 Project Structure

```
server/
├── prisma/
│   ├── seed.ts
│   ├── schema.prisma
│   └── seedData/
├── src/
│   ├── constants/
│   ├── middlewares/
│   ├── modules/
│   │   ├── application/
│   │   ├── lease/
│   │   ├── manager/
│   │   ├── property/
│   │   └── tenant/
│   └── index.ts
├── package.json
└── tsconfig.json
```

---

## 📦 Scripts

- `npm run dev`: 🚀 Start the development server.
- `npm run build`: 🏗️ Build the application for production.
- `npm run start`: 🌐 Start the production server.
- `npm run prisma:generate`: 🔄 Generate the Prisma client.
- `npm run prisma:migrate`: 📜 Apply database migrations.
- `npm run seed`: 🌱 Seed the database with sample data.

---

## 🌐 Deployment

### Deployment on Vercel or AWS

1. Set up the environment variables in your hosting platform.
2. Build the project:
   ```bash
   npm run build
   ```
3. Deploy the `dist` folder along with the `.env` file.

---

© 2025 Go-Rent. All rights reserved.