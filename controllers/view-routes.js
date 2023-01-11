const router = require('express').Router()
const { json } = require('body-parser')
const { Blogs, User, Comments } = require('../models')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blogs.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'], 
                },
            ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }))
        res.render('home', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/blogs/:id', async (req, res) => {
    try {
        const blogData = await Blogs.findByPk(req.params.id, {
        include: [
            {
            model: User,
            },
            {
            model: Comments,
            }
        ],
    }); 

    console.log('blogData', blogData)
        const blogs = blogData.get({ plain: true});
        console.log('blogFlag', blogs)
        res.render('blog', {
            ...blogs,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err)
    }
});

// router.get('/comments/:id', async (req, res) => {
//     try {
//         const commentData = await Blogs.findByPk(req.params.id, {
//         include: [
//             {
//             model: Comment,
//             },
//         ],
//     }); 

//         const comments = commentData.get({ plain: true});

//         res.render('comment', {
//             ...comments,
//             logged_in: req.session.logged_in
//         });
//     } catch(err) {
//         res.status(500).json(err)
//     }
// });

router.get('/profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{ model: Blogs}]
        }); 

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
    res.redirect('/profile');
    return;
    }

    res.render('login');
})

router.get('/logout', (req, res) => {
 
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.render('home')
        });
      } else {
        res.status(404).end();
      }
})

module.exports = router