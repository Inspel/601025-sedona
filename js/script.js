var modal_button = document.querySelector(".modal-button");

var search_form = document.querySelector(".search-form");

var date_in = search_form.querySelector("#in");

var date_out = search_form.querySelector("#out");

var adults = search_form.querySelector("#adults");

var kids = search_form.querySelector("#kids");

document.addEventListener("DOMContentLoaded", function(index_form_hide) {
  search_form.classList.add("toggle-off");
});

modal_button.addEventListener("click", function (index_form_toggle) {
  index_form_toggle.preventDefault();
  search_form.classList.toggle("toggle-off")
});

search_form.addEventListener("submit", function (index_form_error) {
  if (!date_in.value || !date_out.value || !kids.value || !adults.value) {
    index_form_error.preventDefault();
    search_form.classList.remove("search-form-error");
    search_form.offsetWidth = search_form.offsetWidth;
    search_form.classList.add("search-form-error");
  }
});



