const btnToggle = document.querySelector('#btn-toggle');
const sidebarList = document.querySelector('#sidebar-nav');

btnToggle.addEventListener('click', function () {
  console.log('clicked');
  const classes = sidebarList.className.split(' ');
  if (classes.includes('d-none')) {
    sidebarList.classList.remove('d-none');
  } else {
    sidebarList.classList.add('d-none');
  }
  //   this.style.transform = 'rotate(180deg)';
});
