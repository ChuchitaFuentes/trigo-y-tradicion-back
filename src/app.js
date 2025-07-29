//ANALOGÍA: El que configura todo lo de adentro (recepcionista, menú, panadero, recetas)-Configura el servidor (rutas, middlewares, DB, etc.).

/*Estamos trayendo la herramienta principal que usaremos para construir el servidor web. Express nos da funciones para manejar rutas, peticiones y respuestas.*/
const express = require('express');
//El encargado de que otras aplicaciones se conecten
const cors =require('cors');
const connectDB =require('./config/db')

// Importamos las rutas relacionadas con publicaciones
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/auth.routes')

// Creamos la aplicación de Express, estás creando un objeto app que contiene todas las funciones necesarias para crear un servidor web, es como cuando creabamos un objeto.
const app = express();
connectDB();
app.use(cors()); //Permite que otros desarrollo se conecten con este servidor
/* Middleware para poder leer el cuerpo de las peticiones en formato JSON, Middleware que convierte el body en un objeto JavaScript
Un middleware es una función que intercepta las solicitudes antes de que lleguen a su destino. Puede hacer cosas como:
Revisar si el cliente está autorizado.
Leer lo que el cliente envió.
Mostrar un mensaje en consola.
Modificar la información antes de que llegue al final.*/
app.use(express.json());

// Usamos las rutas de publicaciones bajo el path /posts, Le dice a Express que use un archivo de rutas bajo una URL
// Todas las rutas definidas en postRoutes se ejecutarán con el prefijo /posts
app.use('/posts', postRoutes); //rutas para publicaciones http://localhost:3000/posts
app.use('/user', userRoutes); //rutas para publicaciones http://localhost:8085/user
// Exportamos la aplicación configurada para usarla en index.js
module.exports = app;