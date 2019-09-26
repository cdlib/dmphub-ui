// ***** Language Component ***** //

const faker = require('faker/locale/en');
const fakerData = [];
const language = ['English', 'French', 'Spanish', 'German'];

language.forEach(options)

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
  label: 'Language',
  context: {
    label: {
      for: 'c-language',
      text: 'Language',
      required: true
    },
    select: {
      id: 'c-language',
      required: true
    },
    selectoption: fakerData
  }
}
