export function applyPhoneMask(input) {
  input.addEventListener('input', (e) => {
    let value = input.value.replace(/\D/g, '')
    if (value.length > 11) value = value.slice(0, 11)

    let formatted = '+7 ('
    if (value.length > 1) formatted += value.slice(1, 4)
    if (value.length >= 4) formatted += ') ' + value.slice(4, 7)
    if (value.length >= 7) formatted += '-' + value.slice(7, 9)
    if (value.length >= 9) formatted += '-' + value.slice(9, 11)

    input.value = formatted
  })
}