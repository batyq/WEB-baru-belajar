// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#coffe-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//remove bar
const coffe = document.querySelector("#coffe-menu");
document.addEventListener("click", function (e) {
  if (!coffe.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
