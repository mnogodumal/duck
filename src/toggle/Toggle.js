import './Toggle.css';

export function Togle() {
  const button = document.createElement('button')
  button.className = 'toggle'
  button.setAttribute('type', 'button')

  button.innerHTML = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 4H14" stroke="#1F2937" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M2 8H14" stroke="#1F2937" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M2 12H14" stroke="#1F2937" stroke-linecap="round" stroke-linejoin="round" />
</svg>
  `

  // button.addEventListener('click', () => {
  //   const container = document.querySelector('.form-container');
  //   container.classList.remove('form-container--visible');
  // })

  return button
}