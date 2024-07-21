let menu = document.querySelector("#menu-btn");
let ligade = document.querySelector(".sam .bassu .ligade");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  ligade.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  ligade.classList.remove("active");
};
