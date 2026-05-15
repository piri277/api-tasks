# # 🚀 API REST de Gestión de Tareas (api-tasks)

Este proyecto es una API profesional desarrollada para el taller de Ingeniería de Software. Implementa un sistema de gestión de tareas con arquitectura limpia, seguridad avanzada y despliegue automatizado.

## 🔗 Enlaces del Proyecto
- **Producción (Render):** [https://api-tasks-j9kb.onrender.com](https://api-tasks-j9kb.onrender.com)
- **Estado del Servidor:** [https://api-tasks-j9kb.onrender.com/health](https://api-tasks-j9kb.onrender.com/health)

## 🛠️ Tecnologías Utilizadas
- **Lenguaje:** TypeScript (Strict Mode)
- **Runtime:** Node.js 22 (LTS)
- **Framework:** Express 5 (Beta)
- **Base de Datos:** PostgreSQL (vía Supabase)
- **Autenticación:** JWT (JSON Web Tokens)
- **Validación:** Zod
- **Infraestructura:** Docker (Multistage Build)
- **Seguridad:** Helmet, CORS, Rate Limiting y Auth Middleware.

## 🏗️ Arquitectura y Estructura
El proyecto sigue un patrón de diseño por capas para facilitar el mantenimiento:
- `/src/controllers`: Manejo de peticiones y respuestas.
- `/src/services`: Lógica de negocio e interacción con Supabase.
- `/src/middleware`: Seguridad y validaciones.
- `/src/routes`: Definición de endpoints.
- `/src/config`: Configuraciones de entorno y base de datos.

## 🛣️ API Endpoints

### Autenticación
- `POST /api/v1/auth/register` - Registro de nuevos usuarios.
- `POST /api/v1/auth/login` - Inicio de sesión y obtención de token.

### Tareas (Protegidas por JWT)
- `GET /api/v1/tasks` - Listar todas las tareas del usuario.
- `POST /api/v1/tasks` - Crear una nueva tarea.
- `PUT /api/v1/tasks/:id` - Actualizar una tarea existente.
- `DELETE /api/v1/tasks/:id` - Eliminar una tarea.

## 🚀 Instalación y Uso Local
1. Clonar el repositorio.
2. Instalar dependencias: `npm install`.
3. Configurar el archivo `.env` (basado en `.env.example`).
4. Correr en modo desarrollo: `npm run dev`.
5. Compilar para producción: `npm run build`.

## 📦 Docker
El proyecto incluye un `Dockerfile` optimizado para producción que utiliza un proceso de construcción en múltiples etapas (multistage) para reducir el tamaño de la imagen final y mejorar la seguridad.

---
Desarrollado por **David** - 2026
