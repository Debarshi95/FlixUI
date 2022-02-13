const btnAlert = document.querySelector("#btn-close-alert");
const modal = document.querySelector("#modal-root");
const btnOpenModal = document.querySelector("#open-modal");
const btnToggle = document.querySelector("#btn-toggle");
const sidebarList = document.querySelector("#sidebar-nav");

btnToggle.addEventListener("click", function () {
  let display = sidebarList.style.display;
  if (display === "none") {
    sidebarList.style.display = "block";
  } else {
    sidebarList.style.display = "none";
  }
  //   this.style.transform = 'rotate(180deg)';
});

btnAlert.addEventListener("click", function (e) {
  e.currentTarget.parentNode.style.display = "none";
});

btnOpenModal.addEventListener("click", function () {
  const body = document.querySelector("body");

  if (modal.classList.contains("d-none")) {
    body.classList.add("modal-open");
    modal.classList.remove("d-none");
    window.scrollTo(0, 0);
  }
});

modal.addEventListener("click", function () {
  this.classList.add("d-none");
});
