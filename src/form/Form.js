import { ButtonClose } from '../button-close/ButtonClose'
import { Button } from '../button/Button'
import './Form.css'

function isPhoneValid(phone) {
  const digits = phone.replace(/\D/g, '')
  return digits.length === 11
}

export function Form({ onSubmit, inputs }) {
  const form = document.createElement('form')
  form.className = 'form'

  inputs.forEach(({ input, element }) => {
    form.appendChild(element)
  })

  form.appendChild(Button({ type: 'primary', text: 'Отправить' }))
  const closeBtn = ButtonClose()
  closeBtn.addEventListener('click', () => {
    const container = document.querySelector('.form-container')
    container.classList.remove('form-container--visible')
  })

  form.appendChild(closeBtn)

  function createLink(text, href) {
    const link = document.createElement('a')
    link.href = href
    link.textContent = text
    link.className = 'form__link'
    return link
  }

  const agreement = document.createElement('p')
  agreement.className = 'form__agreement'

  agreement.append(
    document.createTextNode('Нажимая кнопку “Отправить”, вы соглашаетесь с '),
    createLink('политикой конфиденциальности', '#'),
    document.createTextNode(' и '),
    createLink('договором оферты', '#'),
    document.createTextNode('.')
  )

  form.appendChild(agreement)

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    let isValid = true

    inputs.forEach(({ input, name }) => {
      const value = input.value.trim()

      if (input.name === 'phone') {
        if (!isPhoneValid(value)) {
          isValid = false;
          input.classList.add('form__input--error');
          return;
        }
      }

      if (!value) {
        isValid = false
        input.classList.add('form__input--error')
      } else {
        input.classList.remove('form__input--error')
      }
    })

    if (!isValid) return

    const data = Object.fromEntries(new FormData(form))
    onSubmit?.(form, data)
    form.reset()
  })

  return form
}