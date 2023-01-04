const router = require('express').Router()
const { json } = require('body-parser')
const { Blogs, User} = require('../models')

router.get('/', async (req, res) => {
    try {
        console.log('login:', req.session.logged_in)
        let blogs = await Blogs.findAll()
        blogs = blogs.map(blogs => blogs.get({ plain: true }))
        res.render('home', {
            blogs,
            logged_in: req.session.logged_in})
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/blogs/:id', async (req, res) => {
    try {
        let blogs = await Blogs.findByPk(req.params.id)
        blogs = blogs.get({ plain: true })
        res.render('blogs', {
            blogs,
            logged_in: req.session.logged_in})
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/logout', (req, res) => {
 
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.render('logout')
        });
      } else {
        res.status(404).end();
      }
})

module.exports = router