const express = require('express');

const router = express.Router();

const AuthorController = require('../controllers/AuthorController');

router.get('/', AuthorController.read);
router.get('/:id', AuthorController.readById);
router.post('/', AuthorController.create);

module.exports = router;