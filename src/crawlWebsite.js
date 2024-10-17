import axios from 'axios';

import * as cheerio from 'cheerio';
import { feedGenerator } from './Feed.js';

// The URL to crawl
const url = 'https://www.nike.com/au/w/mens-basketball-shoes-3glsmznik1zy7ok?sortBy=newest';

export async function crawlWebsite(feedTitle, fetchItems) {
  try {
    const feed = feedGenerator(feedTitle);
    // Fetch the HTML of the page
    const { data } = await axios.get(url, { responseType: 'arraybuffer' });

    // Load the HTML into Cheerio
    const $ = cheerio.load(data);

    const items = fetchItems($, fetchItems);

    items.forEach((post) => {
      feed.addItem({
        title: post.title,
        id: post.link,
        link: post.link,
      });
    });

    return feed.rss2();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
  }
}
