import './Button.css'

export function Button({ type = 'primary', text = '', id }) {
  const button = document.createElement('button')
  button.className = `btn btn--${type}`
  button.textContent = text
  button.id = id || `btn-${Math.random().toString(36).slice(2, 8)}`
  return button
}