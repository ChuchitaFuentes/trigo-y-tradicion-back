const {post, request} =require('../app');
const Post = require('../models/post.model');

//Obtener todos los posts (GET)
exports.getAllPost = async(req, res) =>{
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.status(500).json({message: 'Error al obtener todos los los posts', error: err.message})
    }
}
//Crear Post 
exports.createPost = async(req,res) =>{
    const post = new Post (req.body)
        await post.save();
    return res.status(201).json(post);
}

//Obtiene post por id
exports.getPostById = async (req,res) =>{
    try {
        const post = await Post.findById(req.params.id)
        if (post) return res.json(post);
        return res.status(401).json({message:'Producto no encontrado'})
    } catch (err) {
        return res.status(500).json({message:'Error al obtener el producto', error:err.message})
    }
    
}

//Actualiza datos de post por id
exports.updatePost = async(req,res)=>{
    const updated =await Post.findByIdAndUpdate(req.params.id, req.body,{new:true});
    return res.json(updated);
}

//Elimina un post por id
exports.deletePost = async(req, res) =>{
     const deleted =await Post.findByIdAndDelete(req.params.id);
    return res.json(deleted);
}
