const InvalidTopicException = require ('./errors/InvalidTopicException');

class Topic {
    constructor(id, content, sources, hashtags) {
        this.id = id;
        this.content = content;
        this.sources = sources;
        this.hashtags = hashtags;

        Topic.validateContent(content);
        Topic.validateArray(sources, 'Sources');
        Topic.validateArray(hashtags, 'Hashtags');
    }

    static fromRow(row) {
        return new Topic(row.id, row.content, row.sources, row.hashtags);
    }

    static validateContent(content) {
        if (content.length > 255) {
            throw new InvalidTopicException('Content cannot be more than 255 characters: ' + content);
        }
    }

    static validateArray(array, arrayName) {
        if (array.length === 0) {
            throw new InvalidTopicException(`${arrayName} cannot be empty`);
        }
        array.forEach(item => {
            if (item.length > 255) {
                throw new InvalidTopicException(`A ${arrayName.toLowerCase().slice(0, -1)} cannot be more than 255 characters: ` + item);
            }
        });
    }
}

module.exports = Topic;