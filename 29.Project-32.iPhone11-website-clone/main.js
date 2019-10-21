const selectElement = (element) => {
  return document.querySelector(element);
}

selectElement('.mobile-menu').addEventListener('click', () => {
  selectElement('header').classList.toggle('active');
})