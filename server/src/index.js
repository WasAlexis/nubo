/* Entry for server */

import express from 'express';

process.loadEnvFile("./.env");

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Nubo" });
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${port}`);
});