// ***** Progress Component ***** //

if (document.querySelector('.c-progress')) {
  var steps = document.querySelectorAll('.c-progress li')
  for (var i = 0; i < steps.length; i++) {
    if (steps[i].hasAttribute('aria-current')) {
      break
    }
    steps[i].classList.add('completed')
    steps[i].insertAdjacentHTML('afterbegin', '<span>Completed step: </span>')
  }
}

// ***** Ethics Report Toggle via Ethical Component ***** //

function ethicalToggle () {
  if (ethicalCheckbox.checked === true) {
    ethicsReport.hidden = false
  } else {
    ethicsReport.hidden = true
  }
}

if (document.querySelector('#c-ethical')) {
  var ethicalCheckbox = document.querySelector('#c-ethical')
  var ethicsReport = document.querySelector('#c-ethicsreport')
  ethicalToggle()

  ethicalCheckbox.addEventListener('change', function () {
    ethicalToggle()
  })
}

// ***** Accordion Component ***** //

function accordion (accordionEls) {
  accordionEls.forEach(function (el, index) {
    if (index === 0) {
      el.open = true
    }

    el.addEventListener('click', function () {
      accordionEls.forEach(function (el) {
        if (el !== this) {
          el.open = false
        }
      }, this)
    })
  })
}

if (document.querySelector('.c-accordion')) {
  var fundingAccordionEls = document.querySelectorAll('#accordion-funding details')
  var datasetsAccordtionEls = document.querySelectorAll('#accordion-datasets details')
  var distributionAccordionEls = document.querySelectorAll('#accordion-distribution details')

  accordion(fundingAccordionEls)
  accordion(datasetsAccordtionEls)
  accordion(distributionAccordionEls)
}
