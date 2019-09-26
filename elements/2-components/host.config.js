// ***** Host Component ***** //

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
  label: 'Host',
  context: {
    label: {
      for: 'c-host',
      text: 'Host'
    },
    input: {
      id: 'c-host',
      type: 'text',
      list: 'host-list'
    },
    datalist: {
      id: 'host-list'
    },
    datalistoption: fakerData
  }
}
