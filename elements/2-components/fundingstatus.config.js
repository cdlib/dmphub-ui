// ***** Funding Status Component ***** //

const faker = require('faker/locale/en');
const fakerData = [];
const fundingStatus = ['planned', 'applied', 'granted', 'rejected'];

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
  label: 'Funding Status',
  context: {
    label: {
      for: 'c-fundingstatus',
      text: 'Funding Status'
    },
    select: {
      id: 'c-fundingstatus'
    },
    selectoption: fakerData
  }
}
