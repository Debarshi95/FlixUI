const links = document.getElementById("links");
const icon = document.getElementById("hamburger-icon");

icon.addEventListener("click", function () {
  if (links.classList.contains("Navigation_links")) {
    links.classList.remove("Navigation_links");
  } else {
    links.classList.add("Navigation_links");
  }
});
