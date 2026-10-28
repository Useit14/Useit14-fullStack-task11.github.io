const btn = document.querySelector('.page-header__navicon');
const dropdown = document.querySelector('.dropdown');
if (btn && dropdown) {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('is-open');
  });
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
      dropdown.classList.remove('is-open');
    }
  });
}
