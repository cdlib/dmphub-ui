// ***** Accordion Component ***** //

const faker = require('faker/locale/en');
const fakerData1 = [];
const accordion1Labels = ['Staff', 'Ethics', 'Cost'];
const fakerData2 = [];
const accordion2Labels = ['Overview', 'Security and Privacy', 'Technical Resources', 'Metadata', 'Distributions'];
const fakerData3 = [];
const accordion3Labels = ['Host', 'Licenses'];

accordion1Labels.forEach(function(item) {
  fakerData1.push({
    accordion: {
      label: item,
      content: faker.lorem.paragraphs()
    }
  })
})

accordion2Labels.forEach(function(item) {
  fakerData2.push({
    accordion: {
      label: item,
      content: faker.lorem.paragraphs()
    }
  })
})

accordion3Labels.forEach(function(item) {
  fakerData3.push({
    accordion: {
      label: item,
      content: faker.lorem.paragraphs()
    }
  })
})

module.exports = {
  collated: true,
  default: '1',
  label: 'Accordion',
  context: {
    accordion: {
      id1: 'accordion-funding',
      id2: 'accordion-datasets',
      id3: 'accordion-distribution'
    },
    accordion1: fakerData1,
    accordion2: fakerData2,
    accordion3: fakerData3
  }
}
