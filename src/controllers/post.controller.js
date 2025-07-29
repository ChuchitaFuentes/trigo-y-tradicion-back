/*Un controlador:
Es una capa o archivo donde defines las funciones que responden a las peticiones HTTP (GET, POST, PUT, DELETE).
Se encargan de la lógica: obtener datos, crear nuevos, actualizar, borrar, validar.
Reciben req (request) y res (response) y envían respuestas al cliente.*/
let posts = require('../models/post.model');

//Obtener todos los posts (GET)
exports.getAllPost = (req, res) =>{
    res.json(posts)
}

//Obtiene post por id
exports.getPostById = (req,res) =>{
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).json({error: 'Post no encontrado'});
    res.json(post);
}

//Crear Post 
exports.createPost = (req,res) =>{
    const newPost = {
        id: Date.now(),
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        categoria:req.body.categoria
    };
    posts.push(newPost);
    return res.status(201).json(newPost);
}

//Actualiza datos de post por id
exports.updatePost =(req,res)=>{
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return res.status(404).json({error: 'Post no encontrado'});

    posts[index] = {
        ...posts[index], 
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        categoria:req.body.categoria
    };
    return res.json(posts[index]);
}

//Elimina un post por id
exports.deletePost =(req, res) =>{
    const id = parseInt(req.params.id);
    const inicial = posts.length;
    posts = posts.filter(p => p.id !== id)
    if(posts.length === inicial) return res.status(404).json({error: 'Post no encontrado'});
    //Actualizar el modulo donde esta nuestro arreglo de post
    require('../models/post.model').splice(0,require('../models/post.model').length, ...posts);
    return res.status(204).end()
}
