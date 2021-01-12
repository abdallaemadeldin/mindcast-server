const faker = require('faker');
const categories = require('../../../src/utils/categories');

const getCategory = () => {
  const MAX = categories.length - 1;
  const MIN = 0;

  const RANDOM_INDEX = Math.floor(Math.random() * (MAX - MIN + 0)) + MIN;

  return categories[RANDOM_INDEX];
};

module.exports = {
  thumbnailImageURL: faker.image.avatar(),
  description: faker.lorem.paragraph(),
  imageURL: faker.image.image(),
  title: faker.lorem.words(),
  category: getCategory(),
  stars: Math.random() * 5,
  duration: '01:11',
  durationInSeconds: 71,
  fileName: 'filename',
};
