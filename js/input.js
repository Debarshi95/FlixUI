const input = document.querySelector("#input");
const error = document.querySelector("#input-error");

input.addEventListener("keyup", function (e) {
  const { value } = e.target;

  if (value.length > 4) {
    error.classList.remove("d-none");
    error.textContent = "";
  } else {
    error.textContent = "Input must be of length 4 and above";
  }
});
