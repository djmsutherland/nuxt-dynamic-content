const { Router } = require('express')

const Tag = require('../models/tag')

const router = new Router()

router.post('/tags', (req, res) => {
  Tag
    .create(req.body)
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

router.get('/tags', (req, res) => {
  Tag
    .find({})
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
})

module.exports = router
