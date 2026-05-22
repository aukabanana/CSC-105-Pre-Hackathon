# Devices Near Barn

DevicesNearBarn is a full-stack web application with responsive web design.  
The project supports admin IoT devices manager dashboard

---

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Axios
- Tailwind CSS
- Font Awesome

### Backend

- Node.js
- Express.js
- TypeScript
- Zod validation
- CORS
- Morgan
- Prisma ORM
- Multer for image upload
- Cookie-based authentication
- Cookie Parser

  
### Database

- SQLite
- Prisma ORM

---

## Installation & Run Project

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create an environment file:

```bash
cp .env.example .env
```

Example `.env` file:

```env
DATABASE_URL="file:./dev.db"
PORT=3000
CORS_ORIGIN="http://localhost:5173"
JWT_SECRET="your-secret-here"
```

Create the upload folder (if upload/img doesn't exist):
```
mkdir -p uploads/img
```

Generate Prisma client:

```bash
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
```

The backend server should run at:

```txt
http://localhost:3000
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

The frontend should run at:

```txt
http://localhost:5173
```

---

### 4. Database view with Prisma Studio

Launch Prisma Studio :

```bash
cd backend
npx prisma studio
```

This will open a web interface at.
```bash
http://localhost:51212
```
You'll see your Menu, Restaurant and Admin table listed on the left.


---

## Notes:
- Do not commit `node_modules`
- Do not commit `.env`
- Commit uploaded user images is available
- Uploaded images should be stored as file paths, not BLOBs
