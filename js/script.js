var search_button = document.querySelector(".modal-button");

var search_form = document.querySelector(".search-form");

document.addEventListener("DOMContentLoaded", function(index_form_hide) {
  search_form.classList.add("toggle-off");
});

search_button.addEventListener("click", function (index_form_toggle) {
  index_form_toggle.preventDefault();
  search_form.classList.toggle("toggle-off")
});
