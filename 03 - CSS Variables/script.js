const inputs = document.querySelectorAll('.controls input');
const root = document.querySelector(':root');
function change_fn() {
  let sizing = this.dataset.sizing || '';
  root.style.setProperty(`--${this.name}`, this.value + sizing);
}
inputs.forEach(input => input.addEventListener('change', change_fn));
inputs.forEach(input => input.addEventListener('mousemove', change_fn));