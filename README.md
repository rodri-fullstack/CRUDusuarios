# 👥 CRUD Usuarios – Versión 4 con JSON Server

Esta versión implementa un sistema de gestión de usuarios completo con persistencia real gracias a `json-server`. Permite **crear, editar, eliminar y visualizar usuarios**, almacenando los datos en un archivo `users.json`, simulando así un backend RESTful funcional.

---

## 🚀 Funcionalidades Nuevas

### ✅ Persistencia en JSON Server
- Datos almacenados en `data/users.json`
- Operaciones CRUD mediante endpoints REST (`GET`, `POST`, `PUT`, `DELETE`)

### ✅ Identificación por ID
- Cada usuario tiene un campo `id` único, autogenerado por `json-server`

### ✅ Integración híbrida
- `api.js`: Consume API externa RandomUser para autocompletar formularios
- `scripts.js`: Gestiona el CRUD real con `http://localhost:3000/users`

---

## 🧩 Requisitos

- Tener instalado [Node.js](https://nodejs.org/)
- Instalar `json-server` globalmente:

```bash
npm install -g json-server
