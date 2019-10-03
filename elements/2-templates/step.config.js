// ***** Step Template ***** //

const faker = require('faker/locale/en');

module.exports = {
  label: 'Step',
  context: {
    step: {
      header: 'Header',
      subheading: 'Subheading',
      component1: 'Component 1 ' + faker.lorem.paragraphs(),
      component2: 'Component 2 ' + faker.lorem.paragraphs(),
      component3: 'Component 3 ' + faker.lorem.paragraphs(),
      component4: 'Component 4 ' + faker.lorem.paragraphs(),
      component5: 'Component 5 ' + faker.lorem.paragraphs(),
      footer: 'Footer'
    }
  }
}
