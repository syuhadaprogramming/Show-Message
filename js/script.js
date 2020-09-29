// get element
const bShowMessage = document.querySelector(".btn-primary");
const bHidenMessage = document.querySelector(".btn-secondary");
const bodyCard = document.querySelector(".body-card");

// do if button show message click
bShowMessage.addEventListener("click", () => {
  bodyCard.classList.toggle("show-message");
  bShowMessage.classList.toggle("hide-message");
  bHidenMessage.classList.toggle("show-message");
});

// do if button hide message click
bHidenMessage.addEventListener("click", () => {
  bHidenMessage.classList.toggle("show-message");
  bShowMessage.classList.toggle("hide-message");
  bodyCard.classList.toggle("show-message");
});
