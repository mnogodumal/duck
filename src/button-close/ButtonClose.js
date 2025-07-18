import './ButtonClose.css';

export function ButtonClose() {
  const button = document.createElement('button')
  button.className = 'btn-close'
  button.setAttribute('type', 'button')

  button.innerHTML = `
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.00002 5L8.53556 8.53553M1.46449 8.53553L5.00002 5L1.46449 8.53553ZM8.53556 1.46447L5.00002 5L8.53556 1.46447ZM5.00002 5L1.46449 1.46447L5.00002 5Z" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
  `

  return button
}