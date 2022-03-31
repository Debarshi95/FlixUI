const snackbar = document.querySelector("#snackbar-root");
const btnSnackbar = document.querySelector("#btn-snackbar");
const snackbarAuto = document.querySelector("#snackbar-auto");

btnSnackbar.addEventListener("click", function () {
  if (snackbar.classList.contains("d-none")) {
    snackbar.classList.remove("d-none");
  } else {
    snackbar.classList.add("d-none");
  }
});

snackbarAuto.addEventListener("click", function () {
  setTimeout(() => {
    snackbarAuto.classList.add("d-none");
  }, 5000);
});
