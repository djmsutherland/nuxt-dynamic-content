const { Router } = require('express')

const Content = require('../models/content')

const router = new Router()

router.post('/contents', (req, res) => {
  Content
    .create(req.body)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

router.get('/contents/:tag', (req, res) => {
  Content
    .findOne({ tags: { $all: [req.params.tag] } })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

router.get('/contents', (req, res) => {
  Content
    .find({})
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

module.exports = router
