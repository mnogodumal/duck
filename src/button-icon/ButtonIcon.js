import './ButtonIcon.css'

export function ButtonIcon({ svg }) {
  const button = document.createElement('button')
  button.className = 'btn-icon'

  const wrapper = document.createElement('span')
  wrapper.className = 'btn-icon__img'
  wrapper.innerHTML = svg

  button.appendChild(wrapper)
  return button
}