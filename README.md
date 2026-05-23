# Prehack Project SIT CS 2026

## Project name : Devices Near Barn

### About

DevicesNearBarn is a full-stack web application with responsive web design.  
The project supports admin IoT devices manager dashboard

## Members & Features

| Members | Features |
| :-- | :------------------------- |
| Theetouch Chayanun 68130500815 | `Electricity Cost Calculation` |
| Navipin Hongpitakkul 68130500818 | `Smart Home Dashboard` `Devices manangement and control ` |
| Ratchapol Toopthong 68130500822 | `Notification and alert system` |

---

## List of Features

- Smart Home Dashboard
- Devices management and control
- Electricity cost calculation
- Notification and alert system

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
- Cookie-based authentication
- Cookie Parser

  
### Database

- SQLite
- Prisma ORM

---

## APIs

| api end point | description |
| :-- | :------------------------- |
|  | `` |
|  | `` |
|  | `` |


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
touch .env
```

Example `.env` file:

```env
PORT=3000
CORS_ORIGIN=http://localhost:5173
DATABASE_URL="file:./dev.db"
JWT_SECRET=your_secret_key_here
```

Generate Prisma client:

```bash
npx prisma mirgrate dec
npx prisma generate
npm run dev
```
---

### 3. Database view with Prisma Studio

Launch Prisma Studio :

```bash
cd backend
npx prisma studio
```

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Admin Auth
```text
username: 
password: 
```

---

## Notes:
- Do not commit `node_modules`
- Do not commit `.env`
