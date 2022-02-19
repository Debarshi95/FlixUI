const modal = document.querySelector("#modal-root");
const btnOpenModal = document.querySelector("#btn-modal-controller");

btnOpenModal.addEventListener("click", function () {
  const { body } = document;
  if (modal.classList.contains("d-none")) {
    body.classList.add("modal-open");
    modal.classList.remove("d-none");
  }
});

modal.addEventListener("click", function () {
  const { body } = document;
  if (body.classList.contains("modal-open")) {
    body.classList.remove("modal-open");
    modal.classList.add("d-none");
  }
});
