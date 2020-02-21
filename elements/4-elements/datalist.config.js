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
  preview: '@template-elements',
  label: 'Datalist',
  context: {
    datalist: {
      id: 'datalist',
    },
    datalistoption: fakerData
  }
};
