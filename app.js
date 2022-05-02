const btnsRating = document.querySelectorAll(".btn-rating");
const result = document.querySelector(".selected-number");
const btnSubmit = document.querySelector(".btn-submit");
const cardRating = document.querySelector("#cardRating");
const cardThanks = document.querySelector("#cardThanks");

const clickBtnSubmit = () => {
  if (result.textContent !== "") {
    cardRating.classList.add("hide");
    cardThanks.classList.remove("hide");
  } else {
    cardRating.querySelector(".rating-validatiion").classList.remove("hide");
  }
};

btnSubmit.addEventListener("click", clickBtnSubmit);

const click = (e) => {
  result.textContent = `You selected ${e.target.textContent} out of 5`;
  btnsRating.forEach((btn) => {
    btn.classList.remove("active");
  });
  cardRating.querySelector(".rating-validatiion").classList.add("hide");
  e.target.classList.add("active");
};

btnsRating.forEach((btn) => {
  btn.addEventListener("click", click);
});
