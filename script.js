const filterButtons = document.querySelectorAll(".filter-buttons ul li");
const filterRecipes = document.querySelectorAll(".filterable-recipes .item");

console.log(filterButtons, filterRecipes);

// filteredRecipes function starts
const filteredRecipes = (evt) => {
  document.querySelector(".active").classList.remove("active");
  evt.target.classList.add("active");
  console.log(evt.target.getAttribute("data-filter"));

  // Getting the event value to match with the recipes value
  const filterValue = evt.target.getAttribute("data-filter");

  // show the selected countries recipes
  filterRecipes.forEach((item) => {
    item.classList.add("hide");
    if (item.classList.contains(filterValue) || filterValue === "all") {
      item.classList.remove("hide");
    }
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", filteredRecipes);
});
