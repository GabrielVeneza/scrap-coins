// server.js
import express from 'express';
import { Scrap } from './scrap.js';

const app = express();
const port = 3000;

app.get('/scrap', async (req, res) => {
  try {
    const result = await Scrap();
    res.json({ dolarhoje: result });
  } catch (error) {
    res.status(500).send('Error scraping data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
