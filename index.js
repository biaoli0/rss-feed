import express from 'express';
import { getNikeBasketballSale } from './src/websites/getNikeBasketballSale.js';

const app = express();
// Set up a route to serve the RSS feed as HTML
app.get('/rss', async (req, res) => {
  try {
    const feed = await getNikeBasketballSale();
    // Set the content type to 'application/rss+xml' or 'application/xml'
    res.set('Content-Type', 'application/rss+xml');

    // Render the data in an HTML view
    res.send(feed);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    res.status(500).send('Error fetching RSS feed');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
