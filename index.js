import express from 'express';
import { getNikeLatestBasketball } from './src/websites/getNikeLatestBasketball.js';
import { getNikeLatestBasketballSale } from './src/websites/getNikeLatestBasketballSale.js';

const app = express();
const FEED_MAP = {
  'latest-nike-shoes': getNikeLatestBasketball,
  'latest-nike-shoes-sale': getNikeLatestBasketballSale,
};

// Set up a route to serve the RSS feed as HTML
app.get('/rss/:feedId', async (req, res) => {
  const feedId = req.params.feedId;
  const fetchFeed = FEED_MAP[feedId];

  try {
    const feed = await fetchFeed();
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
