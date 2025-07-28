const express = require ('express');
// import express from "express"; esta linea es la mas actual, pero render ocupa el de arriba para servidores, este puede servir para nubes, esto es para desplegarla en render
const app = express(); //Esta es una aplicacion de desarrollo orientada a un servicio
const PORT = 3000; //Se le tiene que asignar un puerto, para que no los comparta con front o con base de datos. Comunmente (700-front) (3030 o 3000 base de datos) (500 para back)

//Middleware, es como un intermediario para leer archivos JSON.

app.use(express.json());

//Dato simulado
const posts =[
    {id:1, title:"primer post"},
    {id:2, title:"segundo post"}
]

//Mi primer endpoint para traer posts: el '/posts'-Es la terminacion ()-Es la llamada a una funcion
app.get('/posts',(req,res)=>{
    res.json(posts)
});

//Mi segundo endpoint para guardar un nuevo post
app.post('/posts', (req,res)=>{
    const nuevoPost = req.body;
    console.log('Nuevo post recibido:',nuevoPost);
    posts.push(nuevoPost);
    res.json({message: 'Post agregado correctamente', data: nuevoPost})
});
//Mi tercer endpoint para borrar el último post
app.delete('/posts', (req, res)=>{
    const postEliminado = posts.pop();
    console.log('Post eliminado', postEliminado);
    res.json({message: 'Se elimino el último post', data: posts})
});

//Se pone en modo escucha
app.listen(PORT, () =>{
    console.log(`Nuestro server esta vivo!! y corriento en http://localhost:${PORT}`)
})

