// ***** Contributor Component ***** //

const faker = require('faker/locale/en');
const fakerData = [];
const contributor = ['author', 'principal investigator', 'curator'];

contributor.forEach(options)

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
  label: 'Contributor Type',
  context: {
    label: {
      for: 'c-contributor',
      text: 'Contributor Type',
      required: true
    },
    select: {
      id: 'c-contributor',
      required: true
    },
    selectoption: fakerData
  }
}
