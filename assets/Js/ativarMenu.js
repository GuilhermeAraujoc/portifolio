function ativarMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('ativar');
  const active = nav.classList.contains('ativar');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
  }
}
