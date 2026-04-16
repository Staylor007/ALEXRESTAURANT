# Delivery App - Sistema de Entrega a Domicilio

Sistema completo de delivery con soporte para usuarios, repartidores y administradores. Construido con tecnologías modernas y escalables.

## 📋 Estructura del Proyecto

```
delivery-app/
├── apps/
│   ├── users-app/          # App para clientes/usuarios
│   ├── admin-app/          # Panel de administración
│   └── delivery-app/       # App para repartidores
├── packages/
│   ├── api/                # Backend API compartida
│   └── shared/             # Utilidades y tipos compartidos
└── docs/                   # Documentación
```

## 🚀 Quick Start

### Requisitos previos
- Node.js 18+
- npm 9+ o yarn

### Instalación

1. Clonar el repositorio
```bash
git clone <repository-url>
cd delivery-app
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
```bash
cp .env.example .env.local
```

4. Ejecutar en modo desarrollo
```bash
npm run dev
```

Las aplicaciones estarán disponibles en:
- **Users App**: http://localhost:3000
- **Admin App**: http://localhost:3001
- **Delivery App**: http://localhost:3002
- **API**: http://localhost:3003

## 📱 Aplicaciones

### Users App
Aplicación para usuarios finales donde pueden:
- Registrarse e iniciar sesión
- Explorar restaurantes
- Ver menús
- Realizar pedidos
- Rastrear entregas en tiempo real
- Calificar y comentar

### Admin App
Panel de administración para:
- Gestionar restaurantes
- Ver estadísticas
- Gestionar pedidos
- Gestionar usuarios y repartidores
- Configurar comisiones y precios

### Delivery App
Aplicación para repartidores:
- Ver pedidos disponibles
- Aceptar/rechazar entregas
- Rastreo GPS en tiempo real
- Historial de entregas
- Ganancias y estadísticas

## 🛠️ Tech Stack

- **Frontend**: React, Next.js, TypeScript
- **Backend**: Node.js, Express
- **Base de datos**: MongoDB
- **Autenticación**: JWT
- **Pagos**: Stripe
- **Tiempo real**: Socket.io
- **Gestión de estado**: Redux Toolkit

## 📦 Scripts Disponibles

```bash
npm run dev      # Ejecutar en desarrollo
npm run build    # Compilar para producción
npm start        # Ejecutar en producción
npm test         # Ejecutar pruebas
```

## 🔐 Seguridad

- Autenticación JWT
- HTTPS recomendado en producción
- Validación de datos en frontend y backend
- Protección contra CSRF
- Rate limiting en API

## 📝 Licencia

MIT

## 👥 Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📞 Soporte

Para soporte, contáctanos a: support@deliveryapp.com
