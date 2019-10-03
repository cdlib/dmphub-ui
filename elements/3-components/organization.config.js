// ***** Organization Component ***** //

const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 10; i++) {
  fakerData.push({
    datalist: {
      option: {
        value: faker.commerce.productName()
      }
    }
  });
}

module.exports = {
  label: 'Organization',
  context: {
    label: {
      for: 'c-organization',
      text: 'Organization'
    },
    input: {
      id: 'c-organization',
      type: 'text',
      list: 'organization-list'
    },
    datalist: {
      id: 'organization-list'
    },
    datalistoption: fakerData
  }
}
