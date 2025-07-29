//ANALOGÍA: El que enciende la panadería prende las luces y abre el local.-Solo inicia el servidor.

const app = require('./src/app') //Importamos la configuración de express, de donde se dice como esta configurado
const PORT = 3000 //Decimos cual es el puerto en donde se ejecutara el servidor DIRECCION DE LA PANADERIA

/*app.listen enciende la panadería y empieza a escuchar las solicitudes (como pedidos de clientes).
El console.log solo muestra un mensaje para que tú sepas que todo está funcionando.
 Analogía: Esto es como abrir el local, encender el horno, y poner el letrero “¡Estamos abiertos!”.*/
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});