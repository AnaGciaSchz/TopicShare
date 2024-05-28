const request = require('supertest');
const server = require('../../app'); 
const TopicsController = require('../controllers/TopicsController');

describe('Topics API', () => {
    describe('GET /topics', () => {
        test('should return all topics', async () => {
            const response = await request(server).get('/topics');
            expect(response.status).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
        });
    });

    describe('POST /topics', () => {
        test('should create a new topic', async () => {
            const newTopic = { content: 'New Topic', sources: ['Source1', 'Source2'], hashtags: ['Tag1', 'Tag2'] };
            const response = await request(server)
                .post('/topics')
                .send(newTopic);
            expect(response.status).toBe(201);
            expect(response.body).toMatchObject(newTopic);
        });
    });

    describe('GET /topics/:id', () => {
        test('should retrieve a topic by ID', async () => {
            const topicId = '8ef9ef32-e0f4-4720-b71f-d73b0a0f200a';
            const response = await request(server).get(`/topics/${topicId}`);
            expect(response.status).toBe(200);
        });
    });

    describe('PUT /topics/:id', () => {
        test('should update a topic by ID', async () => {
            const topicId = '8ef9ef32-e0f4-4720-b71f-d73b0a0f200a';
            const updatedTopic = { content: 'Updated Topic', sources: ['Updated Source'], hashtags: ['Updated Tag'] };
            const response = await request(server)
                .put(`/topics/${topicId}`)
                .send(updatedTopic);
            expect(response.status).toBe(200);
            expect(response.body).toMatchObject(updatedTopic);
        });
    });

    describe('DELETE /topics/:id', () => {
        test('should delete a topic by ID', async () => {
            const topicId = '8ef9ef32-e0f4-4720-b71f-d73b0a0f200a';
            const response = await request(server).delete(`/topics/${topicId}`);
            expect(response.status).toBe(204);
        });
    });
});
