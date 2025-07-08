import { ButtonClose } from "../button-close/ButtonClose"
import { ButtonIcon } from "../button-icon/ButtonIcon"
import { Button } from "../button/Button"
import { PopUp } from "../pop-up/PopUp"
import { Togle } from "../toggle/Toggle"
import { createNavLinks } from "../utils/createNavLinks"
import { initNavLinks } from "../utils/initNavLinks"

export function Header() {

  const navContainer = document.querySelector('.nav-links')
  const nav = createNavLinks()
  navContainer.replaceWith(nav)

  const btnGroup = document.querySelector('#btn-group-container')

  btnGroup.appendChild(ButtonIcon({
    svg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.3335 7.33332L6.00016 2.66666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.6667 7.33332L10 2.66666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M1.3335 7.33334H14.6668" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M2.3335 7.33334L3.40016 12.2667C3.4625 12.5724 3.63006 12.8465 3.87369 13.0414C4.11731 13.2363 4.42157 13.3396 4.7335 13.3333H11.2668C11.8668 13.3333 12.4668 12.8667 12.6002 12.2667L13.7335 7.33334" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 7.33334L6.66667 13.3333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3 10.3333H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10.0002 7.33334L9.3335 13.3333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
  }))
  const callBtn = Button({
    type: 'primary',
    text: 'Заказать обратный звонок',
    id: 'btn-open-form'
  })

  callBtn.addEventListener('click', () => {
    const container = document.querySelector('.form-container');
    container.classList.add('form-container--visible');
  })

  btnGroup.appendChild(callBtn)

  btnGroup.append(Togle())

  const popup = PopUp()
  document.body.appendChild(popup.node)

  const toggleBtn = document.querySelector('.toggle')
  toggleBtn.addEventListener('click', () => popup.open())

  const closeBtn = ButtonClose()
  btnGroup.append(closeBtn)
  closeBtn.addEventListener('click', () => popup.close())

  initNavLinks()
}