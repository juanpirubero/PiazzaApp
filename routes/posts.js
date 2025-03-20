const express = require('express')
const router = express.Router()

const Post = require('../models/Post')
const verify = require('../verifyToken')

// POST (Create data)
router.post('/', verify, async (req, res) => {
    // console.log(req.body)
    const postData = new Post({
        title: req.body.title,
        description: req.body.description,
        likes: req.body.likes,
        createdBy: req.user._id
    })

    // Try to insert...
    try {
        const postToSave = await postData.save()
        res.send(postToSave)
    } catch (err) {
        res.send({ message: err })
    }
})

// GET 1 (Read all)
router.get('/', async (req, res) => {
    try {
        const getPosts = await Post.find().limit(10)
        res.send(getPosts)
    } catch (err) {
        res.send({ message: err })
    }
})

// GET 2 (Read by ID)
router.get('/:postId', async (req, res) => {
    try {
        const getPostById = await Post.findById(req.params.postId)
        res.send(getPostById)
    } catch (err) {
        res.send({ message: err })
    }
})

// PATCH (Update)
router.put('/:postId', verify, async (req, res) => {
    try {
        const updatePostById = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    likes: req.body.likes,
                    createdBy: req.user._id
                }
            }
        )
        res.send(updatePostById)
    } catch (err) {
        res.send({ message: err })
    }
})

// DELETE (Delete)
router.delete('/:postId', verify, async (req, res) => {
    try {
        const deletePostById = await Post.deleteOne({ _id: req.params.postId })
        res.send(deletePostById)
    } catch (err) {
        res.send({ message: err })
    }
})

module.exports = router
