const container = document.querySelector("#list-container");

container.addEventListener("click", function (e) {
  if (e.target.tagName === "I") {
    const element = e.target;
    if (element.classList.contains("text-yellow")) {
      element.classList.remove("text-yellow");
    } else {
      element.classList.add("text-yellow");
    }
  }
});
