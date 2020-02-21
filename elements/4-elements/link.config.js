// ***** Link Element ***** //

const faker = require('faker/locale/en');

module.exports = {
  preview: '@template-elements',
  label: 'Link',
  context: {
    link: {
      href: faker.internet.url(),
      text: 'link',
      ariacurrent: 'true'
    }
  }
}
