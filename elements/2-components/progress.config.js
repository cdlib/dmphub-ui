// ***** Progress Component ***** //

const faker = require('faker/locale/en');
const fakerData = [];
const progressLinks = ['Project', 'DMP', 'Datasets'];

progressLinks.forEach(listitems)

function listitems(item, index) {
  fakerData.push({
    item: {
      text: item,
      ariacurrent: index == 1
    }
  })
}

module.exports = {
  label: 'Progress',
  context: {
    listitem: fakerData
  }
}
