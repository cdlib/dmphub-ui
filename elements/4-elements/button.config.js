// ***** Button Elements ***** //

module.exports = {
  collated: true,
  default: '1',
  label: 'Buttons',
  context: {
    button: {
      id: 'button-id1',
      text: 'Generic',
      arialabel: '',
      disabled: false
    }
  },
  variants: [
    {
      name: '2', // link--2.hbs
      context: {
        button: {
          id: 'button-id2',
          text: 'Add',
          arialabel: 'Add',
        }
      }
    },
    {
      name: '3', // link--3.hbs
      context: {
        button: {
          id: 'button-id3',
          text: 'Remove',
          arialabel: 'Remove',
        }
      }
    }
  ]
}
