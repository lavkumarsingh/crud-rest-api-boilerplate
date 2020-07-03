
const express = require('express');
const Post = require('../model/Post');
const router = express.Router();

// ADD DATA
router.post('/', async (req,res) => {
    console.log(req.body);
    
    const post = new Post({ 
        title: req.body.title,
        description: req.body.description
    });

    try{ 
    const postSaved = await post.save()
      res.json(postSaved);
    }catch(err) {
        res.json({ message: err });
    }
});

// FETCH ALL DATA
router.get('/', async (req,res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch(err) {
        res.json({ message: err});
    }
});

// FETCH SPECIFIC DATA
router.get('/:id', async(req, res) => {
    
    try { 
    const post = await Post.findById(req.params.id);
    res.json(post);
    }catch(err) {
        req.json({ message: err });
    }
});

// DELETE SPECIFIC DATA
router.delete('/:id', async(req,res) => {

    try { 
    const removePost = await Post.deleteOne({ _id: req.params.id });
    res.json(removePost);
    }catch(err) {
        res.json({ message: err });
    }
});

router.patch('/:id', async(req,res) => {

    try {   
    const editPost = await Post.updateOne({ _id: req.params.id }, { $set: { title: req.body.title }});
    res.json(editPost);
    }catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;  