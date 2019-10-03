// ***** Heading Element ***** //

const faker = require('faker/locale/en');

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

module.exports = {
  label: 'Heading',
  context: {
    heading: {
      level: '1',
      id: 'test-id',
      text: toTitleCase(faker.lorem.words(6))
    }
  }
}
