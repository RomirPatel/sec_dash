// backend/server.js

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); 
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

app.get('/api/events', (req, res) => {
    db.query('SELECT * FROM events ORDER BY timestamp DESC', (err, results) => {
        if (err) {
            console.error('Error fetching events:', err);
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results); 
    });
});

const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


const axios = require('axios');


async function fetchSecurityNews() {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: 'cybersecurity', 
                apiKey: process.env.NEWS_API_KEY, 
                language: 'en',
                sortBy: 'publishedAt'
            }
        });

        const articles = response.data.articles;

        articles.forEach(article => {
            const source = article.source.name;
            const type = 'News';
            const severity = 'low'; 
            const description = `${article.title} - ${article.description}`;
            const timestamp = new Date(article.publishedAt);

            db.query(
                'INSERT INTO events (timestamp, source, type, severity, description) VALUES (?, ?, ?, ?, ?)',
                [timestamp, source, type, severity, description],
                (err, result) => {
                    if (err) {
                        console.error('Error inserting data:', err);
                    } else {
                        console.log(`Inserted article: ${article.title}`);
                    }
                }
            );
        });
    } catch (error) {
        console.error('Error fetching security news:', error);
    }
}

fetchSecurityNews();
setInterval(fetchSecurityNews, 60 * 60 * 1000); 
