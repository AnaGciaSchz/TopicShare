const TopicsService = require('../services/TopicsService');
const InvalidTopicContent = require('../models/errors/InvalidTopicException');
const TopicNotExist = require('../models/errors/TopicNotExist');

class TopicsController {
    constructor() {
        this.topicsService = new TopicsService();

        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
        this.deleteById = this.deleteById.bind(this);
        this.getById = this.getById.bind(this);
        this.updateById = this.updateById.bind(this);
        this.getRandomTopic = this.getRandomTopic.bind(this);
    }

    async getAll(req, res) {
        try {
            const topics = await this.topicsService.getAll();
            res.json(topics);
        } catch (err) {
            console.error('Error getting all topics:', err.stack);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async create(req, res) {
        const { content, sources, hashtags } = req.body;
        try {
            const topic = await this.topicsService.create({ content, sources, hashtags });
            res.status(201).json(topic);
        } catch (err) {
            if (err instanceof InvalidTopicContent) {
                res.status(400).json({ error: err.message });
            } else {
                console.error('Error creating topic:', err.stack);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }

    async deleteById(req, res) {
        const id = req.params.id;
        try {
            const topic = await this.topicsService.deleteById(id);
            res.status(204)
            res.json(topic);
        } catch (err) {
            if (err instanceof TopicNotExist) {
                res.status(404).json({ error: err.message });
            } else {
                console.error('Error deleting topic:', err.stack);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }

    async getById(req, res) {
        const id = req.params.id;
        try {
            const topic = await this.topicsService.getById(id);
            res.json(topic);
        } catch (err) {
            if (err instanceof TopicNotExist) {
                res.status(404).json({ error: err.message });
            } else {
                console.error('Error getting topic:', err.stack);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }

    async updateById(req, res) {
        const id = req.params.id;
        const { content, sources, hashtags } = req.body;
        try {
            const topic = await this.topicsService.updateById(id, { content, sources, hashtags });
            res.json(topic);
        } catch (err) {
            if (err instanceof InvalidTopicContent) {
                res.status(400).json({ error: err.message });
            } else if (err instanceof TopicNotExist) {
                res.status(404).json({ error: err.message });
            } else {
                console.error('Error updating topic:', err.stack);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        }
    }

    async getRandomTopic(req, res) {
        try {
            const topic = await this.topicsService.getRandomTopic();
            res.json(topic);
        } catch (err) {
            console.error('Error getting random topic:', err.stack);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = TopicsController;
