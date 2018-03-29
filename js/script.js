var search_button = document.querySelector(".modal-button");

var search_form = document.querySelector(".search-form");

search_button.addEventListener("click", function (index_form_toggle) {
  index_form_toggle.preventDefault();
  search_form.classList.toggle("toggle-off")
});
