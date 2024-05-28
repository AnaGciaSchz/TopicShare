const express = require('express');
const router = express.Router();
const TopicsController = require('../controllers/TopicsController');

const topicsController = new TopicsController();

router.get('/topics', topicsController.getAll);
router.post('/topics', topicsController.create);
router.get('/topics/random', topicsController.getRandomTopic);
router.delete('/topics/:id', topicsController.deleteById);
router.get('/topics/:id', topicsController.getById);
router.put('/topics/:id', topicsController.updateById);

module.exports = router;
