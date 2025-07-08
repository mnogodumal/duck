export function initNavLinks() {
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      navLinks.forEach((l) => l.classList.remove('nav-link--active'))
      link.classList.add('nav-link--active')
    })
  })
}