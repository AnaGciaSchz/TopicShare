const Topic = require('../models/Topic');
const pool = require('../db');

class TopicsRepository {
    
    async getAll() {
        try {
        const result = await pool.query('SELECT * FROM topics');
        return result.rows.map(row => Topic.fromRow(row));
        } catch (err) {
        console.error('Error executing query', err.stack);
        throw new Error('Internal Server Error');
        }
    }
    
    async create(topic) {
        try {
            const result = await pool.query(
                'INSERT INTO topics (content, sources, hashtags) VALUES ($1, $2, $3) RETURNING *',
                [topic.content, topic.sources, topic.hashtags]
            );
            return Topic.fromRow(result.rows[0]);
        } catch (err) {
            console.error('Error executing query', err.stack);
            throw new Error('Internal Server Error');
        }
    }
    async deleteById(id) {
        try {
            const result = await pool.query(
                'DELETE FROM topics WHERE id = $1 RETURNING *',
                [id]
            );
            return Topic.fromRow(result.rows[0]);
        } catch (err) {
            console.error('Error executing query', err.stack);
            throw new Error('Internal Server Error');
        }
    }

    async getById(id) {
        try {
            const result = await pool.query(
                'SELECT * FROM topics WHERE id = $1',
                [id]
            );
            return Topic.fromRow(result.rows[0]);
        } catch (err) {
            console.error('Error executing query', err.stack);
            throw new Error('Internal Server Error');
        }
    }
    
    async updateById(id, topic) {
        try {
            const result = await pool.query(
                'UPDATE topics SET content = $2, sources = $3, hashtags = $4 WHERE id = $1 RETURNING *',
                [id, topic.content, topic.sources, topic.hashtags]
            );
            return Topic.fromRow(result.rows[0]);
        } catch (err) {
            console.error('Error executing query', err.stack);
            throw new Error('Internal Server Error');
        }
    }
    
    async getIds() {
        try {
            const result = await pool.query('SELECT id FROM topics');
            return result.rows.map(row => row.id);
        } catch (err) {
            console.error('Error executing query', err.stack);
            throw new Error('Internal Server Error');
        }
    }
}

module.exports = TopicsRepository;