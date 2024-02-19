import '../scss/style.scss';


const html = document.documentElement;
const modeCheckbox = document.getElementById('myonoffswitch');

const onDarkMode = () => {
  html.classList.add('is-darkMode');
};

const offDarkMode = () => {
  html.classList.remove('is-darkMode');
};

const osDark = window.matchMedia('(prefers-color-scheme: dark)');

if (sessionStorage.getItem('darkMode') === 'on') {
  onDarkMode();
  modeCheckbox.checked = true;
} else if (sessionStorage.getItem('darkMode') === 'off') {
  offDarkMode();
} else if (osDark.matches) {
  onDarkMode();
}

osDark.addEventListener('change', (e) => {
  if (e.matches) {
    onDarkMode();
    modeCheckbox.checked = true;
    sessionStorage.setItem('darkMode', 'on');
  } else {
    offDarkMode();
    modeCheckbox.checked = false;
    sessionStorage.setItem('darkMode', 'off');
  }
});

modeCheckbox.addEventListener('change', () => {
  if (modeCheckbox.checked) {
    onDarkMode();
    sessionStorage.setItem('darkMode', 'on');
  } else {
    offDarkMode();
    sessionStorage.setItem('darkMode', 'off');
  }
}, false);
