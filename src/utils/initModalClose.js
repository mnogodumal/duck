export function initModalClose(selector) {
  const modal = document.querySelector(selector)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('form-container--visible')
    }
  })
}
