const btnAlert = document.querySelector('#btn-close-alert');

btnAlert.addEventListener('click', function (e) {
  e.currentTarget.parentNode.style.display = 'none';
});
