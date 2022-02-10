const btnToggle = document.querySelector("#btn-toggle");
const sidebarList = document.querySelector("#sidebar-nav");

btnToggle.addEventListener("click", function () {
  console.log({ sidebarList });
  let display = sidebarList.style.display;
  if (display === "none") {
    sidebarList.style.display = "block";
  } else {
    sidebarList.style.display = "none";
  }
  //   this.style.transform = 'rotate(180deg)';
});
