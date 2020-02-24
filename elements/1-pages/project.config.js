// ***** Project Page ***** //

const faker = require('faker/locale/en');

if (process.env.NODE_ENV === 'testing') {
  faker.seed(123);
}

module.exports = {
  label: 'Project',
  context: {
    heading: {
      level: '2',
      text: 'Project'
    },
    intro: {
      text: 'Tell us about your research project:'
    }
  }
}
