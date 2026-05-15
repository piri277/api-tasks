# API REST de Gestión de Tareas - Express 5 & Supabase

Proyecto desarrollado para el taller de Ingeniería de Software. Una API profesional con TypeScript, autenticación JWT y PostgreSQL.

## 🚀 Tecnologías
- **Node.js 20** & **Express 5**
- **TypeScript** (Strict mode)
- **Supabase** (PostgreSQL & Auth)
- **Zod** (Validación de esquemas)
- **Docker** (Multistage build)

## 🛠️ Instalación local
1. Clonar el repo.
2. Ejecutar `npm install`.
3. Crear un archivo `.env` basado en `.env.example`.
4. Ejecutar `npm run dev`.

## 🛣️ Endpoints principales
- `POST /api/v1/auth/register` - Registro
- `POST /api/v1/auth/login` - Login
- `GET /api/v1/tasks` - Listar tareas (Requiere Auth)