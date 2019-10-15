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
