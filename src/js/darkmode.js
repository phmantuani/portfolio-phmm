// DOM elements
const themeSwitch = document.getElementById('theme-switch')

// Constants
const DARK_MODE_KEY = 'darkmode'
const DARK_MODE_ACTIVE = 'active'

// Enable dark mode
function enableDarkMode() {
  document.body.classList.add('darkmode')
  localStorage.setItem(DARK_MODE_KEY, DARK_MODE_ACTIVE)
}

// Disable dark mode
function disableDarkMode() {
  document.body.classList.remove('darkmode')
  localStorage.setItem(DARK_MODE_KEY, null)
}

// Check saved theme on page load
function loadTheme() {
  const saved = localStorage.getItem(DARK_MODE_KEY)

  if (saved === DARK_MODE_ACTIVE) {
    enableDarkMode()
  } else if (saved === 'inactive') {
    disableDarkMode()
  } else {
    // First visit, usa a preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
  }
}

// Handle theme switch click
function toggleTheme() {
  const darkMode = localStorage.getItem(DARK_MODE_KEY)
  darkMode === DARK_MODE_ACTIVE ? disableDarkMode() : enableDarkMode()
}

// Initialize
loadTheme()
themeSwitch.addEventListener('click', toggleTheme)
