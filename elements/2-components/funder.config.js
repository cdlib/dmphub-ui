// ***** Funder Component ***** //

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
  label: 'Funder',
  context: {
    label: {
      for: 'c-funder',
      text: 'Funder'
    },
    input: {
      id: 'c-funder',
      type: 'text',
      list: 'funder-list'
    },
    datalist: {
      id: 'funder-list'
    },
    datalistoption: fakerData
  }
}
