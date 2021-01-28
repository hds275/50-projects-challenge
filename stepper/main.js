const line = document.querySelector('.stepper__line')
const buttonPrev = document.querySelector('.stepper__button[data-role="prev"]')
const buttonNext = document.querySelector('.stepper__button[data-role="next"]')
const steps = document.querySelectorAll('.stepper__step')

const MAX_STEP_INDEX = steps.length
const MIN_STEP_INDEX = 1
let currentStepIndex = MIN_STEP_INDEX

buttonPrev.addEventListener('click', handleClickButtonPrev)
buttonNext.addEventListener('click', handleClickButtonNext)
steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    realIndex = index + 1
    currentStepIndex = realIndex
    renderStepperElements()
  })
})

function handleClickButtonNext() {
  if (currentStepIndex === MAX_STEP_INDEX) {
    alert('Completed!')
    return
  }

  currentStepIndex++
  renderStepperElements()
}

function handleClickButtonPrev() {
  currentStepIndex--
  renderStepperElements()
}

function renderStepperElements() {
  renderButtons()
  renderSteps()
  renderLine()
}

function renderButtons() {
  buttonPrev.disabled = currentStepIndex === 1
  buttonNext.textContent = currentStepIndex === MAX_STEP_INDEX ? 'Done' : 'Next'
}

function renderSteps() {
  steps.forEach((step, index) =>
    step.classList.toggle('stepper__step--active', currentStepIndex > index)
  )
}

function renderLine() {
  const newWidth = ((currentStepIndex - 1) / (MAX_STEP_INDEX - 1)) * 100 + '%'
  line.style.width = newWidth
}
