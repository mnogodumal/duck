export const categories = [
  'Классические',
  'Уточки панки',
  'Супергерои',
  'Милые',
  'Для детей',
  'Взрослым',
]

export function Category() {
  const ul = document.createElement('ul')
  ul.className = 'category__list'

  categories.forEach((label) => {
    const li = document.createElement('li')
    li.className = 'category__item'

    const content = document.createElement('div')
    content.className = 'category__content'

    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    icon.classList.add('category__icon')
    icon.setAttribute('width', '32')
    icon.setAttribute('height', '32')
    icon.setAttribute('viewBox', '0 0 32 32')
    icon.setAttribute('fill', 'none')
    icon.innerHTML = `
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M16.3328 10.751C16.6078 10.4423 17.0815 10.4145 17.3909 10.6889L22.7484 15.441C22.9085 15.583 23 15.7864 23 16C23 16.2136 22.9085 16.417 22.7484 16.559L17.3909 21.3111C17.0815 21.5855 16.6078 21.5577 16.3328 21.249C16.0578 20.9403 16.0856 20.4676 16.395 20.1932L20.2793 16.7479H9.74948C9.33555 16.7479 9 16.413 9 16C9 15.587 9.33555 15.2521 9.74948 15.2521H20.2793L16.395 11.8068C16.0856 11.5324 16.0578 11.0597 16.3328 10.751Z"
        fill="#201F29"
      />
    `

    const span = document.createElement('span')
    span.className = 'category__label'
    span.textContent = label

    content.appendChild(icon)
    content.appendChild(span)
    li.appendChild(content)
    ul.appendChild(li)
  })

  return ul
}
