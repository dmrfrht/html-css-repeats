// Open the menu on click
document.querySelector('.open').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.add('active');
});

// Close the menu on click
document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.remove('active');
});

