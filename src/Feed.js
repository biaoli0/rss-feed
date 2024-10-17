import { Feed } from 'feed';

export const feedGenerator = (title) => {
  const feed = new Feed({
    title,
    id: 'https://github.com/biaoli0',
    link: 'https://github.com/biaoli0',
    copyright: 'All rights reserved 2024, Biao Li',
  });

  return feed;
};
