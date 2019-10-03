// ***** Link Element ***** //

const faker = require('faker/locale/en');

module.exports = {
  label: 'Link',
  context: {
    link: {
      href: faker.internet.url(),
      text: 'link',
      ariacurrent: 'true'
    }
  }
}
