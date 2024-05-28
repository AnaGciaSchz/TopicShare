class InvalidTopicException extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidTopicException';
    }
}
module.exports = InvalidTopicException;