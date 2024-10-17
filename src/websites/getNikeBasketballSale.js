import { crawlWebsite } from '../crawlWebsite.js';

export const getNikeBasketballSale = async () => {
  const fetchItems = ($) => {
    const items = [];
    $('a.product-card__img-link-overlay').each((index, element) => {
      const title = $(element).attr('aria-label');
      const link = $(element).attr('href');

      // const image = $(element).find('div > img');
      // console.log(image);
      // Store the title and link in the articles array
      items.push({
        title: title.trim(),
        link: link.trim(),
      });
    });

    return items;
  };

  return crawlWebsite('Nike basketball shoes sales', fetchItems);
};
