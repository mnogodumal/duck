export function createNavLinks() {
  const nav = document.createElement('nav');
  nav.className = 'nav-links';
  nav.innerHTML = `
   <a href="#" class="nav-link nav-link--active">Главная</a>
            <a href="#" class="nav-link">
              Каталог
              <svg
                class="nav-link__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M6 8L10 12L14 8"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </a>
            <a href="#" class="nav-link">Блог</a>
            <a href="#" class="nav-link">Отзывы</a>
            <a href="#" class="nav-link">Контакты</a>
  `;
  return nav;
}