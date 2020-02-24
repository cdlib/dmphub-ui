// ***** DMP Page ***** //

const faker = require('faker/locale/en');

if (process.env.NODE_ENV === 'testing') {
  faker.seed(123);
}

module.exports = {
  label: 'DMP',
  context: {
    heading: {
      level: '2',
      text: 'Data Management Plan'
    },
    intro: {
      text: 'Tell us about your plan for managing your research outputs:'
    }
  }
}
