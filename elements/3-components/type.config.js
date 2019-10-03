// ***** Type Component ***** //

const faker = require('faker/locale/en');
const fakerData = [];
const fundingStatus = ['data', 'database', 'software', 'spreadsheet'];

fundingStatus.forEach(options)

function options(item, index) {
  fakerData.push({
    select: {
      option: {
        value: index + 1,
        label: item,
        default: index == 0
      }
    }
  })
}

module.exports = {
  label: 'Type',
  context: {
    label: {
      for: 'c-type',
      text: 'Type'
    },
    select: {
      id: 'c-type'
    },
    selectoption: fakerData
  }
}
