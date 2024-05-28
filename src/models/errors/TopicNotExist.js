class TopicNotExist extends Error {
    constructor(message) {
        super(message);
        this.name = 'TopicNotExist';
    }
}

module.exports = TopicNotExist;