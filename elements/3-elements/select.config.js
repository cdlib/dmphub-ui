const faker = require('faker/locale/en');
const fakerData = [];

for (var i = 0; i < 10; i++) {
  fakerData.push({
    select: {
      option: {
        value: i + 1,
        label: faker.commerce.productName(),
        default: i == 0
      }
    }
  });
}

module.exports = {
  label: 'Select',
  context: {
    select: {
      name: 'name',
      id: 'select',
      multiple: false,
      required: false,
      disabled: false,
      placeholder: {
        exists: true,
        label: 'Choose Your Option'
      },
    },
    selectoption: fakerData
  }
};
