const panels = document.querySelectorAll('.panel');
function openPanel() {
  this.classList.toggle('open');
}
function textMoveIn(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
  /* some browsers use flex to represent flex-grow, some use flex, consider about compatibility, we use includes instead of ===
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
  */
}
panels.forEach(panel => panel.addEventListener('click', openPanel))
panels.forEach(panel => panel.addEventListener('transitionend', textMoveIn))
