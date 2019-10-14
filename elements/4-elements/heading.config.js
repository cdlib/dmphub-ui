// ***** Heading Element ***** //

const faker = require('faker/locale/en');

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

module.exports = {
  collated: true,
  default: 'Heading Level 1',
  label: 'Heading',
  context: {
    heading: {
      level: '1',
      id: 'test-id',
      text: toTitleCase(faker.lorem.words(6))
    }
  },
  variants: [
    {
      name: 'Heading Level 2',
      context: {
        heading: {
          level: '2'
        }
      }
    },
    {
      name: 'Heading Level 3',
      context: {
        heading: {
          level: '3'
        }
      }
    }
  ]
}
