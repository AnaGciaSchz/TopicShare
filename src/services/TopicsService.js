const TopicsRepository = require('../repository/TopicsRepository');   
const Topic = require('../models/Topic');

class TopicsService {
    constructor() {
        this.topicsRepository = new TopicsRepository();
        this.currentId="";
    }
    
    async getAll() {
        return await this.topicsRepository.getAll();
    }
    
    async create({ content, sources, hashtags }) {
        const topic = new Topic(null, content, sources, hashtags );
        return await this.topicsRepository.create(topic);
    }
    
    async deleteById(id) {
        this.topicExists(id);
        return await this.topicsRepository.deleteById(id);
    }

    async getById(id) {
        this.topicExists(id);
        return await this.topicsRepository.getById(id);
    }
    async updateById(id, { content, sources, hashtags }) {
        this.topicExists(id);
        const topic=new Topic(null, content, sources, hashtags);
        return await this.topicsRepository.updateById(id, topic);
    }
    async getRandomTopic() {
        const ids = await this.topicsRepository.getIds();
        const index = Math.floor(Math.random() * ids.length);
        const randomId = ids[index];
        while (randomId === this.currentId) {
            randomId = ids[Math.floor(Math.random() * ids.length)];
        } 
        this.currentId= randomId;
        return await this.topicsRepository.getById(randomId);
    }

    async topicExists(id) {
        if (!await this.topicsRepository.getById(id)) {
            throw new TopicNotExist(`Topic with id ${id} does not exist`);
        }
    }
}

module.exports = TopicsService;