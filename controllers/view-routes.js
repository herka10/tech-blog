const router = require('express').Router()
const { json } = require('body-parser')
const { Blog, User} = require('../models')

router.get('/', async (req, res) => {
    try {
        let blog = await Blog.findAll()
        blog = blog.map(blog => blog.get({ plain: true }))
        res.render('home', {blog})
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/blog/:id', async (req, res) => {
    try {
        let blog = await Blog.findByPk(req.params.id)
        blog = blog.get({ plain: true })
        res.render('blog', {blog})
    } catch(err) {
        res.status(500).json(err)
    }
})

module.exports = router