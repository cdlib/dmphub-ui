// ***** Datasets Page ***** //

const faker = require('faker/locale/en');

if (process.env.NODE_ENV === 'testing') {
  faker.seed(123);
}

module.exports = {
  label: 'Datasets',
  context: {
    heading: {
      level: '2',
      text: 'Datasets'
    },
    button: {
      text: 'Add a dataset'
    }
  }
}
