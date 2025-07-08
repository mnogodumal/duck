import { Button } from './button/Button.js'
import { Input } from './input/Input.js'
import { applyPhoneMask } from './input/applyPhoneMask.js'
import { Form } from './form/Form.js'
import { initModalClose } from './utils/initModalClose.js'
import { Header } from './header/header.js'
import { Category } from './category/Category.js'

export function HeroSection() {
  Header()

  const btnContent = document.querySelector('.content__text')
  btnContent.appendChild(Button({ type: 'secondary', text: 'Смотреть уточек' }))

  const categorySection = document.querySelector('.category')
  categorySection.appendChild(Category())

  const nameField = Input({
    placeholder: 'Ваше имя',
    type: 'text',
    name: 'name',
    label: 'Имя',
  })

  const phoneField = Input({
    placeholder: '+7 (___) ___-__-__',
    type: 'tel',
    name: 'phone',
    label: 'Телефон',
  })

  applyPhoneMask(phoneField.input)

  const contactForm = Form({
    inputs: [nameField, phoneField],
    onSubmit: (form, data) => {
      console.log('Форма отправлена', data)
    },
  })

  document.querySelector('.form-container').appendChild(contactForm)

  initModalClose('.form-container')
}


