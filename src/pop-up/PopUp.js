import './PopUp.css'
import { ButtonClose } from '../button-close/ButtonClose'
import { createNavLinks } from '../utils/createNavLinks'
import { Button } from '../button/Button'

export function PopUp() {
  const popup = document.createElement('div')
  popup.className = 'popup'

  const content = document.createElement('div')
  content.className = 'popup__content'

  const closeBtn = ButtonClose()
  closeBtn.addEventListener('click', close)

  const nav = createNavLinks()

  nav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', close)
  })

  content.appendChild(closeBtn)
  content.appendChild(nav)

  const callBtn = Button({
    type: 'primary',
    text: 'Заказать обратный звонок',
    id: 'btn-open-form-pop'
  })

  callBtn.addEventListener('click', () => {
    const container = document.querySelector('.form-container')
    container.classList.add('form-container--visible')
    close()
  })

  content.appendChild(callBtn)

  popup.appendChild(content)

  document.body.appendChild(popup)


  function open() {
    popup.classList.add('visible')
    document.querySelector('.toggle')?.classList.add('hidden')
    document.querySelector('.btn-icon')?.classList.add('hidden')
    document.querySelector('.btn-close')?.classList.add('visible')
  }

  function close() {
    popup.classList.remove('visible')
    document.querySelector('.toggle')?.classList.remove('hidden')
    document.querySelector('.btn-icon')?.classList.remove('hidden')
    document.querySelector('.btn-close')?.classList.remove('visible')
  }

  return {
    node: popup,
    open,
    close,
  }
}

