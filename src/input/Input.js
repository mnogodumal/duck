import './Input.css'

export function Input({ placeholder, type, name, label }) {
  const id = name

  const labelEl = document.createElement('label')
  labelEl.textContent = label
  labelEl.setAttribute('for', id)
  labelEl.className = 'form__label'
  labelEl.innerHTML = `${label} <span class="form__required">*</span>`

  const input = document.createElement('input')
  input.type = type
  input.placeholder = placeholder
  input.name = name
  input.id = id
  input.className = 'form__input'

  const wrapper = document.createElement('div')
  wrapper.className = 'form__field'
  wrapper.appendChild(labelEl)
  wrapper.appendChild(input)

  return {
    input,
    element: wrapper,
  }
}
