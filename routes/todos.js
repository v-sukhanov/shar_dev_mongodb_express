const { Router } = require('express')
const router = Router()
const Todo = require('../models/Todo')

router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    res.render('index', {
        title: 'Todos list',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const todo = new Todo({
        name: req.body.name
    })

    await todo.save();
    res.redirect('/')
})

router.post('/complete', async (req, res) => {
    console.log(req.body)
    const todo = await Todo.findById(req.body.id)

    todo.completed = !!req.body.completed
    await todo.save()

    res.redirect('/')
})


module.exports = router;