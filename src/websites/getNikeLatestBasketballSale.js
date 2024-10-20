import { crawlWebsite } from '../crawlWebsite.js';

const cachedItems = {};

// The URL to crawl
const url = 'https://www.nike.com/au/w/sale-basketball-shoes-3glsmz3yaepzy7ok';

export const getNikeLatestBasketball = async () => {
  const fetchItems = ($) => {
    const items = [];
    $('a.product-card__img-link-overlay').each((index, element) => {
      const title = $(element).attr('aria-label');
      const link = $(element).attr('href');
      // const image = $(element).find('div > img');
      // console.log(image);
      // Store the title and link in the articles array
      if (!cachedItems[link]) {
        cachedItems[link] = {
          title: title.trim(),
          link: link.trim(),
          updated: new Date(),
        };
      }

      items.push(cachedItems[link]);
    });

    return items;
  };

  return crawlWebsite(url, 'Nike basketball latest shoes sale', fetchItems);
};
