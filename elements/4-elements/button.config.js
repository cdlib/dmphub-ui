// ***** Button Elements ***** //

module.exports = {
  preview: '@template-elements',
  collated: true,
  default: '1',
  label: 'Buttons',
  context: {
    button: {
      id: 'button-id1',
      text: 'Generic',
      type: 'button',
      arialabel: '',
      disabled: false,
      hidden: false
    }
  },
  variants: [
    {
      name: '2', // button--2.hbs
      context: {
        button: {
          id: 'button-id2',
          text: 'Add',
          arialabel: 'Add'
        }
      }
    },
    {
      name: '3', // button--3.hbs
      context: {
        button: {
          id: 'button-id3',
          text: 'Remove',
          arialabel: 'Remove'
        }
      }
    }
  ]
}
