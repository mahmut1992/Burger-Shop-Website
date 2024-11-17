const searchForm = document.querySelector(".search-form");

//! Buttons

const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
});
const cartItemsContainer = document.querySelector(".cart-items-container");
const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", function () {
  cartItemsContainer.classList.toggle("active");
});
